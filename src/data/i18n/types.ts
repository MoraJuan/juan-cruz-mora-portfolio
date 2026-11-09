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
    indicator: string;
    headline: string;
    description: string;
    viewProjects: string;
    downloadCv: string;
    locationLabel: string;
    profileLabel: string;
    linksLabel: string;
  };
  about: {
    eyebrow: string;
    title: string;
    description: string;
    paragraphs: string[];
    facts: { label: string; value: string }[];
  };
  projects: {
    eyebrow: string;
    title: string;
    description: string;
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
    eyebrow: string;
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
    eyebrow: string;
    title: string;
    text: string;
    email: string;
    location: string;
  };
  footer: {
    location: string;
  };
};
