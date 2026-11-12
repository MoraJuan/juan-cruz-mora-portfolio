import type { Dictionary } from "./types";

export const en: Dictionary = {
  skipToContent: "Skip to content",
  nav: {
    home: "Home",
    ask: "Ask",
    about: "About",
    projects: "Projects",
    experience: "Experience",
    contact: "Contact",
    downloadCv: "Download CV",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    primary: "Primary",
    mobile: "Mobile",
  },
  scroll: {
    toAbout: "Go to About",
    toProjects: "Go to Projects",
    toExperience: "Go to Experience",
    toContact: "Go to Contact",
    toTop: "Back to top",
  },
  cv: {
    download: "Download CV",
    es: "CV in Spanish",
    en: "CV in English",
  },
  lang: {
    switchTo: "Switch language",
    es: "ES",
    en: "EN",
  },
  theme: {
    toLight: "Switch to light mode",
    toDark: "Switch to dark mode",
  },
  hero: {
    headline: "Full-Stack AI Engineer",
    description:
      "I design full-stack products and agent-driven systems: APIs, data, interfaces, and orchestrated AI workflows for real operations.",
    viewProjects: "View projects",
    downloadCv: "Download CV",
    photoCaption: "San Juan, AR",
  },
  askAi: {
    title: "MorAI",
    chatTitle: "Chat with MorAI",
    thinkingLabel: "Thinking…",
    doneLabel: "Thought for",
    prompt: "Suggestions",
    greeting:
      "Hi. Ask about my profile, projects, stack, or availability. Pick a suggestion to start.",
    youLabel: "You",
    assistantLabel: "Assistant",
    composerHint: "Pick a suggestion to send…",
    viewPortfolio: "View portfolio",
    openChat: "Open chat",
    openChatAria: "Open profile chat",
    fabTeaser: "Chat with MorAI to get to know me better, faster",
    askAnother: "Ask another",
    clearChat: "Clear chat",
    questions: {
      who: {
        label: "Who are you and what’s your focus?",
        steps: [
          "Reading the question",
          "Checking background and location",
          "Summarizing the professional focus",
        ],
        answer:
          "I’m Juan Cruz Mora, a Full-Stack AI Engineer based in San Juan, Argentina. I’m in the advanced stage of a B.S. in Information Systems (UNSJ). I build end-to-end products: APIs, data, interfaces, and automation. The focus is production-ready systems, and orchestrating agents when they speed up design and delivery without losing domain control.",
      },
      projects: {
        label: "What products have you built, and what problem did each solve?",
        steps: [
          "Reading the question",
          "Scanning portfolio cases",
          "Summarizing each product",
        ],
        answer:
          "Chimento: children’s retail e-commerce (FastAPI + Next.js + PostgreSQL) with catalog, variants, stock, and checkout. App Resto: restaurant platform (Go + React) for businesses, branches, tables, orders, kitchen, and cashier. SafeShot: OCR/LLM pipeline on ShareX to redact sensitive data before sharing screenshots. Studio Manager: studio panel (FastAPI + React) with a WhatsApp bot for bookings and inquiries. Open each full case in the portfolio.",
      },
      "ai-work": {
        label: "How do you use AI agents day to day?",
        steps: [
          "Reading the question",
          "Mapping the agent workflow",
          "Connecting tools to real deliverables",
        ],
        answer:
          "I orchestrate agents (Cursor, Claude, Codex) to research, propose design, implement, review, and document. Models don’t decide alone: I define contracts, review diffs, and validate in a real environment. I also ship AI in product — OCR + rules + optional LLM in SafeShot, or attention bots synced with an admin panel. The goal is speed with engineering judgment.",
      },
      stack: {
        label: "What stack do you work with today?",
        steps: [
          "Reading the question",
          "Grouping backend, frontend, and infra",
          "Prioritizing what I use most",
        ],
        answer:
          "Backend: Python/FastAPI, Go, TypeScript/Node, and REST APIs. Frontend: React, Next.js, and Tailwind. Data: PostgreSQL, SQLAlchemy/Prisma/Alembic, and Redis when needed. Infra: Docker, Linux, GitHub, Railway, Vercel, and AWS. On the AI side: agent orchestration and OCR/LLM pipelines. I pick tools for the problem, not for fashion.",
      },
      safeshot: {
        label: "Tell me more about SafeShot and the AI angle",
        steps: [
          "Reading the question",
          "Reviewing the OCR/LLM pipeline",
          "Explaining privacy decisions",
        ],
        answer:
          "SafeShot hooks into ShareX after capture. A local FastAPI service runs OCR (Tesseract) and deterministic rules (emails, cards, tokens, IDs, etc.). The LLM is optional and requires consent per capture; if the service fails, the original is kept and automatic upload is disabled. It’s applied AI with a local-first mode and a safe fallback.",
      },
      available: {
        label: "Are you available, and how can I reach you?",
        steps: [
          "Reading the question",
          "Checking availability",
          "Sharing contact channels",
        ],
        answer:
          "Yes — open to roles, freelance projects, and technical conversations. Email juancruzmora26@gmail.com or reach me on LinkedIn (linkedin.com/in/juan-cruz-mora). You can also download the CV from the portfolio. Tell me the problem or the role and we can see if it’s a fit.",
      },
    },
  },
  about: {
    title: "About",
    description:
      "Studying systems, shipping products, and orchestrating agents close to the real problem.",
    paragraphs: [
      "I'm in the advanced stage of a Bachelor's in Information Systems at Universidad Nacional de San Juan. I work on concrete cases: APIs, data, admin panels, automation, and OCR/LLM pipelines when they add leverage.",
      "I move across full stack and agent orchestration depending on what the problem needs. The focus is on systems that work well in production.",
    ],
    facts: [
      { label: "Location", value: "San Juan, Argentina" },
      {
        label: "Education",
        value: "B.S. Information Systems — UNSJ (in progress)",
      },
      {
        label: "Focus",
        value: "Full-stack, APIs, and agent orchestration",
      },
    ],
  },
  projects: {
    title: "Projects",
    description:
      "Full-stack products and intelligent automation. Tap a project to open the full case.",
    openCase: "View case",
    close: "Close project",
    problem: "Problem",
    built: "What was built",
    decisions: "Technical decisions",
    stack: "Stack",
    screenshots: "Screenshots",
    repository: "Repository",
    demo: "Demo",
    walkthrough: "Watch walkthrough",
    walkthroughCaption: "Panel and bot walkthrough (anonymous demo)",
    moreOnGithub: "See more projects on GitHub",
    status: {
      shipped: "Available",
      "in-progress": "In progress",
      draft: "Draft",
    },
    items: {
      safeshot: {
        tagline:
          "OCR/LLM pipeline for sensitive-data redaction in screenshots, integrated with ShareX.",
        problem:
          "When sharing support screenshots, demos, or documentation, it is easy to leak emails, cards, tokens, national IDs, tax IDs, bank accounts, or phone numbers. The risk appears after capture, once the image is ready for clipboard, disk, or remote upload.",
        built: [
          "ShareX pipeline extension at DoAfterCaptureJobs, before copy, save, or upload.",
          "Local FastAPI service that receives the image, runs Tesseract OCR, and applies deterministic detection rules.",
          "Optional LLM layer to strengthen detection, with explicit consent per capture.",
          "Original | redacted review flow inside ShareX, with continue or cancel.",
          "Reverse-engineering notes for ShareX v21.0.0 and a reproducible exportable patch.",
        ],
        decisions: [
          "Base mode is 100% local: OCR and rules run on-device; an external LLM is optional and requires explicit consent per capture.",
          "If the service does not respond, the original is kept, a warning is shown, and automatic upload for that capture is disabled.",
          "Pattern-based detection (email, Luhn cards, JWT, API keys, national ID, tax ID, bank account, phone) instead of relying only on a model.",
          "Evaluation with a synthetic dataset and service tests to validate OCR precision and limits.",
        ],
        imageCaptions: {
          before: "Before — sensitive data visible",
          after: "After — data redacted",
          "before-2": "Before — another test case",
          "after-2": "After — redaction applied",
        },
        imageAlts: {
          before: "Synthetic screenshot with visible sensitive data",
          after: "Same screenshot with sensitive data redacted",
          "before-2": "Second test screenshot with sensitive data",
          "after-2": "Second screenshot after redaction",
        },
      },
      "resto-app": {
        tagline:
          "Restaurant operations platform: organization, catalog, tables, orders, kitchen, and cashier.",
        problem:
          "A food business needs to coordinate branches, staff, catalog, tables, orders, and payments with clear roles and operational consistency, without over-designing the architecture too early.",
        built: [
          "Go API with PostgreSQL and a React + TypeScript web frontend.",
          "SaaS platform administration for creating and enabling businesses.",
          "Management of businesses, branches, roles, and access.",
          "Branch catalog, tables, orders, kitchen, and cashier flows.",
          "Local environment reproducible with Docker Compose.",
        ],
        decisions: [
          "Separate API and web under the same origin to simplify session cookies and CSRF.",
          "Role authorization enforced on the server, not only in the UI.",
          "Docker-based local deployment for Postgres, API, and web.",
          "Operational core first; advanced reporting and stock remain outside the initial scope.",
        ],
        imageCaptions: {
          login: "Platform administration login",
          commerce: "Business / team login",
          dashboard: "Businesses list in the platform panel",
          detail: "Admin detail for a demo business",
          alta: "Business, branch, and owner onboarding form",
        },
        imageAlts: {
          login: "App Resto platform login screen",
          commerce: "App Resto business login screen",
          dashboard: "App Resto businesses admin panel",
          detail: "App Resto demo business detail screen",
          alta: "App Resto business onboarding form",
        },
      },
      chimento: {
        tagline:
          "Children's retail e-commerce: catalog, variants, inventory, and checkout.",
        problem:
          "A children's clothing store needs an online shop with catalog management, stock control, and a reliable purchase flow, without a rigid template constraining business logic.",
        built: [
          "FastAPI backend for catalog, products, and purchase operations.",
          "Next.js frontend for storefront, product browsing, and checkout experience.",
          "PostgreSQL persistence modeled around products, variants, and inventory.",
          "Payment gateway and shopping cart integration within the project scope.",
        ],
        decisions: [
          "Separate API and frontend to keep clear contracts between catalog, stock, and checkout.",
          "Use SQLAlchemy / SQL to model products and orders with explicit inventory control.",
          "Prioritize performance and SEO in the Next.js storefront layer.",
        ],
        imageCaptions: {
          home: "Store homepage",
          catalog: "Catalog with filters and search",
          product: "Product detail with variants",
        },
        imageAlts: {
          home: "E-commerce homepage",
          catalog: "Product listing with filters",
          product: "Product detail page",
        },
      },
      pilates: {
        tagline:
          "Studio management with a full-stack panel and WhatsApp booking agent.",
        problem:
          "A studio needs to centralize students, teachers, class slots, plans, and payment receipts, and offer a support channel that reduces friction when booking or checking availability.",
        built: [
          "Admin panel for students, teachers, schedules, bookings, plans, and payments.",
          "FastAPI + PostgreSQL backend and React frontend.",
          "WhatsApp bot as an attention agent for booking and inquiry, synced with the panel.",
          "Demonstration build with sample data and no real business identity.",
        ],
        decisions: [
          "Keep the web panel and messaging automation separate while sharing one source of truth.",
          "Use demo data to document the product without exposing real client information.",
          "Model bookings and plans as explicit backend domain, not only as UI forms.",
        ],
        imageCaptions: {
          login: "Anonymous studio demo login",
        },
        imageAlts: {
          login: "Studio demo login screen",
        },
      },
    },
  },
  experience: {
    title: "Experience and skills",
    description:
      "Technologies and tools I work with, grouped by area.",
    skills: "Skills",
    skillGroups: {
      backend: "Backend",
      frontend: "Frontend",
      databases: "Databases",
      infra: "Infrastructure & DevOps",
      tools: "Tools & workflow",
      ai: "AI & Agents",
    },
    trajectory: "Background",
    roles: {
      freelance: {
        role: "Full-Stack AI Engineer",
        org: "Independent",
        summary:
          "Full-stack products, integrations, and automation. Much of the work is orchestrating agents to design, build, and ship systems for real operations.",
      },
      tecnico: {
        role: "Technician",
        org: "Ministry of Education of Argentina",
        summary:
          "Technical support, connectivity, and infrastructure in school environments. Network configuration and system maintenance for educational institutions.",
      },
    },
    educationTitle: "Education",
    education: {
      degree: "Bachelor's in Information Systems",
      institution: "Universidad Nacional de San Juan",
      period: "2020 — Present",
      status: "In progress — advanced stage",
    },
  },
  contact: {
    title: "Contact",
    text: "Got a role, a project, or a question? Write me.",
    email: "Email",
    location: "Location",
  },
  footer: {
    location: "San Juan, Argentina",
  },
};
