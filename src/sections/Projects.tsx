"use client";

import { useState } from "react";
import { useLocale } from "@/components/LocaleProvider";
import { Reveal } from "@/components/Reveal";
import { SectionFrame } from "@/components/SectionFrame";
import { SectionHeading } from "@/components/SectionHeading";
import { projects } from "@/data/projects";
import type { Project } from "@/lib/types";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";

export function Projects() {
  const { t } = useLocale();
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

      {active ? (
        <ProjectModal project={active} onClose={() => setActive(null)} />
      ) : null}
    </SectionFrame>
  );
}
