"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useLocale } from "@/components/LocaleProvider";
import { Reveal } from "@/components/Reveal";
import SpotlightCard from "@/components/SpotlightCard";
import { useTheme } from "@/components/ThemeProvider";
import type { Project } from "@/lib/types";

type ProjectCardProps = {
  project: Project;
  index: number;
  onOpen: (project: Project) => void;
};

export function ProjectCard({ project, index, onOpen }: ProjectCardProps) {
  const { t } = useLocale();
  const { theme } = useTheme();
  const copy = t.projects.items[project.id];
  const number = String(index + 1).padStart(2, "0");
  const cover = project.images[0];

  if (!copy) return null;

  return (
    <Reveal as="article" className="h-full" delay={Math.min(index, 5) * 70}>
      <SpotlightCard
        theme={theme}
        spotlightColor={theme === "dark" ? "#6a9fb0" : "#143d4d"}
        intensity={theme === "dark" ? 0.22 : 0.18}
        spotlightSize={280}
        borderGlow={0.7}
        proximity={100}
        className="flex h-full flex-col"
      >
        <button
          type="button"
          onClick={() => onOpen(project)}
          className="group/card relative z-[2] flex h-full w-full flex-col text-left outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
        >
          {cover ? (
            <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-border bg-bg">
              <Image
                src={cover.src}
                alt={copy.imageAlts?.[cover.key] ?? project.name}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover object-top transition-transform duration-500 ease-out group-hover/card:scale-[1.03]"
                loading={index < 2 ? "eager" : "lazy"}
              />
            </div>
          ) : null}

          <div className="flex flex-1 flex-col p-5 md:p-6">
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <span className="font-mono text-xs tracking-wider text-muted">
                {number}
              </span>
              {project.year ? (
                <span className="font-mono text-xs tracking-wider text-muted">
                  {project.year}
                </span>
              ) : null}
              <span className="font-mono text-xs tracking-wider text-accent">
                {t.projects.status[project.status]}
              </span>
            </div>

            <div className="mt-2 flex items-start justify-between gap-3">
              <h3 className="text-xl font-medium tracking-tight text-text transition-colors duration-200 group-hover/card:text-accent md:text-2xl">
                {project.name}
              </h3>
              <ArrowUpRight
                className="mt-1 size-5 shrink-0 text-muted transition-colors duration-200 group-hover/card:text-accent"
                aria-hidden
              />
            </div>

            <p className="mt-2 max-w-2xl text-[0.98rem] leading-relaxed text-muted">
              {copy.tagline}
            </p>

            <ul className="mt-4 flex flex-wrap gap-2">
              {project.stack.slice(0, 5).map((tech) => (
                <li
                  key={tech}
                  className="border border-border bg-bg/80 px-2.5 py-1 font-mono text-xs tracking-wide text-muted"
                >
                  {tech}
                </li>
              ))}
              {project.stack.length > 5 ? (
                <li className="px-1 py-1 font-mono text-xs tracking-wide text-muted">
                  +{project.stack.length - 5}
                </li>
              ) : null}
            </ul>

            <span className="mt-auto pt-5 font-mono text-xs tracking-wide text-accent">
              {t.projects.openCase}
            </span>
          </div>
        </button>
      </SpotlightCard>
    </Reveal>
  );
}
