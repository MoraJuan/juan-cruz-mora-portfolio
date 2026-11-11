export type Locale = "es" | "en";

export type ProjectCopy = {
  tagline: string;
  problem: string;
  built: string[];
  decisions: string[];
  notes?: string;
  imageCaptions?: Record<string, string>;
  imageAlts?: Record<string, string>;
};

export type Dictionary = {
  skipToContent: string;
  nav: {
    home: string;
    ask: string;
    about: string;
    projects: string;
    experience: string;
    contact: string;
    downloadCv: string;
    menuOpen: string;
    menuClose: string;
    primary: string;
    mobile: string;
  };
  scroll: {
    toAbout: string;
    toProjects: string;
    toExperience: string;
    toContact: string;
    toTop: string;
  };
  cv: {
    download: string;
    es: string;
    en: string;
  };
  lang: {
    switchTo: string;
    es: string;
    en: string;
  };
  theme: {
    toLight: string;
    toDark: string;
  };
  hero: {
    headline: string;
    description: string;
    viewProjects: string;
    downloadCv: string;
    photoCaption: string;
  };
  askAi: {
    title: string;
    chatTitle: string;
    thinkingLabel: string;
    doneLabel: string;
    prompt: string;
    greeting: string;
    youLabel: string;
    assistantLabel: string;
    composerHint: string;
    viewPortfolio: string;
    openChat: string;
    openChatAria: string;
    fabTeaser: string;
    askAnother: string;
    clearChat: string;
    questions: Record<
      "who" | "projects" | "ai-work" | "stack" | "safeshot" | "available",
      {
        label: string;
        steps: string[];
        answer: string;
      }
    >;
  };
  about: {
    title: string;
    description: string;
    paragraphs: string[];
    facts: { label: string; value: string }[];
  };
  projects: {
    title: string;
    description: string;
    openCase: string;
    close: string;
    problem: string;
    built: string;
    decisions: string;
    stack: string;
    screenshots: string;
    repository: string;
    demo: string;
    walkthrough: string;
    walkthroughCaption: string;
    status: {
      shipped: string;
      "in-progress": string;
      draft: string;
    };
    items: Record<string, ProjectCopy>;
  };
  experience: {
    title: string;
    description: string;
    skills: string;
    skillGroups: {
      backend: string;
      frontend: string;
      databases: string;
      infra: string;
      tools: string;
      ai: string;
    };
    trajectory: string;
    roles: {
      freelance: { role: string; org: string; summary: string };
      tecnico: { role: string; org: string; summary: string };
    };
    educationTitle: string;
    education: {
      degree: string;
      institution: string;
      period: string;
      status: string;
    };
  };
  contact: {
    title: string;
    text: string;
    email: string;
    location: string;
  };
  footer: {
    location: string;
  };
};
