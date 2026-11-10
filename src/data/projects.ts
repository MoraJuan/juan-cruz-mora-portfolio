import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    id: "chimento",
    name: "Chimento",
    year: "2025",
    status: "shipped",
    stack: [
      "FastAPI",
      "Python",
      "PostgreSQL",
      "SQLAlchemy",
      "Next.js",
      "TypeScript",
    ],
    images: [
      { src: "/projects/chimento/home.png", key: "home" },
      { src: "/projects/chimento/catalog.png", key: "catalog" },
      { src: "/projects/chimento/product.png", key: "product" },
    ],
    demoUrl: "https://chimentokids.com.ar",
  },
  {
    id: "resto-app",
    name: "App Resto",
    year: "2026",
    status: "in-progress",
    stack: [
      "Go",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Docker",
      "Nginx",
    ],
    images: [
      { src: "/projects/resto-app/login.png", key: "login" },
      { src: "/projects/resto-app/commerce-login.png", key: "commerce" },
      { src: "/projects/resto-app/platform.png", key: "dashboard" },
      { src: "/projects/resto-app/commerce-detail.png", key: "detail" },
      { src: "/projects/resto-app/alta.png", key: "alta" },
    ],
  },
  {
    id: "safeshot",
    name: "SafeShot",
    year: "2026",
    status: "shipped",
    stack: ["C#", "Python", "FastAPI", "Tesseract OCR", "LLM", "ShareX", "Docker"],
    images: [
      { src: "/projects/safeshot/before.png", key: "before" },
      { src: "/projects/safeshot/after.png", key: "after" },
      { src: "/projects/safeshot/before-2.png", key: "before-2" },
      { src: "/projects/safeshot/after-2.png", key: "after-2" },
    ],
    repoUrl: "https://github.com/MoraJuan/SafeShot",
  },
  {
    id: "pilates",
    name: "Studio Manager",
    year: "2025",
    status: "shipped",
    stack: ["FastAPI", "Python", "PostgreSQL", "React", "TypeScript"],
    images: [{ src: "/projects/pilates/login.png", key: "login" }],
    videoSrc: "/projects/pilates/tour.mp4",
    walkthrough: {
      href: "https://www.linkedin.com/feed/update/urn:li:activity:7494058412788588544/",
      poster: "/projects/pilates/tour-poster.jpg",
    },
  },
];
