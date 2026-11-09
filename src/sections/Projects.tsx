"use client";

import { useLocale } from "@/components/LocaleProvider";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  const { t } = useLocale();

  return (
    <section
      id="proyectos"
      className="section-pad border-t border-border"
      aria-labelledby="projects-title"
    >
      <div className="container-page">
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
      </div>
    </section>
  );
}
