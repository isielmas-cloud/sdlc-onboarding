(function () {
  const data = window.SDLC_DATA;
  if (!data) return;

  const techById = {};
  (data.techCatalog || []).forEach(function (t) {
    techById[t.id] = t;
  });

  const cursorProductById = {};
  (data.cursorPlatformProducts || []).forEach(function (p) {
    cursorProductById[p.id] = p;
  });

  const views = {
    welcome: document.getElementById("view-welcome"),
    basics: document.getElementById("view-basics"),
    tech: document.getElementById("view-tech"),
    competitors: document.getElementById("view-competitors"),
    sdlc: document.getElementById("view-sdlc"),
  };

  const navPills = Array.from(document.querySelectorAll(".nav-pill[data-view]"));
  const flowChart = document.getElementById("flow-chart");
  const detailPanel = document.getElementById("detail-panel");
  const detailTitle = document.getElementById("detail-title");
  const detailSummary = document.getElementById("detail-summary");
  const detailTechChips = document.getElementById("detail-tech-chips");

  const panels = {
    story: document.getElementById("panel-story"),
    tech: document.getElementById("panel-tech"),
    connect: document.getElementById("panel-connect"),
    compare: document.getElementById("panel-compare"),
    rivals: document.getElementById("panel-rivals"),
    challenges: document.getElementById("panel-challenges"),
    cursor: document.getElementById("panel-cursor"),
  };

  const tabToPanel = {
    "tab-story": "story",
    "tab-tech": "tech",
    "tab-connect": "connect",
    "tab-compare": "compare",
    "tab-rivals": "rivals",
    "tab-challenges": "challenges",
    "tab-cursor": "cursor",
  };

  const phaseById = {};
  (data.phases || []).forEach(function (p) {
    phaseById[p.id] = p;
  });

  const tabs = Array.from(document.querySelectorAll(".detail-tabs .tab"));

  let flowBuilt = false;
  let selectedId = null;

  function setTitle() {
    const el = document.getElementById("app-title");
    if (el && data.productName) el.textContent = data.productName;
    document.title = (data.productName || "Engineering 101") + " — SDLC for Sales";
  }

  function showView(name, opts) {
    opts = opts || {};
    Object.keys(views).forEach(function (key) {
      const v = views[key];
      if (!v) return;
      const on = key === name;
      v.hidden = !on;
      v.classList.toggle("is-active", on);
    });

    navPills.forEach(function (pill) {
      pill.classList.toggle("is-active", pill.getAttribute("data-view") === name);
    });

    if (name === "sdlc" && !flowBuilt) {
      buildFlowChart();
      flowBuilt = true;
      if (!opts.skipDefaultPhase && data.phases && data.phases.length) {
        const first = flowChart.querySelector(".flow-node");
        if (first) first.setAttribute("aria-pressed", "true");
        showPhase(data.phases[0]);
      }
    }
  }

  function jumpToSdlcPhase(phaseId, openRivalsTab) {
    const phase = phaseById[phaseId];
    if (!phase) return;
    if (!flowBuilt) {
      buildFlowChart();
      flowBuilt = true;
    }
    showView("sdlc", { skipDefaultPhase: true });
    flowChart.querySelectorAll(".flow-node").forEach(function (b) {
      b.setAttribute("aria-pressed", b.dataset.phaseId === phaseId ? "true" : "false");
    });
    showPhase(phase);
    if (openRivalsTab) setTabPanelVisible("tab-rivals");
  }

  function renderListItems(items) {
    const ul = document.createElement("ul");
    (items || []).forEach(function (text) {
      const li = document.createElement("li");
      li.textContent = text;
      ul.appendChild(li);
    });
    return ul;
  }

  function renderTechPanel(techIds) {
    const frag = document.createDocumentFragment();
    const intro = document.createElement("p");
    intro.className = "panel-intro";
    intro.textContent =
      "These tools from the technology map show up most in this phase. Your org may substitute equivalents (e.g. Jira for Linear).";
    frag.appendChild(intro);

    const list = document.createElement("ul");
    list.className = "tech-detail-list";
    (techIds || []).forEach(function (id) {
      const t = techById[id];
      if (!t) return;
      const li = document.createElement("li");
      const strong = document.createElement("strong");
      strong.textContent = t.vendor;
      li.appendChild(strong);
      li.appendChild(document.createTextNode(" — " + t.category + ". "));
      li.appendChild(document.createTextNode(t.simple));
      list.appendChild(li);
    });
    frag.appendChild(list);
    return frag;
  }

  function renderCursorPanel(phase) {
    const frag = document.createDocumentFragment();
    const intro = document.createElement("p");
    intro.className = "panel-intro";
    intro.textContent =
      "Which parts of the Cursor platform matter most in this phase. Confirm names and packaging against current product material before external claims.";
    frag.appendChild(intro);

    const benefits = phase.cursorProductBenefits || [];
    if (benefits.length) {
      const h4 = document.createElement("h4");
      h4.className = "cursor-panel-subtitle";
      h4.textContent = "Platform mapping";
      frag.appendChild(h4);

      const dl = document.createElement("dl");
      dl.className = "cursor-product-map";
      benefits.forEach(function (row) {
        const prod = cursorProductById[row.productId];
        const dt = document.createElement("dt");
        dt.textContent = prod ? prod.name : row.productId;
        const dd = document.createElement("dd");
        dd.textContent = row.benefit;
        dl.appendChild(dt);
        dl.appendChild(dd);
      });
      frag.appendChild(dl);
    }

    const extra = phase.cursor || [];
    if (extra.length) {
      const h4b = document.createElement("h4");
      h4b.className = "cursor-panel-subtitle";
      h4b.textContent = "Sales notes";
      frag.appendChild(h4b);
      frag.appendChild(renderListItems(extra));
    }

    if (!benefits.length && !extra.length) {
      const p = document.createElement("p");
      p.className = "panel-intro";
      p.textContent =
        "Add cursorProductBenefits (and optional cursor) for this phase in data.js.";
      frag.appendChild(p);
    }

    return frag;
  }

  function setTabPanelVisible(activeTabId) {
    const activePanelKey = tabToPanel[activeTabId];
    if (!activePanelKey) return;
    tabs.forEach(function (tab) {
      const on = tab.id === activeTabId;
      tab.classList.toggle("is-active", on);
      tab.setAttribute("aria-selected", on ? "true" : "false");
    });
    Object.keys(panels).forEach(function (key) {
      const panel = panels[key];
      const visible = key === activePanelKey;
      panel.hidden = !visible;
      panel.classList.toggle("is-visible", visible);
    });
  }

  function renderRivalsForPhase(phaseId) {
    const frag = document.createDocumentFragment();
    const comps = data.competitors || [];
    let any = false;
    comps.forEach(function (c) {
      const note = c.byPhase && c.byPhase[phaseId];
      if (!note) return;
      any = true;
      const block = document.createElement("article");
      block.className = "rival-phase-block";
      const h4 = document.createElement("h4");
      h4.textContent = c.name;
      const p = document.createElement("p");
      p.textContent = note;
      block.appendChild(h4);
      block.appendChild(p);
      if (c.cursorContrast) {
        const aside = document.createElement("p");
        aside.className = "rival-cursor-contrast";
        const em = document.createElement("em");
        em.textContent = "Cursor angle: ";
        aside.appendChild(em);
        aside.appendChild(document.createTextNode(c.cursorContrast));
        block.appendChild(aside);
      }
      frag.appendChild(block);
    });
    if (!any) {
      const p = document.createElement("p");
      p.className = "panel-intro";
      p.textContent =
        "No competitor notes are mapped to this SDLC step yet. In data.js, add text under each competitor’s byPhase." +
        ' Use keys: planning, requirements, design, implementation, testing, deployment, maintenance.';
      frag.appendChild(p);
    }
    return frag;
  }

  function showPhase(phase) {
    selectedId = phase.id;
    detailPanel.hidden = false;
    detailTitle.textContent = phase.title;
    detailSummary.textContent = phase.summary;

    detailTechChips.replaceChildren();
    (phase.techIds || []).forEach(function (id) {
      const t = techById[id];
      if (!t) return;
      const chip = document.createElement("span");
      chip.className = "tech-chip";
      chip.textContent = t.vendor;
      detailTechChips.appendChild(chip);
    });

    const story = phase.story || phase.what || [];
    panels.story.replaceChildren(renderListItems(story));
    panels.tech.replaceChildren(renderTechPanel(phase.techIds));
    panels.connect.replaceChildren(renderListItems(phase.connect));
    panels.compare.replaceChildren(renderListItems(phase.compare));
    panels.rivals.replaceChildren(renderRivalsForPhase(phase.id));
    panels.challenges.replaceChildren(renderListItems(phase.challenges));
    panels.cursor.replaceChildren(renderCursorPanel(phase));

    setTabPanelVisible("tab-story");

    flowChart.querySelectorAll(".flow-node").forEach(function (btn) {
      btn.classList.toggle("is-selected", btn.dataset.phaseId === phase.id);
    });

    detailPanel.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  function buildFlowChart() {
    flowChart.replaceChildren();
    data.phases.forEach(function (phase, index) {
      const li = document.createElement("li");
      li.className = "flow-item";
      li.setAttribute("role", "listitem");

      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "flow-node";
      btn.dataset.phaseId = phase.id;
      btn.setAttribute("aria-pressed", "false");
      btn.setAttribute("aria-label", "Phase " + (index + 1) + ": " + phase.title);

      const idx = document.createElement("span");
      idx.className = "node-index";
      idx.textContent = String(index + 1).padStart(2, "0");

      const label = document.createElement("span");
      label.className = "node-label";
      label.textContent = phase.short;

      btn.appendChild(idx);
      btn.appendChild(label);

      btn.addEventListener("click", function () {
        showPhase(phase);
        btn.setAttribute("aria-pressed", "true");
        flowChart.querySelectorAll(".flow-node").forEach(function (b) {
          if (b !== btn) b.setAttribute("aria-pressed", "false");
        });
      });

      li.appendChild(btn);

      if (index < data.phases.length - 1) {
        const arrow = document.createElement("span");
        arrow.className = "flow-connector";
        arrow.setAttribute("aria-hidden", "true");
        arrow.textContent = "→";
        li.appendChild(arrow);
      }

      flowChart.appendChild(li);
    });
  }

  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      setTabPanelVisible(tab.id);
    });
  });

  /* Welcome */
  function initWelcome() {
    const w = data.welcome || {};
    const headline = document.getElementById("welcome-heading");
    const sub = document.getElementById("welcome-sub");
    const bulletsEl = document.getElementById("welcome-bullets");
    const customize = document.getElementById("welcome-customize");

    if (headline) headline.textContent = w.headline || "";
    if (sub) sub.textContent = w.sub || "";
    if (bulletsEl) {
      bulletsEl.replaceChildren();
      (w.bullets || []).forEach(function (text) {
        const li = document.createElement("li");
        li.textContent = text;
        bulletsEl.appendChild(li);
      });
    }
    if (customize) customize.textContent = w.customizeNote || "";

    const btnBasics = document.getElementById("btn-welcome-basics");
    const btnSdlc = document.getElementById("btn-welcome-sdlc");
    if (btnBasics) btnBasics.addEventListener("click", function () { showView("basics"); });
    if (btnSdlc) btnSdlc.addEventListener("click", function () { showView("sdlc"); });
  }

  /* Basics grid */
  function initBasics() {
    const grid = document.getElementById("basics-grid");
    if (!grid || !data.basics) return;
    grid.replaceChildren();
    data.basics.forEach(function (b) {
      const card = document.createElement("article");
      card.className = "basic-card";
      const h3 = document.createElement("h3");
      h3.className = "basic-card-title";
      const term = document.createElement("span");
      term.className = "basic-term";
      term.textContent = b.term;
      h3.appendChild(term);
      h3.appendChild(document.createTextNode(" — " + (b.title || "")));

      const analogy = document.createElement("p");
      analogy.className = "basic-analogy";
      analogy.textContent = b.analogy || "";

      const lines = document.createElement("div");
      lines.className = "basic-lines";
      (b.lines || []).forEach(function (line) {
        const p = document.createElement("p");
        p.textContent = line;
        lines.appendChild(p);
      });

      card.appendChild(h3);
      card.appendChild(analogy);
      card.appendChild(lines);
      grid.appendChild(card);
    });
  }

  /* Competitors catalog + GTM guide blocks */
  function initCompetitorsView() {
    const intro = data.competitorsIntro || {};
    const gtm = data.gtmGuide || {};
    const h = document.getElementById("competitors-heading");
    const lead = document.getElementById("competitors-lead");
    const audienceEl = document.getElementById("gtm-audience");
    const sourceEl = document.getElementById("competitors-source");
    const cardsLead = document.getElementById("competitors-cards-lead");
    const catalog = document.getElementById("competitors-catalog");

    if (h) h.textContent = intro.title || "Competitors";
    if (lead) lead.textContent = intro.lead || "";
    if (audienceEl) {
      audienceEl.textContent = gtm.audienceNote || "";
      audienceEl.hidden = !gtm.audienceNote;
    }
    if (sourceEl) {
      sourceEl.textContent = intro.sourceLine || "";
      sourceEl.hidden = !intro.sourceLine;
    }
    if (cardsLead) {
      cardsLead.textContent = intro.cardsLead || "";
      cardsLead.hidden = !intro.cardsLead;
    }

    const gaWrap = document.getElementById("gtm-good-avoid-wrap");
    const gaBody = document.getElementById("gtm-good-avoid");
    if (gaBody && gtm.goodVsAvoid && gtm.goodVsAvoid.length) {
      gaBody.replaceChildren();
      gtm.goodVsAvoid.forEach(function (row) {
        const div = document.createElement("div");
        div.className = "good-avoid-row";
        const g = document.createElement("div");
        g.className = "good-cell";
        const gl = document.createElement("span");
        gl.className = "ga-label";
        gl.textContent = "Do";
        const gt = document.createElement("p");
        gt.textContent = row.good;
        g.appendChild(gl);
        g.appendChild(gt);
        const a = document.createElement("div");
        a.className = "avoid-cell";
        const al = document.createElement("span");
        al.className = "ga-label";
        al.textContent = "Avoid";
        const at = document.createElement("p");
        at.textContent = row.avoid;
        a.appendChild(al);
        a.appendChild(at);
        div.appendChild(g);
        div.appendChild(a);
        gaBody.appendChild(div);
      });
      if (gaWrap) gaWrap.hidden = false;
    }

    const pillarsWrap = document.getElementById("gtm-pillars-wrap");
    const pillarsEl = document.getElementById("gtm-pillars");
    const monorepoEl = document.getElementById("gtm-monorepo");
    if (pillarsEl && gtm.pillars && gtm.pillars.length) {
      pillarsEl.replaceChildren();
      gtm.pillars.forEach(function (pillar) {
        const card = document.createElement("article");
        card.className = "pillar-card";
        const ht = document.createElement("h4");
        ht.className = "pillar-title";
        ht.textContent = pillar.title;
        const sum = document.createElement("p");
        sum.className = "pillar-summary";
        sum.textContent = pillar.summary || "";
        const disc = document.createElement("p");
        disc.className = "pillar-discovery";
        const dlab = document.createElement("strong");
        dlab.textContent = "Discovery: ";
        disc.appendChild(dlab);
        disc.appendChild(document.createTextNode(pillar.discovery || ""));
        const ul = renderListItems(pillar.bullets || []);
        ul.className = "pillar-bullets";
        card.appendChild(ht);
        card.appendChild(sum);
        if (pillar.discovery) card.appendChild(disc);
        card.appendChild(ul);
        pillarsEl.appendChild(card);
      });
      if (pillarsWrap) pillarsWrap.hidden = false;
    }
    if (monorepoEl) {
      if (gtm.monorepoCaveat) {
        monorepoEl.textContent = gtm.monorepoCaveat;
        monorepoEl.hidden = false;
      } else {
        monorepoEl.hidden = true;
      }
    }

    const ptWrap = document.getElementById("gtm-proof-traps-wrap");
    const proofEl = document.getElementById("gtm-proof-points");
    const trapsEl = document.getElementById("gtm-sales-traps");
    if (proofEl && gtm.proofPoints && gtm.proofPoints.length) {
      proofEl.replaceChildren();
      gtm.proofPoints.forEach(function (t) {
        const li = document.createElement("li");
        li.textContent = t;
        proofEl.appendChild(li);
      });
    }
    if (trapsEl && gtm.salesTraps && gtm.salesTraps.length) {
      trapsEl.replaceChildren();
      gtm.salesTraps.forEach(function (t) {
        const li = document.createElement("li");
        li.textContent = t;
        trapsEl.appendChild(li);
      });
    }
    if (ptWrap && ((gtm.proofPoints && gtm.proofPoints.length) || (gtm.salesTraps && gtm.salesTraps.length))) {
      ptWrap.hidden = false;
    }

    const custWrap = document.getElementById("gtm-customers-wrap");
    const custEl = document.getElementById("gtm-customer-stories");
    if (custEl && gtm.customerStories && gtm.customerStories.length) {
      custEl.replaceChildren();
      gtm.customerStories.forEach(function (story) {
        const art = document.createElement("article");
        art.className = "customer-story-card";
        const h4 = document.createElement("h4");
        h4.textContent = story.name;
        const ctx = document.createElement("p");
        ctx.className = "customer-context";
        ctx.textContent = story.context || "";
        art.appendChild(h4);
        if (story.context) art.appendChild(ctx);
        art.appendChild(renderListItems(story.bullets || []));
        custEl.appendChild(art);
      });
      if (custWrap) custWrap.hidden = false;
    }

    if (!catalog) return;
    catalog.replaceChildren();

    (data.competitors || []).forEach(function (c) {
      const card = document.createElement("article");
      card.className = "competitor-card";

      const head = document.createElement("header");
      head.className = "competitor-card-head";
      const title = document.createElement("h3");
      title.className = "competitor-name";
      title.textContent = c.name;
      const meta = document.createElement("p");
      meta.className = "competitor-meta";
      meta.textContent = [c.maker, c.category].filter(Boolean).join(" · ");
      head.appendChild(title);
      head.appendChild(meta);

      const one = document.createElement("p");
      one.className = "competitor-one";
      one.textContent = c.oneLiner || "";

      const grid = document.createElement("div");
      grid.className = "competitor-sw";

      const strengthsWrap = document.createElement("div");
      strengthsWrap.className = "sw-column";
      const sh = document.createElement("h4");
      sh.textContent = "Strengths";
      strengthsWrap.appendChild(sh);
      strengthsWrap.appendChild(renderListItems(c.strengths));

      const weakWrap = document.createElement("div");
      weakWrap.className = "sw-column";
      const wh = document.createElement("h4");
      wh.textContent = "Weaknesses / limits";
      weakWrap.appendChild(wh);
      weakWrap.appendChild(renderListItems(c.weaknesses));

      grid.appendChild(strengthsWrap);
      grid.appendChild(weakWrap);

      card.appendChild(head);
      card.appendChild(one);
      card.appendChild(grid);

      if (c.cursorContrast) {
        const contrast = document.createElement("p");
        contrast.className = "competitor-contrast";
        const em = document.createElement("strong");
        em.textContent = "Vs Cursor: ";
        contrast.appendChild(em);
        contrast.appendChild(document.createTextNode(c.cursorContrast));
        card.appendChild(contrast);
      }

      if (c.internalRef) {
        const ref = document.createElement("p");
        ref.className = "competitor-ref";
        ref.textContent = "Source note: " + c.internalRef;
        card.appendChild(ref);
      }

      const byPhase = c.byPhase || {};
      const phaseIds = Object.keys(byPhase).filter(function (pid) {
        return phaseById[pid];
      });
      if (phaseIds.length > 0) {
        const phaseNav = document.createElement("div");
        phaseNav.className = "competitor-phase-jumps";
        phaseNav.setAttribute("aria-label", "Jump to SDLC step for " + c.name);
        const jumpLabel = document.createElement("span");
        jumpLabel.className = "jump-label";
        jumpLabel.textContent = "See in SDLC:";
        phaseNav.appendChild(jumpLabel);
        phaseIds.forEach(function (pid) {
          const ph = phaseById[pid];
          const btn = document.createElement("button");
          btn.type = "button";
          btn.className = "btn btn-phase-jump";
          btn.setAttribute("data-jump-phase", pid);
          btn.textContent = ph.short || ph.title;
          phaseNav.appendChild(btn);
        });
        card.appendChild(phaseNav);
      }

      catalog.appendChild(card);
    });

    catalog.addEventListener("click", function (e) {
      const btn = e.target.closest("[data-jump-phase]");
      if (!btn || !catalog.contains(btn)) return;
      jumpToSdlcPhase(btn.getAttribute("data-jump-phase"), true);
    });
  }

  /* Tech table */
  function initTechTable() {
    const tbody = document.getElementById("tech-table-body");
    if (!tbody || !data.techCatalog) return;
    tbody.replaceChildren();
    data.techCatalog.forEach(function (t) {
      const tr = document.createElement("tr");
      const tdV = document.createElement("td");
      tdV.className = "tech-vendor";
      tdV.textContent = t.vendor;
      const tdC = document.createElement("td");
      tdC.textContent = t.category;
      const tdS = document.createElement("td");
      tdS.textContent = t.simple;
      tr.appendChild(tdV);
      tr.appendChild(tdC);
      tr.appendChild(tdS);
      tbody.appendChild(tr);
    });
  }

  /* Primary nav */
  navPills.forEach(function (pill) {
    pill.addEventListener("click", function () {
      showView(pill.getAttribute("data-view"));
    });
  });

  document.querySelectorAll("[data-view-nav]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      showView(btn.getAttribute("data-view-nav"));
    });
  });

  /* Glossary */
  const glossaryBody = document.getElementById("glossary-body");
  const drawerGlossary = document.getElementById("drawer-glossary");
  const glossaryOverlay = document.getElementById("glossary-overlay");
  const btnGlossary = document.getElementById("btn-glossary");
  const closeGlossary = document.getElementById("close-glossary");

  (data.glossary || []).forEach(function (entry) {
    const dl = document.createElement("dl");
    dl.className = "glossary-entry";
    const dt = document.createElement("dt");
    dt.textContent = entry.term;
    const dd = document.createElement("dd");
    dd.textContent = entry.def;
    dl.appendChild(dt);
    dl.appendChild(dd);
    glossaryBody.appendChild(dl);
  });

  const drawerApproaches = document.getElementById("drawer-approaches");
  const btnApproaches = document.getElementById("btn-approaches");
  const closeApproaches = document.getElementById("close-approaches");
  const approachesOverlay = document.getElementById("approaches-overlay");
  const approachesBody = document.getElementById("approaches-body");

  function openGlossary() {
    if (!drawerApproaches.hidden) closeApproachesDrawer();
    drawerGlossary.hidden = false;
    glossaryOverlay.hidden = false;
    drawerGlossary.setAttribute("aria-hidden", "false");
    btnGlossary.setAttribute("aria-expanded", "true");
    closeGlossary.focus();
  }

  function closeGlossaryDrawer() {
    drawerGlossary.hidden = true;
    glossaryOverlay.hidden = true;
    drawerGlossary.setAttribute("aria-hidden", "true");
    btnGlossary.setAttribute("aria-expanded", "false");
    btnGlossary.focus();
  }

  btnGlossary.addEventListener("click", openGlossary);
  closeGlossary.addEventListener("click", closeGlossaryDrawer);
  glossaryOverlay.addEventListener("click", closeGlossaryDrawer);

  (data.approaches || []).forEach(function (a) {
    const block = document.createElement("div");
    block.className = "approach-block";
    const h3 = document.createElement("h3");
    h3.textContent = a.name;
    const p = document.createElement("p");
    p.textContent = a.desc;
    block.appendChild(h3);
    block.appendChild(p);
    approachesBody.appendChild(block);
  });

  function openApproaches() {
    if (!drawerGlossary.hidden) closeGlossaryDrawer();
    drawerApproaches.hidden = false;
    approachesOverlay.hidden = false;
    drawerApproaches.setAttribute("aria-hidden", "false");
    btnApproaches.setAttribute("aria-expanded", "true");
    closeApproaches.focus();
  }

  function closeApproachesDrawer() {
    drawerApproaches.hidden = true;
    approachesOverlay.hidden = true;
    drawerApproaches.setAttribute("aria-hidden", "true");
    btnApproaches.setAttribute("aria-expanded", "false");
    btnApproaches.focus();
  }

  btnApproaches.addEventListener("click", openApproaches);
  closeApproaches.addEventListener("click", closeApproachesDrawer);
  approachesOverlay.addEventListener("click", closeApproachesDrawer);

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      if (!drawerGlossary.hidden) closeGlossaryDrawer();
      if (!drawerApproaches.hidden) closeApproachesDrawer();
    }
  });

  /* Init */
  setTitle();
  initWelcome();
  initBasics();
  initTechTable();
  initCompetitorsView();
  showView("welcome");

  const mainEl = document.getElementById("main");
  if (mainEl) mainEl.setAttribute("tabindex", "-1");
})();

