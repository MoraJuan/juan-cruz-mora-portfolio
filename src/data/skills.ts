import type { SkillGroup } from "@/lib/types";

export const skillGroups: SkillGroup[] = [
  {
    id: "backend",
    title: "Backend Development",
    items: [
      { name: "Python" },
      { name: "FastAPI" },
      { name: "Go" },
      { name: "TypeScript" },
      { name: "Node.js" },
      { name: "NestJS" },
      { name: "Flask" },
      { name: "REST APIs" },
    ],
  },
  {
    id: "frontend",
    title: "Frontend Development",
    items: [
      { name: "React" },
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
    ],
  },
  {
    id: "databases",
    title: "Databases",
    items: [
      { name: "PostgreSQL" },
      { name: "SQLAlchemy" },
      { name: "Prisma" },
      { name: "Alembic" },
      { name: "MySQL" },
      { name: "Redis" },
      { name: "SQLite" },
    ],
  },
  {
    id: "infra",
    title: "Infrastructure & DevOps",
    items: [
      { name: "Docker" },
      { name: "Linux" },
      { name: "Git / GitHub" },
      { name: "Railway" },
      { name: "Vercel" },
      { name: "AWS" },
      { name: "Cloudflare" },
    ],
  },
  {
    id: "tools",
    title: "Tools & Workflow",
    items: [
      { name: "Diseño de APIs" },
      { name: "Modelado de datos" },
      { name: "Integraciones" },
      { name: "Automatizaciones" },
      { name: "Pruebas y validación" },
    ],
  },
  {
    id: "ai",
    title: "AI-assisted development",
    items: [{ name: "Claude" }, { name: "Codex" }, { name: "Cursor" }],
  },
];
