"use client";

import { useLocale } from "@/components/LocaleProvider";
import { Reveal } from "@/components/Reveal";
import { SectionFrame } from "@/components/SectionFrame";
import { SectionHeading } from "@/components/SectionHeading";
import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  const { t } = useLocale();

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
          eyebrow={t.projects.eyebrow}
          title={t.projects.title}
          description={t.projects.description}
        />
      </Reveal>

      <div>
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </SectionFrame>
  );
}
