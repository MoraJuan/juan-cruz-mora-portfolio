"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { ExternalLink } from "@/components/ExternalLink";
import { useLocale } from "@/components/LocaleProvider";
import { Reveal } from "@/components/Reveal";
import { TypeLine } from "@/components/TypeLine";
import type { Project } from "@/lib/types";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const { t } = useLocale();
  const copy = t.projects.items[project.id];
  const number = String(index + 1).padStart(2, "0");

  if (!copy) return null;

  return (
    <Reveal as="article" className="group border-t border-border py-12 md:py-16">
      <div className="grid min-w-0 gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] lg:gap-14">
        <header className="min-w-0 lg:sticky lg:top-24 lg:self-start">
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

          <TypeLine
            as="h3"
            text={project.name}
            charMs={17}
            className="mt-3 text-2xl font-medium tracking-tight text-text transition-colors duration-200 group-hover:text-accent md:text-[1.75rem]"
          />
          <TypeLine
            as="p"
            text={copy.tagline}
            byWord
            charMs={13}
            className="mt-3 text-[1.02rem] leading-relaxed text-muted"
          />

          <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
            {project.repoUrl ? (
              <ExternalLink href={project.repoUrl}>
                {t.projects.repository}
              </ExternalLink>
            ) : null}
            {project.demoUrl ? (
              <ExternalLink href={project.demoUrl}>{t.projects.demo}</ExternalLink>
            ) : null}
            {project.walkthrough ? (
              <ExternalLink href={project.walkthrough.href}>
                {t.projects.walkthrough}
              </ExternalLink>
            ) : null}
          </div>
        </header>

        <div className="min-w-0 space-y-8">
          <div>
            <h4 className="eyebrow mb-2">{t.projects.problem}</h4>
            <TypeLine
              as="p"
              text={copy.problem}
              byWord
              charMs={12}
              className="leading-relaxed text-text/90"
            />
          </div>

          <div>
            <h4 className="eyebrow mb-3">{t.projects.built}</h4>
            <ul className="space-y-2.5">
              {copy.built.map((item) => (
                <li
                  key={item}
                  className="relative pl-4 leading-relaxed text-text/90 before:absolute before:left-0 before:top-[0.7em] before:size-1 before:rounded-full before:bg-border"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="eyebrow mb-3">{t.projects.decisions}</h4>
            <ul className="space-y-2.5">
              {copy.decisions.map((item) => (
                <li
                  key={item}
                  className="relative pl-4 leading-relaxed text-text/90 before:absolute before:left-0 before:top-[0.7em] before:size-1 before:rounded-full before:bg-border"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="eyebrow mb-3">{t.projects.stack}</h4>
            <ul className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <li
                  key={tech}
                  className="border border-border px-2.5 py-1 font-mono text-xs tracking-wide text-muted"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          {project.videoSrc || project.walkthrough ? (
            <div>
              <h4 className="eyebrow mb-3">{t.projects.walkthrough}</h4>
              {project.videoSrc ? (
                <figure className="overflow-hidden border border-border bg-bg-elevated">
                  <video
                    className="aspect-video h-auto w-full bg-text/5"
                    controls
                    preload="none"
                    playsInline
                    poster={project.walkthrough?.poster}
                  >
                    <source src={project.videoSrc} type="video/mp4" />
                  </video>
                  <figcaption className="border-t border-border px-3 py-2 font-mono text-[0.7rem] tracking-wide text-muted">
                    {t.projects.walkthroughCaption}
                  </figcaption>
                </figure>
              ) : project.walkthrough ? (
                <a
                  href={project.walkthrough.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/video block overflow-hidden border border-border bg-bg-elevated transition-colors duration-200 hover:border-text/30"
                >
                  {project.walkthrough.poster ? (
                    <Image
                      src={project.walkthrough.poster}
                      alt={t.projects.walkthroughCaption}
                      width={960}
                      height={540}
                      className="aspect-video h-auto w-full object-cover"
                      loading="lazy"
                    />
                  ) : null}
                  <span className="flex items-center justify-between gap-3 border-t border-border px-3 py-2.5 text-sm text-text">
                    <span className="font-medium">{t.projects.walkthrough}</span>
                    <ArrowUpRight
                      className="size-4 shrink-0 text-muted transition-colors duration-200 group-hover/video:text-accent"
                      aria-hidden
                    />
                  </span>
                  <span className="block border-t border-border px-3 py-2 font-mono text-[0.7rem] tracking-wide text-muted">
                    {t.projects.walkthroughCaption}
                  </span>
                </a>
              ) : null}
            </div>
          ) : null}

          {project.images.length > 0 ? (
            <div>
              <h4 className="eyebrow mb-3">{t.projects.screenshots}</h4>
              <div className="grid gap-4 sm:grid-cols-2">
                {project.images.map((image) => (
                  <figure
                    key={image.src}
                    className="overflow-hidden border border-border bg-bg-elevated"
                  >
                    <Image
                      src={image.src}
                      alt={copy.imageAlts?.[image.key] ?? project.name}
                      width={960}
                      height={600}
                      className="h-auto w-full object-cover"
                      loading="lazy"
                    />
                    {copy.imageCaptions?.[image.key] ? (
                      <figcaption className="border-t border-border px-3 py-2 font-mono text-[0.7rem] tracking-wide text-muted">
                        {copy.imageCaptions[image.key]}
                      </figcaption>
                    ) : null}
                  </figure>
                ))}
              </div>
            </div>
          ) : copy.notes ? (
            <p className="border border-dashed border-border px-4 py-3 text-sm text-muted">
              {copy.notes}
            </p>
          ) : null}
        </div>
      </div>
    </Reveal>
  );
}
