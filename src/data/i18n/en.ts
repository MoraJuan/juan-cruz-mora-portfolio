import type { Dictionary } from "./types";

export const en: Dictionary = {
  skipToContent: "Skip to content",
  nav: {
    home: "Home",
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
    headline: "Software developer",
    description:
      "I build APIs, backends, and web interfaces with a focus on clarity and maintainable systems.",
    viewProjects: "View projects",
    downloadCv: "Download CV",
    photoCaption: "San Juan, AR",
  },
  about: {
    title: "About",
    description:
      "Studying systems, shipping products, and staying close to the real problem.",
    paragraphs: [
      "I'm in the advanced stage of a Bachelor's in Information Systems at Universidad Nacional de San Juan. I work on concrete cases: APIs, data, admin panels, and automation.",
      "I move between backend and full stack depending on what the problem needs. The focus is on systems that work well in production, not on locking into one tool.",
    ],
    facts: [
      { label: "Location", value: "San Juan, Argentina" },
      {
        label: "Education",
        value: "B.S. Information Systems — UNSJ (in progress)",
      },
      {
        label: "Focus",
        value: "Backend, APIs, and full-stack development",
      },
    ],
  },
  projects: {
    title: "Projects",
    description:
      "Expand each case to see the problem, what was built, and the technical decisions.",
    problem: "Problem",
    built: "What was built",
    decisions: "Technical decisions",
    stack: "Stack",
    screenshots: "Screenshots",
    repository: "Repository",
    demo: "Demo",
    walkthrough: "Watch walkthrough",
    walkthroughCaption: "Panel and bot walkthrough (anonymous demo)",
    status: {
      shipped: "Available",
      "in-progress": "In progress",
      draft: "Draft",
    },
    items: {
      safeshot: {
        tagline:
          "Sensitive-data redaction for screenshots, integrated with ShareX.",
        problem:
          "When sharing support screenshots, demos, or documentation, it is easy to leak emails, cards, tokens, national IDs, tax IDs, bank accounts, or phone numbers. The risk appears after capture, once the image is ready for clipboard, disk, or remote upload.",
        built: [
          "ShareX pipeline extension at DoAfterCaptureJobs, before copy, save, or upload.",
          "Local FastAPI service that receives the image, runs Tesseract OCR, and applies deterministic detection rules.",
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
          "Management system for a pilates studio: students, schedules, bookings, and payments.",
        problem:
          "A studio needs to centralize students, teachers, class slots, plans, and payment receipts, and offer a support channel that reduces friction when booking or checking availability.",
        built: [
          "Admin panel for students, teachers, schedules, bookings, plans, and payments.",
          "FastAPI + PostgreSQL backend and React frontend.",
          "WhatsApp bot integrated as a booking and inquiry channel, synced with the panel.",
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
      "Stack and tools grouped by area, without artificial scores.",
    skills: "Skills",
    skillGroups: {
      backend: "Backend",
      frontend: "Frontend",
      databases: "Databases",
      infra: "Infrastructure & DevOps",
      tools: "Tools & workflow",
      ai: "AI-assisted development",
    },
    trajectory: "Background",
    roles: {
      freelance: {
        role: "Freelance Developer",
        org: "Independent",
        summary:
          "Design and development of management systems and integrations. Automation and software built for real operations.",
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
