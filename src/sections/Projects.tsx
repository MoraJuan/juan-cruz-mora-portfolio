"use client";

import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { useLocale } from "@/components/LocaleProvider";
import { Reveal } from "@/components/Reveal";
import { SectionFrame } from "@/components/SectionFrame";
import { SectionHeading } from "@/components/SectionHeading";
import SpecularButton from "@/components/SpecularButton";
import { getSpecularThemeProps } from "@/components/specularTheme";
import { useTheme } from "@/components/ThemeProvider";
import { projects } from "@/data/projects";
import { site } from "@/data/site";
import type { Project } from "@/lib/types";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";

export function Projects() {
  const { t } = useLocale();
  const { theme } = useTheme();
  const specularProps = getSpecularThemeProps(theme);
  const [active, setActive] = useState<Project | null>(null);

  return (
    <SectionFrame
      id="proyectos"
      aria-labelledby="projects-title"
      center={false}
      nextHref="#experiencia"
      nextLabel={t.scroll.toExperience}
      className="border-t border-border"
    >
      <Reveal>
        <SectionHeading
          id="projects-title"
          title={t.projects.title}
          description={t.projects.description}
        />
      </Reveal>

      <div className="grid gap-5 md:grid-cols-2 md:gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            onOpen={setActive}
          />
        ))}
      </div>

      <Reveal className="mt-10 flex justify-center md:mt-12" delay={120}>
        <SpecularButton
          {...specularProps}
          onClick={() => {
            window.open(site.links.github, "_blank", "noopener,noreferrer");
          }}
        >
          {t.projects.moreOnGithub}
          <ArrowUpRight className="size-4" aria-hidden />
        </SpecularButton>
      </Reveal>

      {active ? (
        <ProjectModal project={active} onClose={() => setActive(null)} />
      ) : null}
    </SectionFrame>
  );
}
