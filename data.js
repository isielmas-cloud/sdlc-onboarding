/**
 * Sales-friendly SDLC training — customize vendor names and positioning for your org in this file.
 */
window.SDLC_DATA = {
  productName: "Engineering 101",

  welcome: {
    headline: "How software gets built — in plain language",
    sub:
      "This short guide is for people who sell or support products that involve software. No coding background required.",
    bullets: [
      "Start with everyday explanations of words engineers use (IDE, CLI, API, and more).",
      "Meet the key roles on a software team — who does what in plain language.",
      "See a sample “stack”: who makes the tools and what each one is for.",
      "Review Cursor’s main AI-coding competitors — strengths, limits, and where they matter in the SDLC.",
      "Walk the SDLC flow and see which tools show up in each step, how they plug together, and how to talk about alternatives.",
    ],
    customizeNote:
      "Your company may use different vendors (e.g. Jira instead of Linear). Ask your solutions engineer to swap names in data.js so this matches reality.",
  },

  basics: [
    {
      term: "IDE",
      title: "Integrated Development Environment",
      analogy: "Think: a word processor, but for code.",
      lines: [
        "Engineers write and edit code in an app that highlights mistakes, jumps to files, and runs tests.",
        "Cursor is an example of an IDE with AI built in — it helps draft or explain code, but humans still review and ship.",
      ],
    },
    {
      term: "CLI",
      title: "Command-line interface (“the terminal”)",
      analogy: "Think: texting your computer with precise instructions instead of clicking buttons.",
      lines: [
        "A text window where developers run commands to install tools, start servers, or automate tasks.",
        "It looks intimidating; in practice it’s repeatable and scriptable — that’s why engineers like it.",
      ],
    },
    {
      term: "Git & repo",
      title: "Version control & repository",
      analogy: "Think: Google Docs “version history,” but for every line of a codebase.",
      lines: [
        "Git tracks changes. A repository (“repo”) is the folder of code stored somewhere central (often GitHub).",
        "Branches let people work in parallel without stepping on each other’s changes.",
      ],
    },
    {
      term: "PR",
      title: "Pull request (code review)",
      analogy: "Think: a proposal to publish a chapter — others read it before it becomes “official.”",
      lines: [
        "A developer asks to merge their branch. Teammates comment, request fixes, and approve.",
        "This is a quality and security gate — not bureaucracy for its own sake.",
      ],
    },
    {
      term: "API",
      title: "Application Programming Interface",
      analogy: "Think: a waiter between the dining room and the kitchen — a structured way to order and receive data or actions.",
      lines: [
        "Systems talk to each other through APIs (often over the web).",
        "Good API design matters for integrations your customers care about.",
      ],
    },
    {
      term: "Cloud",
      title: "Cloud provider",
      analogy: "Think: renting power, storage, and networking instead of owning a server closet.",
      lines: [
        "AWS, Google Cloud, and Azure host apps and data in their data centers.",
        "Teams pay for what they use and scale up when traffic grows.",
      ],
    },
    {
      term: "CI / CD",
      title: "Continuous Integration & Delivery",
      analogy: "Think: an assembly line that automatically checks every change before it ships.",
      lines: [
        "CI: each change runs automated builds and tests so bugs surface early.",
        "CD: packaging and deploying that change — sometimes automatic, sometimes with human approval.",
      ],
    },
    {
      term: "Frontend vs backend",
      title: "What users see vs what servers do",
      analogy: "Think: the restaurant dining room vs the kitchen.",
      lines: [
        "Frontend: buttons, pages, mobile screens — what customers touch.",
        "Backend: databases, business rules, permissions — where the real work happens.",
      ],
    },
    {
      term: "Database",
      title: "Where persistent data lives",
      analogy: "Think: the filing system under the app — not the buttons, but the records you save and query.",
      lines: [
        "Relational databases (e.g. PostgreSQL) use tables and SQL; document databases (e.g. MongoDB) store flexible JSON-like records.",
        "In-memory stores like Redis often sit in front for speed (cache, sessions, queues) while the source of truth stays in a primary database.",
      ],
    },
    {
      term: "Observability",
      title: "Logs, metrics, traces",
      analogy: "Think: flight instruments and black boxes for software.",
      lines: [
        "After launch, teams watch errors, speed, and usage to spot issues before customers do.",
        "Tools like Datadog (or cloud-native consoles) collect this data.",
      ],
    },
  ],

  techCatalog: [
    {
      id: "linear",
      vendor: "Linear",
      category: "Work tracking",
      simple: "Tracks epics, tasks, and bugs so the team agrees on what “done” means.",
    },
    {
      id: "github",
      vendor: "GitHub",
      category: "Code hosting & collaboration",
      simple: "Stores code, hosts reviews (PRs), and connects to automation (Actions).",
    },
    {
      id: "cursor",
      vendor: "Cursor",
      category: "AI-native IDE",
      simple: "Where developers write code with AI assistance — faster drafts, explanations, refactors; still human-reviewed.",
    },
    {
      id: "slack",
      vendor: "Slack",
      category: "Team chat",
      simple: "Day-to-day questions, incident channels, and alerts routed to the right people.",
    },
    {
      id: "notion",
      vendor: "Notion",
      category: "Docs & wiki",
      simple: "Specs, playbooks, and lightweight knowledge bases for cross-team alignment.",
    },
    {
      id: "miro",
      vendor: "Miro",
      category: "Whiteboard",
      simple: "Discovery workshops, flowcharts, and sticky-note brainstorming before things get formal.",
    },
    {
      id: "figma",
      vendor: "Figma",
      category: "Product & UX design",
      simple: "Screen designs and prototypes so engineers know what to build and how it should feel.",
    },
    {
      id: "docker",
      vendor: "Docker",
      category: "Containers",
      simple: "Packages an app so it runs the same on a laptop, in test, and in production.",
    },
    {
      id: "gha",
      vendor: "GitHub Actions",
      category: "Automation / CI",
      simple: "Runs tests and build steps automatically when code changes land in GitHub.",
    },
    {
      id: "terraform",
      vendor: "Terraform",
      category: "Infrastructure as code",
      simple: "Describes servers and cloud resources in files so environments are repeatable and auditable.",
    },
    {
      id: "aws",
      vendor: "AWS",
      category: "Cloud platform",
      simple: "Hosts apps and data; provides building blocks like databases, queues, and permissions.",
    },
    {
      id: "datadog",
      vendor: "Datadog",
      category: "Monitoring & observability",
      simple: "Dashboards, alerts, and tracing to see health and debug production issues.",
    },
    {
      id: "pagerduty",
      vendor: "PagerDuty",
      category: "On-call & incidents",
      simple: "Pages the right engineer when something breaks and tracks the incident timeline.",
    },
    {
      id: "vercel",
      vendor: "Vercel",
      category: "Hosting & edge deployment",
      simple: "Deploys web apps and serverless functions with preview URLs per branch — strong fit for frontend and JAMstack teams.",
    },
    {
      id: "postgresql",
      vendor: "PostgreSQL",
      category: "Relational database",
      simple: "Industry-standard SQL database for structured data; often managed in the cloud (RDS, Cloud SQL, Neon, etc.).",
    },
    {
      id: "mongodb",
      vendor: "MongoDB",
      category: "Document database",
      simple: "Stores flexible, JSON-like documents — common when schemas evolve quickly or content is semi-structured.",
    },
    {
      id: "redis",
      vendor: "Redis",
      category: "Cache & real-time data",
      simple: "In-memory store for sessions, caching, rate limits, and job queues — fast layer in front of slower systems.",
    },
    {
      id: "supabase",
      vendor: "Supabase",
      category: "Backend-as-a-service",
      simple: "Managed Postgres plus auth, APIs, and realtime — speeds up product teams that want a full stack without building everything from scratch.",
    },
    {
      id: "jira",
      vendor: "Jira",
      category: "Work tracking (enterprise-style)",
      simple: "Tracks epics, stories, and bugs — very common in larger orgs; similar job to Linear, often heavier process and reporting.",
    },
    {
      id: "azure-devops",
      vendor: "Azure DevOps",
      category: "Work tracking & delivery (Microsoft)",
      simple: "Boards, repos, pipelines, and tests in one Microsoft-centric suite — typical when the company is already on Azure.",
    },
    {
      id: "kubernetes",
      vendor: "Kubernetes (EKS / GKE / AKS)",
      category: "Container orchestration",
      simple: "Runs many copies of your app across machines and restarts them if they fail — the standard for large-scale, cloud-native teams (Amazon/Google/Microsoft managed flavors).",
    },
    {
      id: "snowflake",
      vendor: "Snowflake",
      category: "Cloud data warehouse",
      simple: "A central place to store and analyze huge amounts of business data — think spreadsheets at warehouse scale, for analytics and reporting.",
    },
    {
      id: "bigquery",
      vendor: "Google BigQuery",
      category: "Cloud data warehouse",
      simple: "Google’s analytics database for SQL over massive datasets — common when teams live in Google Cloud or need fast reporting.",
    },
    {
      id: "snyk",
      vendor: "Snyk",
      category: "Application security (dependencies & code)",
      simple: "Scans open-source libraries and sometimes code for known vulnerabilities — like a spell-check for security issues before they reach production.",
    },
    {
      id: "wiz",
      vendor: "Wiz",
      category: "Cloud security posture",
      simple: "Maps what’s running in the cloud, misconfigurations, and risky exposure — helps security teams see the big picture across accounts and services.",
    },
  ],

  /**
   * Key engineering personas — shown on the “Team roles” page (easy words for sales).
   */
  personasPage: {
    title: "Who builds software? (key personas)",
    lead:
      "Personas are shorthand for the kinds of people on a dev team — not names, but roles. Titles differ by company, but the jobs below show up everywhere. Use this to map who cares about what on a deal.",
  },

  devPersonas: [
    {
      title: "Product manager (PM)",
      role: "Owns the “what” and “why”",
      simple:
        "Turns customer problems into a roadmap and clear requirements. Prioritizes the backlog so engineering doesn’t build the wrong thing first.",
      whatMatters:
        "Clear priorities, realistic dates, and proof that engineering understood the customer — without endless back-and-forth.",
      cursorHelps:
        "Draft or sharpen user stories and acceptance criteria from rough notes; use Chat with @-context on tickets or docs so proposals match how the product actually works — always reviewed before commitments.",
    },
    {
      title: "Engineering manager / Tech lead",
      role: "Owns people and delivery",
      simple:
        "Hires and supports developers, helps with estimates and timelines, and removes blockers. On smaller teams, may still write code or own architecture direction.",
      whatMatters:
        "Predictable delivery, code quality, and reducing onboarding time when the team or codebase grows.",
      cursorHelps:
        "Faster ramp on unfamiliar areas (Chat explains modules and history); Composer and Agent for larger refactors with review; Rules align the team on standards so AI suggestions stay consistent.",
    },
    {
      title: "Software engineer",
      role: "Builds the product",
      simple:
        "Writes and maintains application code, reviews teammates’ changes, and fixes bugs. The role sales often pictures when they say “engineering.”",
      whatMatters:
        "Shipping correct features quickly, understanding legacy code, and keeping review + CI green.",
      cursorHelps:
        "Tab for speed on boilerplate; Chat and Composer for navigation and multi-file changes; Background Agent for longer tasks; Bugbot on PRs where enabled — humans still own merge decisions.",
    },
    {
      title: "UX / Product designer",
      role: "Owns how it feels and flows",
      simple:
        "Designs screens, flows, and accessibility so the product is understandable and pleasant to use — works closely with PM and engineering before code ships.",
      whatMatters:
        "Designs that survive implementation — spacing, states, and accessibility actually match what ships.",
      cursorHelps:
        "Bridge design and code: Chat with MCP (e.g. Figma) or specs in context; faster handoff experiments and copy tweaks in the IDE without waiting for a dev slot for every small change.",
    },
    {
      title: "QA / Test engineer",
      role: "Proves quality before release",
      simple:
        "Designs tests (manual or automated), finds edge cases, and signs off that features meet acceptance criteria — reduces “it worked on my laptop” surprises.",
      whatMatters:
        "Finding failures before customers do — especially edge cases, permissions, and regressions.",
      cursorHelps:
        "Brainstorm test cases from requirements; scaffold or extend automated tests in CI; Bugbot adds another automated pass on PRs — QA still decides what “done” means.",
    },
    {
      title: "DevOps / SRE / Platform",
      role: "Owns shipping and reliability",
      simple:
        "Builds pipelines, monitoring, and infrastructure so deploys are safe and fast. On-call when production breaks — cares deeply about uptime and rollback.",
      whatMatters:
        "Safe deploys, fast recovery, and infra that’s documented and repeatable — not heroics at 2 a.m.",
      cursorHelps:
        "Read Terraform, Helm, GitHub Actions, and logs in context; small, reviewed edits across config files; Rules reduce risky suggestions (e.g. secrets, bypassing approvals).",
    },
    {
      title: "Data engineer / Analytics",
      role: "Owns data pipelines and warehouses",
      simple:
        "Moves data from apps into warehouses (e.g. Snowflake, BigQuery), keeps reports accurate, and helps the business trust dashboards — critical for data-heavy buyers.",
      whatMatters:
        "Trustworthy pipelines and dashboards — late or wrong data erodes confidence in the whole product story.",
      cursorHelps:
        "Draft and explain SQL, transforms, and pipeline code; explore schemas and job failures with Chat tied to repos and docs — still validate against production contracts.",
    },
    {
      title: "Security (AppSec / cloud security)",
      role: "Owns risk and policy",
      simple:
        "Sets rules for access, scanning (e.g. Snyk), and cloud posture (e.g. Wiz). Reviews exceptions and blocks releases that violate policy — a gate, not the enemy.",
      whatMatters:
        "Reducing real risk without blocking the business — clear policies, auditability, and fewer “we didn’t know that was exposed” moments.",
      cursorHelps:
        "Project and team Rules encode guardrails (PII, regions, no pasted secrets); AI speeds review prep and triage — policy and exceptions stay human-owned.",
    },
  ],

  /**
   * Cursor platform capabilities — referenced by phase.cursorProductBenefits (productId → benefit copy).
   */
  cursorPlatformProducts: [
    {
      id: "ide",
      name: "Cursor IDE",
      summary: "The main AI-native editor: write, navigate, and review changes in one place.",
    },
    {
      id: "composer",
      name: "Composer",
      summary: "Multi-file edits and larger changes with full-repo context.",
    },
    {
      id: "chat",
      name: "Chat",
      summary: "Ask questions about the codebase, errors, docs, and tickets with @-context.",
    },
    {
      id: "tab",
      name: "Tab",
      summary: "Inline completions as you type — fast for boilerplate and familiar patterns.",
    },
    {
      id: "rules",
      name: "Rules & memories",
      summary: "Project- and team-level guidance so AI stays aligned with your stack and policies.",
    },
    {
      id: "agent",
      name: "Background Agent",
      summary: "Runs longer tasks asynchronously in the repository while you work on something else.",
    },
    {
      id: "bugbot",
      name: "Bugbot",
      summary: "Automated PR review and fix suggestions where enabled (catches issues before merge).",
    },
    {
      id: "mcp",
      name: "MCP (Model Context Protocol)",
      summary: "Bring external tools, docs, and data sources into Chat and the IDE context.",
    },
  ],

  phases: [
    {
      id: "planning",
      short: "Plan",
      title: "Planning & discovery",
      summary:
        "Agree on the problem, who it’s for, and what “success” looks like before anyone writes production code.",
      story: [
        "Sales and product shape the “why now” and customer pain.",
        "Engineering estimates feasibility and unknowns (sometimes with a short spike).",
        "Output is usually a thin plan: goals, scope boundaries, and rough timing — not a 200-page spec.",
      ],
      techIds: ["linear", "jira", "azure-devops", "miro", "notion", "slack"],
      connect: [
        "Ideas from calls or CRM notes often land as epics or tickets in Linear, Jira, or Azure Boards so nothing disappears.",
        "Miro captures messy early thinking; Notion or internal docs hold the cleaned-up summary.",
        "Slack is where quick clarifications happen before work is formalized in the tracker.",
        "Enterprise buyers often standardize on Jira or Azure DevOps instead of Linear — same idea (backlog + history), different vendor.",
      ],
      compare: [
        "Vs “no tool”: without a tracker, priorities live in chat and get lost — Linear (or Jira/Azure Boards) creates a shared source of truth.",
        "Vs spreadsheets-only: fine for tiny teams; at scale, dedicated work tracking wins for history and reporting.",
      ],
      challenges: [
        "Skipping this step leads to late surprises (“I didn’t know we promised that date”).",
        "Vague goals (“make it better”) are hard to estimate — numbers and examples help.",
      ],
      cursorProductBenefits: [
        {
          productId: "chat",
          benefit:
            "Turn a rough customer problem or ticket into draft user stories and acceptance ideas — always reviewed by PM/design.",
        },
        {
          productId: "rules",
          benefit: "Project rules keep planning language aligned with your stack, naming, and compliance guardrails.",
        },
        {
          productId: "tab",
          benefit: "Fast inline completions when capturing ticket titles, labels, or notes in the editor.",
        },
      ],
      cursor: [
        "Not customer-facing: AI speeds internal drafting the same way smart autocomplete speeds writing — humans still own commitments.",
      ],
    },
    {
      id: "requirements",
      short: "Reqs",
      title: "Requirements & analysis",
      summary:
        "Turn goals into clear behaviors: what must happen, what data is involved, and what edge cases matter.",
      story: [
        "Product writes acceptance criteria; engineering asks clarifying questions early.",
        "Legal, security, or compliance may add non-negotiables (data handling, regions, retention).",
        "Good requirements reduce rework — they’re cheaper to fix on paper than in production.",
      ],
      techIds: ["linear", "jira", "azure-devops", "notion", "figma", "slack"],
      connect: [
        "Tickets in Linear, Jira, or Azure DevOps link to designs (Figma) and to longer write-ups in Notion.",
        "Slack resolves ambiguities; decisions should be copied back to Notion or the ticket so the record stays accurate.",
      ],
      compare: [
        "Vs waterfall binders: modern teams prefer living docs and tickets that update as learning happens.",
        "Vs “verbal only”: verbal handoffs fail at scale; written criteria protect both sales promises and engineering delivery.",
      ],
      challenges: [
        "Hidden assumptions (“everyone knows admins can export”) cause gaps.",
        "Conflicting asks from two stakeholders — needs explicit prioritization.",
      ],
      cursorProductBenefits: [
        {
          productId: "chat",
          benefit: "Explore edge cases and “what if” questions against existing code, APIs, or internal docs.",
        },
        {
          productId: "composer",
          benefit: "Draft or expand acceptance criteria and checklists across related files in one pass.",
        },
        {
          productId: "rules",
          benefit: "Encode non-negotiables (regions, PII, retention) so requirement discussions stay policy-aware.",
        },
      ],
      cursor: [
        "Engineers still validate against real systems and policies — AI suggests, humans decide.",
      ],
    },
    {
      id: "design",
      short: "Design",
      title: "Design (UX & technical)",
      summary:
        "Decide how the product behaves and how systems fit together — screens, APIs, and operational concerns.",
      story: [
        "UX design: flows, accessibility, and visuals (often in Figma).",
        "Technical design: services, APIs, data stores, and failure handling — sometimes recorded in short ADR-style notes.",
        "Design balances speed, cost, risk, and maintainability.",
      ],
      techIds: ["figma", "notion", "linear", "slack", "postgresql", "mongodb", "snowflake", "bigquery"],
      connect: [
        "Figma links attach to Linear tickets so engineers open the right mockups.",
        "Architecture notes in Notion give sales and CS a place to read “how it works” without reading code.",
        "Data design matters here: relational (PostgreSQL), document (MongoDB), caches (Redis), or managed stacks (e.g. Supabase) — each has tradeoffs for scale, compliance, and team skills.",
        "For analytics-heavy products, teams also design how data lands in a warehouse (Snowflake, BigQuery) so reporting stays trustworthy.",
      ],
      compare: [
        "Vs building straight from a napkin: design reduces thrash and makes demos predictable.",
        "Vs over-designing: thin vertical slices beat months of diagrams that never ship.",
      ],
      challenges: [
        "Beautiful mocks that ignore empty states, errors, or permissions.",
        "Design that’s hard to operate (no logging, no rollback story).",
      ],
      cursorProductBenefits: [
        {
          productId: "chat",
          benefit: "Clarify tradeoffs and summarize architecture notes before formal design review.",
        },
        {
          productId: "composer",
          benefit: "Produce or update multiple design-adjacent files (e.g. API stubs, ADR drafts) together.",
        },
        {
          productId: "mcp",
          benefit: "Connect Figma, wikis, or internal tools via MCP so context sits next to the code.",
        },
        {
          productId: "rules",
          benefit: "Shared rules reflect UX and technical standards the team already agreed on.",
        },
      ],
      cursor: [
        "Supplements senior judgment — not a substitute for staff engineers on the riskiest architectural calls.",
      ],
    },
    {
      id: "implementation",
      short: "Build",
      title: "Implementation (coding)",
      summary:
        "Write the actual software in small, reviewable steps — the longest-visible phase to outsiders.",
      story: [
        "Developers branch from the main codebase, implement features, and open pull requests.",
        "Code is formatted, typed, and tested according to team standards.",
        "Feature flags often hide unfinished work from customers until it’s ready.",
      ],
      techIds: ["cursor", "github", "docker", "slack", "postgresql", "mongodb", "redis", "supabase"],
      connect: [
        "Cursor is the day-to-day editor; GitHub holds the code and PR conversation.",
        "Docker (or similar) keeps dev environments consistent so “works on my machine” is rare.",
        "Applications talk to databases (PostgreSQL, MongoDB, etc.) and caches (Redis); teams on Supabase or similar ship faster by reusing auth and APIs.",
        "Slack for quick pairing questions; durable decisions still land in GitHub or docs.",
      ],
      compare: [
        "Vs traditional IDEs without AI: Cursor accelerates boilerplate and navigation; quality still depends on review and tests.",
        "Vs GitLab/Bitbucket: same idea (host + review); GitHub’s ecosystem is why many startups standardize on it — swap the name if your org differs.",
      ],
      challenges: [
        "Legacy code with few tests makes changes scary and slow.",
        "Scope creep mid-sprint without renegotiating dates.",
      ],
      cursorProductBenefits: [
        {
          productId: "ide",
          benefit: "Primary place to write, navigate, and review diffs with AI alongside the editor.",
        },
        {
          productId: "composer",
          benefit: "Multi-file refactors and feature work with full-repo awareness.",
        },
        {
          productId: "tab",
          benefit: "Line-by-line speed on boilerplate and familiar patterns.",
        },
        {
          productId: "chat",
          benefit: "Explain unfamiliar modules and onboard quickly to legacy areas.",
        },
        {
          productId: "agent",
          benefit: "Longer async tasks (e.g. broad search-and-fix) while you focus on review or pairing.",
        },
      ],
      cursor: [
        "Quality still depends on PR review, tests, and team standards — same as any IDE, just faster iteration.",
      ],
    },
    {
      id: "testing",
      short: "Test",
      title: "Testing & quality",
      summary:
        "Prove the change does what we think — automated checks plus targeted manual exploration.",
      story: [
        "Automated tests run in CI; failures block merging or releasing depending on policy.",
        "Staging environments mimic production for final checks.",
        "Performance or security testing may run on a schedule or before big launches.",
      ],
      techIds: ["gha", "github", "linear", "docker", "postgresql", "snyk"],
      connect: [
        "GitHub Actions triggers on each PR; results show up next to the review.",
        "Failed builds link back to Linear for traceability (“what release broke this?”).",
        "Docker ensures test runs match production-like dependencies.",
        "Integration tests often hit a real database (e.g. Postgres in CI) so migrations and queries are validated before merge.",
        "Security scanners like Snyk run in CI to catch vulnerable dependencies early — AppSec expects green or approved exceptions.",
      ],
      compare: [
        "Vs manual-only QA: automation scales; humans focus on exploratory and high-judgment testing.",
        "Vs “we’ll test in prod”: sometimes used with strong flags and observability — still riskier for regulated or revenue-critical paths.",
      ],
      challenges: [
        "Flaky tests that randomly fail undermine trust in CI.",
        "Testing only the happy path misses permissions and offline behavior.",
      ],
      cursorProductBenefits: [
        {
          productId: "chat",
          benefit: "Suggest test cases and scenarios from requirements — engineers curate what lands in the suite.",
        },
        {
          productId: "composer",
          benefit: "Generate or extend test files and fixtures across a feature area.",
        },
        {
          productId: "tab",
          benefit: "Finish assertions and repetitive harness code faster.",
        },
        {
          productId: "bugbot",
          benefit: "Automated review on PRs can catch issues before merge (where Bugbot is enabled).",
        },
      ],
      cursor: [
        "Flaky tests stay a prioritization problem for the team — CI remains the source of truth for green/red.",
      ],
    },
    {
      id: "deployment",
      short: "Ship",
      title: "Deployment & release",
      summary:
        "Move tested changes to users safely — often gradual, reversible, and observable.",
      story: [
        "Pipelines promote artifacts to staging, then production.",
        "Feature flags and canaries limit blast radius.",
        "Migrations and backwards compatibility are planned so deploys don’t take the site down.",
      ],
      techIds: ["aws", "terraform", "gha", "github", "pagerduty", "vercel", "kubernetes", "snyk"],
      connect: [
        "Terraform defines AWS resources; GitHub stores those definitions and review history.",
        "GitHub Actions may deploy after checks pass; PagerDuty is ready if rollout triggers alerts.",
        "Many product teams also ship web frontends and serverless APIs via Vercel (or Netlify, Cloudflare Pages) while databases stay on AWS or a managed provider — same SDLC, different hosting layer.",
        "Large orgs often run services on Kubernetes (EKS, GKE, AKS) so many containers can scale and heal automatically — more moving parts, stronger platform teams.",
        "Database migrations are planned with app releases so schema and code stay compatible (a common deploy risk).",
        "Snyk (or similar) may block a deploy if a critical vulnerability appears in dependencies — security is part of the pipeline, not an afterthought.",
      ],
      compare: [
        "Vs hand-deployed servers: infrastructure-as-code is auditable and repeatable — stronger story for enterprise buyers.",
        "Vs single-cloud lock-in rhetoric: many teams still pick one primary cloud for simplicity; multi-cloud is a deliberate cost.",
      ],
      challenges: [
        "Database changes that don’t match app versions.",
        "Deploying late Friday without strong automation and on-call coverage.",
      ],
      cursorProductBenefits: [
        {
          productId: "chat",
          benefit: "Read and explain pipelines, Terraform, Helm, or Actions logs for engineers new to the stack.",
        },
        {
          productId: "composer",
          benefit: "Small, reviewed edits across config and infra files when changes are mechanical.",
        },
        {
          productId: "rules",
          benefit: "Guardrails so snippets never encourage pasting secrets or bypassing approval workflows.",
        },
      ],
      cursor: [
        "Never paste production secrets; production changes follow your playbook, approvals, and change windows.",
      ],
    },
    {
      id: "maintenance",
      short: "Run",
      title: "Maintenance & operations",
      summary:
        "Keep the product reliable, fix bugs, improve performance, and feed learnings back into planning.",
      story: [
        "Monitoring shows latency, errors, and business KPIs.",
        "Incidents get triaged, mitigated, and reviewed blamelessly.",
        "Customer feedback and support tickets reopen the loop — new items land in Linear.",
      ],
      techIds: ["datadog", "pagerduty", "slack", "linear", "postgresql", "redis", "snowflake", "bigquery", "wiz"],
      connect: [
        "Datadog alerts route to Slack and PagerDuty based on severity.",
        "Incidents spawn follow-up tickets in Linear; postmortems live in Notion (if your team uses it here).",
        "Production issues often involve databases (slow Postgres queries, Redis memory pressure, connection limits) — observability ties application traces to infrastructure and data layers.",
        "Analytics teams watch warehouses (Snowflake, BigQuery) for pipeline delays or bad data — “the dashboard is wrong” is an ops problem too.",
        "Cloud security tools like Wiz help catch exposed resources or misconfigurations after architecture changes — especially in multi-account enterprises.",
      ],
      compare: [
        "Vs logging into servers one by one: observability platforms shorten mean time to detect and repair.",
        "Vs outsourcing all ops: someone still owns on-call — buyers care who that is and how mature runbooks are.",
      ],
      challenges: [
        "Alert fatigue: too many pages → people ignore real fires.",
        "Knowledge trapped in one senior engineer’s head.",
      ],
      cursorProductBenefits: [
        {
          productId: "chat",
          benefit: "Summarize incidents, logs, or stack traces to draft timelines and postmortem sections.",
        },
        {
          productId: "agent",
          benefit: "Broader investigation or cleanup tasks that can run in the background.",
        },
        {
          productId: "bugbot",
          benefit: "Ongoing PR feedback as hotfix branches move quickly.",
        },
        {
          productId: "mcp",
          benefit: "Pull observability, ticketing, or docs into context via MCP integrations.",
        },
      ],
      cursor: [
        "Owners edit AI-drafted comms for accuracy, tone, and customer sensitivity before anything goes external.",
      ],
    },
  ],

  /**
   * GTM Competitive Positioning Guide — integrated content (training app; confirm numbers with GTM before external use).
   */
  competitorsIntro: {
    title: "Competitive positioning & AI rivals",
    lead:
      "Set the frame proactively: lead with discovery, positive framing, and what customers choose Cursor for — not attacks on other vendors. Core talking points below mirror the internal GTM Competitive Positioning Guide (exec + technical leadership).",
    cardsLead:
      "Primary competitors called out in the guide: Claude Code, GitHub Copilot / OpenAI Codex, and Windsurf. Each card maps strengths, limits, and SDLC-relevant angles.",
    sourceLine: "Source material: GTM Competitive Positioning Guide (internal).",
  },

  gtmGuide: {
    audienceNote:
      "Tailor depth: high-level for execs (model neutrality, platform, harness); product depth for engineers (features, harness, SDLC coverage). Offer a side-by-side demo on their codebase when appropriate.",
    goodVsAvoid: [
      {
        good: "Ask discovery first: e.g. “What’s driving your interest in [competitor]?” or “How are you thinking about AI adoption across the org?”",
        avoid: "Bristling or going straight to combat when a competitor is mentioned.",
      },
      {
        good: "Positive framing: “It’s great your org is adopting AI. Here’s what makes customers choose Cursor…”",
        avoid: "Attacking competitors or making buyers defensive about choices they already made.",
      },
      {
        good: "Match arguments to the buyer (exec vs engineer).",
        avoid: "Using technical depth with execs or only high-level platitudes with engineers who want specifics.",
      },
      {
        good: "Offer a live demo side-by-side on their repo when it helps.",
        avoid: "Overindexing on claims you can’t back with data or a live run.",
      },
    ],
    pillars: [
      {
        title: "Model neutrality",
        summary: "Avoid model lock-in — access the best capability, speed, and pricing as the frontier moves.",
        discovery:
          "What happens when a better model ships from another provider? How important is always having access to the best coding models?",
        bullets: [
          "Cursor supports models from multiple providers; teams can switch without changing their core workflow.",
          "The “best” coding model family shifted many times in a single year on public benchmarks — neutrality preserves optionality.",
          "Same Anthropic models available in Cursor as elsewhere; neutrality is additive, not either/or.",
        ],
      },
      {
        title: "Large codebase performance",
        summary: "Agent performance tuned for large, complex repos — semantic understanding, not grep-only context.",
        discovery: "How large is your codebase? We can run a demo on it.",
        bullets: [
          "Semantic indexing across the codebase so the agent retrieves by meaning, not only exact text matches.",
          "Combines semantic search with fast grep for both conceptual and exact-pattern needs (per guide: contrast vs grep-only approaches).",
          "Purpose-built harness per supported model plus context tooling (e.g. dynamic context discovery for efficiency with tools like MCP).",
        ],
      },
      {
        title: "Time to value",
        summary: "Productive out of the box for the org — less custom glue and maintenance sprawl as models evolve.",
        discovery:
          "What are the challenges rolling AI out org-wide? Is everyone an AI expert today?",
        bullets: [
          "Guide positioning: some CLI-first paths push teams to build and maintain custom skills/scripts for visual workflows — harder to standardize at enterprise scale.",
          "Cursor aims for consistent defaults and best practices across the team while remaining customizable for power users.",
        ],
      },
      {
        title: "Platform across the SDLC",
        summary: "Not only terminal output — integrated workspace for plan, code, preview, and iteration.",
        discovery:
          "Do you need one engineer’s bespoke setup, or something that works for the whole team day one? Where are the biggest SDLC bottlenecks for AI?",
        bullets: [
          "Guide narrative: developers often assemble localhost, server logs, and CLI tools themselves; Cursor targets an integrated workspace (e.g. browser preview, agent plan, code, output together).",
          "Shipping is iterative: plan → implement → see behavior → adjust; tighter loop → faster delivery.",
        ],
      },
    ],
    monorepoCaveat:
      "For extremely large monorepos, editor performance can be the bottleneck (not necessarily the agent). Do discovery; engage solutions for strategy. CLI-only tools don’t “solve” the editor — those users still need an IDE tuned for the repo.",
    proofPoints: [
      "64% of Fortune 500 use Cursor — strong logo footprint and reference stories.",
      "NVIDIA: exclusive AI coding provider for 25,000 developers on a 2-year term (model neutrality and DX called out in guide).",
      "Guide cites eval evidence: same Opus-level performance on SWE Bench / long-horizon evals in Cursor vs Claude Code harness.",
      "Semantic indexing narrative: Sonnet 4.5 materially stronger in Cursor vs without Cursor’s indexing (guide cites ~15% improvement on stated benchmark).",
      "MCP / dynamic context: guide cites ~47% better token efficiency with dynamic context discovery.",
      "University of Chicago study referenced in guide: 39% more PRs after Cursor agent adoption.",
      "Model churn: guide argues Anthropic was not the single best coding model for a substantial portion of 2025 — reinforces neutrality story (verify dates/claims with current GTM materials).",
    ],
    salesTraps: [
      "Don’t lead with CLI if side-by-side comparison will hurt — guide flags CLI as weaker today for some bake-offs.",
      "Don’t oversell customization parity without aligning to current product marketing (guide references moving parity on extensibility).",
      "Don’t claim pricing wins without their numbers — enterprise is often token-based; individual tiers may be subsidized elsewhere.",
      "Don’t oversell Composer penetration — guide notes limited share vs some alternatives; calibrate claims.",
      "Don’t pitch Cloud Agents as the headline differentiator unless GTM has updated guidance.",
      "Stay calm: discovery first, let the customer talk, avoid combat mode.",
    ],
    customerStories: [
      {
        name: "Spotify",
        context: "~3,000 engineers; evaluated alongside Claude Code.",
        bullets: [
          "VP Engineering cited 30%+ productivity-style gains; legacy data pipeline work estimated at weeks finished in under a day (customer-reported outcome in guide).",
          "Why Cursor won per guide: standardized DevEx and fast time to value vs heavy per-developer customization; strong IDE + agent integration vs IntelliJ extension gaps they perceived with Claude Code; majority wanted an IDE-led workflow.",
        ],
      },
      {
        name: "NVIDIA",
        context: "25,000 developers; exclusive AI coding provider, 2-year term.",
        bullets: [
          "Model / vendor neutrality called out as core selection criterion given rapid frontier change.",
          "Complete agentic DX: preference for IDE tightly integrated with agents vs CLI-only assembly.",
          "Singular focus: Cursor’s mission on coding vs a model lab’s broader priorities.",
          "Enterprise security: co-designed controls (e.g. sandbox terminal, network allow/deny, audit logging) that became product features.",
        ],
      },
      {
        name: "SAP",
        context: "~$300B market cap; eval included Claude Code, Windsurf, incumbent Copilot; initial ~1,000 developers.",
        bullets: [
          "Fast time to value: intuitive UI, low onboarding friction.",
          "Performance: first-class context management — semantic search plus grep vs alternatives.",
          "No vendor lock-in: model-agnostic surfaces across planning and development.",
          "Plan mode called out as a standout for better prompts when building with agents.",
        ],
      },
    ],
  },

  competitors: [
    {
      id: "claude-code",
      name: "Claude Code",
      maker: "Anthropic",
      category: "CLI / agent harness (often paired with another IDE)",
      oneLiner:
        "First-party Anthropic coding agent experience — strong terminal ubiquity and “built for our models” narrative; guide reframes harness vs model and highlights Cursor’s IDE + indexing differentiation.",
      strengths: [
        "Terminal / CLI runs almost anywhere — lower install friction; fits developers who live in the shell.",
        "“Anthropic built the model” perception can shorten trust conversations even when performance is comparable on same API.",
        "If legal, support, and marketing already buy Claude or ChatGPT enterprise-wide, procurement may favor deepening that relationship vs adding a new vendor.",
        "Individual-tier economics can be heavily subsidized — harder to argue on price at the individual level (guide).",
      ],
      weaknesses: [
        "Guide debunks “secret” first-party model access: same API and weights; Cursor publishes comparable harness results on SWE Bench / long-horizon evals for same models.",
        "Without semantic codebase indexing, context is narrower — guide contrasts grep-only style retrieval vs Cursor’s semantic + grep approach for large repos.",
        "Visual SDLC loop: users may assemble VS Code/IntelliJ + localhost + logs + CLI themselves; Cursor positions an integrated workspace (plan, browser preview, code, output).",
        "Customization at scale: guide argues DIY skills/scripts create sprawl for large orgs vs Cursor’s out-of-box defaults with room for power users.",
      ],
      cursorContrast:
        "Same models can be compared fairly — Cursor differentiates on harness per model, semantic indexing, dynamic context efficiency, and product surface (plan, browser, debug, Bugbot, etc.). Lead with discovery and demo on their codebase.",
      internalRef: "GTM Guide §2, §CC pitches, objections",
      byPhase: {
        planning:
          "Guide maps planning/design assistance to structured plan mode and visual tools in Cursor vs markdown-in-terminal workflows.",
        requirements:
          "Documentation: guide lists docs/README/comments generation as part of Cursor’s SDLC story — probe what they need standardized.",
        design:
          "Figma-like visual design tools + structured plans — part of “platform not just tool” narrative vs CLI-centric assembly.",
        implementation:
          "Primary competitive zone: guide states same model/API — differentiation is context management (semantic index, dynamic context), harness tuning, and IDE-native agent control (browser, worktrees, pre-commit review).",
        testing:
          "Code review: Bugbot called out as proprietary review product; agent can write and run tests — validate with customer workflow.",
        deployment:
          "If they cite “CLI covers more of SDLC / CI,” guide says to probe their pipeline — CLI may be stronger for some automation stories; don’t hand-wave without discovery.",
        maintenance:
          "Debug mode called out as a core shipped capability for iterative fix loops — pair with observability practices already in your SDLC module.",
      },
    },
    {
      id: "github-copilot-codex",
      name: "GitHub Copilot & OpenAI Codex",
      maker: "Microsoft / GitHub / OpenAI",
      category: "Editor extensions, GitHub-native assistants, Codex flows",
      oneLiner:
        "Dominant distribution through GitHub and VS Code; guide argues running Claude Code / Codex as extensions still misses semantic codebase understanding, constrained model choice, and deep large-repo workflows vs native Cursor agents.",
      strengths: [
        "Ubiquitous GitHub integration and enterprise familiarity.",
        "Copilot in PRs, chat in editor, and broad Microsoft ecosystem alignment.",
        "SAP example in guide: Copilot was the incumbent in a major evaluation — expect displacement conversations, not greenfield.",
      ],
      weaknesses: [
        "Guide: extension form factor inherits core limitations — limited semantic codebase understanding vs native agent; model choice constraints relative to neutral platforms.",
        "Large-repository workflows: same indexing / harness arguments as against other grep-biased contexts — use demo discovery.",
      ],
      cursorContrast:
        "Native Cursor agents integrate deeply with IDE features (agent browser, pre-commit agentic review, git worktrees, etc.). Extensions are more constrained — validate side-by-side on their repo.",
      internalRef: "GTM Guide §objections (IDE extension), SAP card",
      byPhase: {
        planning: "Light: issues, comments, and GitHub-side text; platform play is usually sold on implementation velocity.",
        requirements: "May assist ticket text; product still owns acceptance criteria.",
        design: "Limited compared to Cursor’s plan + visual surface per guide’s platform story.",
        implementation: "Copilot completions and chat are center of gravity; agentic multi-file work is the comparison point for Cursor.",
        testing: "Suggestions and test scaffolding — still require human review and CI truth.",
        deployment: "Indirect via pipeline YAML and log reading in editor — ask what “CI/CD AI” means for them.",
        maintenance: "Chat-based explanation of logs/errors inside editor workflows.",
      },
    },
    {
      id: "windsurf",
      name: "Windsurf",
      maker: "Codeium",
      category: "Agentic IDE (direct bake-off)",
      oneLiner:
        "Direct IDE competitor; SAP’s evaluation included Windsurf alongside Claude Code and Copilot — Cursor won on TTV, context management, neutrality, and plan mode per guide.",
      strengths: [
        "Feature-competitive agentic IDE — expect bake-offs on speed, UX, and price/packaging.",
        "Often positioned aggressively for teams shopping multiple AI IDEs.",
      ],
      weaknesses: [
        "Enterprise buyers will still scrutinize security, compliance, IP, and roadmap — win with proof points and references.",
        "Guide: SAP specifically preferred Cursor’s context stack (semantic + grep) and model-agnostic story.",
      ],
      cursorContrast:
        "Use customer proof (SAP, Spotify, NVIDIA narratives), demo on their codebase, and align to the four pillars — especially indexing, neutrality, and SDLC platform story.",
      internalRef: "GTM Guide — SAP evaluation",
      byPhase: {
        planning: "Comparable to other IDE agents unless they market planning-specific flows — anchor on Cursor plan mode story.",
        requirements: "Low differentiation unless tied to specific workflows.",
        design: "Compare visual/planning surfaces honestly in pilot.",
        implementation: "Head-to-head agent UX, context quality, and enterprise controls.",
        testing: "Agent-generated tests and review products (e.g. Bugbot) as differentiators where true.",
        deployment: "Pipeline editing assistance only — probe real CI needs.",
        maintenance: "Debug and explain loops — compare product surfaces.",
      },
    },
  ],

  glossary: [
    {
      term: "Agent harness",
      def: "The system prompt, tools, and instructions wrapped around a model so it can take multi-step actions — separate from training the model itself (per GTM guide: first-party harness ≠ secret model).",
    },
    { term: "SDLC", def: "Software Development Lifecycle — from idea to production and back again in a loop." },
    { term: "IDE", def: "Integrated Development Environment — the app where developers write and navigate code." },
    { term: "CLI", def: "Command-line interface — typing commands in a terminal instead of only using a mouse." },
    { term: "CI", def: "Continuous Integration — automatically building and testing each change." },
    { term: "CD", def: "Continuous Delivery/Deployment — automating the path to production (with or without a human gate)." },
    { term: "PR", def: "Pull Request — proposed code change with review before merge." },
    { term: "API", def: "Structured way for software systems to request work or data from each other." },
    { term: "Staging", def: "Pre-production environment that behaves like the real system for final checks." },
    { term: "Feature flag", def: "Switch that turns a feature on/off without redeploying everything." },
    { term: "Observability", def: "Using logs, metrics, and traces to understand production behavior." },
    { term: "Postmortem", def: "Blameless learning doc after an incident — what broke, how we fixed it, what we’ll improve." },
    { term: "Tech debt", def: "Shortcuts that speed you up now but slow you down later unless repaid." },
    {
      term: "PostgreSQL",
      def: "A popular relational database — data in tables, queried with SQL. Often run as managed cloud Postgres (RDS, Neon, etc.).",
    },
    {
      term: "Redis",
      def: "Fast in-memory datastore used for caching, sessions, queues, and rate limiting — usually alongside a primary database.",
    },
    {
      term: "Edge / frontend hosting",
      def: "Platforms like Vercel or Netlify deploy web apps close to users, often with preview deployments per PR — complementary to cloud databases and APIs.",
    },
    {
      term: "Kubernetes",
      def: "Software that schedules and runs many containers across servers — restarts failed apps and scales traffic. Clouds offer managed versions (EKS, GKE, AKS).",
    },
    {
      term: "Jira",
      def: "Atlassian’s work-tracking tool (issues, epics, boards). Common in enterprises; similar purpose to Linear with heavier workflow and reporting.",
    },
    {
      term: "Snowflake / BigQuery",
      def: "Cloud data warehouses for analytics — SQL over huge datasets. Not the same as your app’s live database; used for BI, reporting, and ML features.",
    },
    {
      term: "Snyk",
      def: "Security product that finds vulnerable open-source packages and sometimes code issues — usually wired into CI so teams fix issues before release.",
    },
    {
      term: "Wiz",
      def: "Cloud security platform that discovers resources and misconfigurations across clouds — helps security teams prioritize real risk, not just checklists.",
    },
  ],

  approaches: [
    {
      name: "Waterfall",
      desc: "Big planning up front, then phases in order. Fine when requirements are frozen; painful when markets move fast.",
    },
    {
      name: "Agile",
      desc: "Small batches of work, frequent delivery, continuous reprioritization. What most SaaS teams mean when they say “sprints.”",
    },
    {
      name: "DevOps",
      desc: "Developers and operators share ownership of quality and uptime; heavy automation and fast feedback.",
    },
  ],
};
