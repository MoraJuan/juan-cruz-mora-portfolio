"use client";

import { ArrowUpRight, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ExternalLink } from "@/components/ExternalLink";
import { useLocale } from "@/components/LocaleProvider";
import type { Project } from "@/lib/types";

type ProjectModalProps = {
  project: Project;
  onClose: () => void;
};

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const { t } = useLocale();
  const copy = t.projects.items[project.id];
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !copy) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab" || !panelRef.current) return;
      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])',
      );
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [mounted, copy, onClose]);

  if (!copy || !mounted) return null;

  return createPortal(
    <div className="fixed inset-0 z-[80] flex items-end justify-center p-0 sm:items-center sm:p-6">
      <button
        type="button"
        className="absolute inset-0 bg-text/45 backdrop-blur-[2px]"
        aria-label={t.projects.close}
        onClick={onClose}
      />

      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative z-[1] flex max-h-[92dvh] w-full max-w-3xl flex-col overflow-hidden border border-border bg-bg-elevated text-text shadow-[0_24px_80px_-24px_rgba(0,0,0,0.45)] sm:max-h-[88dvh] sm:rounded-sm"
      >
        <div className="flex items-start justify-between gap-4 border-b border-border px-5 py-4 md:px-6">
          <div className="min-w-0">
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              {project.year ? (
                <span className="font-mono text-xs tracking-wider text-muted">
                  {project.year}
                </span>
              ) : null}
              <span className="font-mono text-xs tracking-wider text-accent">
                {t.projects.status[project.status]}
              </span>
            </div>
            <h3
              id={titleId}
              className="mt-1 text-xl font-medium tracking-tight text-text md:text-2xl"
            >
              {project.name}
            </h3>
            <p className="mt-1 text-sm leading-relaxed text-muted">
              {copy.tagline}
            </p>
          </div>

          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="inline-flex size-10 shrink-0 items-center justify-center border border-border text-text transition-colors hover:border-text/40 hover:bg-bg"
            aria-label={t.projects.close}
          >
            <X className="size-5" aria-hidden />
          </button>
        </div>

        <div className="min-h-0 flex-1 space-y-8 overflow-y-auto overscroll-contain px-5 py-6 md:px-6">
          <div className="flex flex-wrap gap-x-4 gap-y-2">
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

          <ul className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <li
                key={tech}
                className="border border-border bg-bg px-2.5 py-1 font-mono text-xs tracking-wide text-muted"
              >
                {tech}
              </li>
            ))}
          </ul>

          <div>
            <h4 className="eyebrow mb-2">{t.projects.problem}</h4>
            <p className="leading-relaxed text-text">{copy.problem}</p>
          </div>

          <div>
            <h4 className="eyebrow mb-3">{t.projects.built}</h4>
            <ul className="space-y-2.5">
              {copy.built.map((item) => (
                <li
                  key={item}
                  className="relative pl-4 leading-relaxed text-text before:absolute before:left-0 before:top-[0.7em] before:size-1 before:rounded-full before:bg-border"
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
                  className="relative pl-4 leading-relaxed text-text before:absolute before:left-0 before:top-[0.7em] before:size-1 before:rounded-full before:bg-border"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {project.videoSrc || project.walkthrough ? (
            <div>
              <h4 className="eyebrow mb-3">{t.projects.walkthrough}</h4>
              {project.videoSrc ? (
                <figure className="overflow-hidden border border-border bg-bg">
                  <video
                    className="aspect-video h-auto w-full bg-text/5"
                    controls
                    preload="metadata"
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
                  className="group/video block overflow-hidden border border-border bg-bg transition-colors duration-200 hover:border-text/30"
                >
                  {project.walkthrough.poster ? (
                    <Image
                      src={project.walkthrough.poster}
                      alt={t.projects.walkthroughCaption}
                      width={960}
                      height={540}
                      className="aspect-video h-auto w-full object-cover"
                    />
                  ) : null}
                  <span className="flex items-center justify-between gap-3 border-t border-border px-3 py-2.5 text-sm text-text">
                    <span className="font-medium">{t.projects.walkthrough}</span>
                    <ArrowUpRight
                      className="size-4 shrink-0 text-muted transition-colors duration-200 group-hover/video:text-accent"
                      aria-hidden
                    />
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
                    className="overflow-hidden border border-border bg-bg"
                  >
                    <Image
                      src={image.src}
                      alt={copy.imageAlts?.[image.key] ?? project.name}
                      width={960}
                      height={600}
                      className="h-auto w-full object-cover"
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
    </div>,
    document.body,
  );
}
