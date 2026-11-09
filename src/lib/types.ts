export type SkillGroup = {
  id: string;
  title: string;
  items: {
    name: string;
  }[];
};

export type ProjectImage = {
  src: string;
  key: string;
};

export type ProjectWalkthrough = {
  /** External post/video page when a local file is unavailable. */
  href: string;
  /** Optional poster image for the walkthrough card. */
  poster?: string;
};

export type Project = {
  id: string;
  name: string;
  year?: string;
  status: "shipped" | "in-progress" | "draft";
  stack: string[];
  images: ProjectImage[];
  repoUrl?: string;
  demoUrl?: string;
  /** Local video under /public when available. */
  videoSrc?: string;
  walkthrough?: ProjectWalkthrough;
};
