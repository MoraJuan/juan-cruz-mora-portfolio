"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useLocale } from "@/components/LocaleProvider";
import { Reveal } from "@/components/Reveal";
import SpotlightCard from "@/components/SpotlightCard";
import { useTheme } from "@/components/ThemeProvider";
import type { Project } from "@/lib/types";

const CAROUSEL_MS = 2270;

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
  const images = project.images;
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const mediaRef = useRef<HTMLDivElement | null>(null);
  const hasVideoCover = Boolean(project.videoSrc);
  const canCarousel = !hasVideoCover && images.length > 1;
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    setSlide(0);
  }, [project.id]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !project.videoSrc) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      video.pause();
      return;
    }

    const play = () => {
      void video.play().catch(() => {
        /* Autoplay can be blocked until the tab is visible. */
      });
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) play();
        else video.pause();
      },
      { threshold: 0.35 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [project.videoSrc]);

  useEffect(() => {
    if (!canCarousel) return;

    const root = mediaRef.current;
    if (!root) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    let timer = 0;

    const stop = () => {
      window.clearInterval(timer);
      timer = 0;
    };

    const start = () => {
      if (timer) return;
      timer = window.setInterval(() => {
        setSlide((current) => (current + 1) % images.length);
      }, CAROUSEL_MS);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) start();
        else stop();
      },
      { threshold: 0.35 },
    );

    observer.observe(root);
    return () => {
      stop();
      observer.disconnect();
    };
  }, [canCarousel, images.length]);

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
          {hasVideoCover ? (
            <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-border bg-bg">
              <video
                ref={videoRef}
                className="pointer-events-none absolute inset-0 size-full object-cover object-top transition-transform duration-500 ease-out group-hover/card:scale-[1.03]"
                muted
                loop
                playsInline
                preload="metadata"
                poster={project.walkthrough?.poster}
                aria-hidden
              >
                <source src={project.videoSrc} type="video/mp4" />
              </video>
            </div>
          ) : images.length > 0 ? (
            <div
              ref={mediaRef}
              className="relative aspect-[16/10] w-full overflow-hidden border-b border-border bg-bg"
            >
              {images.map((image, imageIndex) => {
                const active = imageIndex === slide;
                return (
                  <Image
                    key={image.key}
                    src={image.src}
                    alt={copy.imageAlts?.[image.key] ?? project.name}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className={[
                      "object-cover object-top transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/card:scale-[1.03]",
                      active ? "opacity-100" : "opacity-0",
                    ].join(" ")}
                    loading={index < 2 && imageIndex === 0 ? "eager" : "lazy"}
                    aria-hidden={!active}
                  />
                );
              })}

              {canCarousel ? (
                <div
                  className="pointer-events-none absolute inset-x-0 bottom-2.5 flex justify-center gap-1.5"
                  aria-hidden
                >
                  {images.map((image, imageIndex) => (
                    <span
                      key={image.key}
                      className={[
                        "h-1 w-1 rounded-full transition-colors duration-300",
                        imageIndex === slide
                          ? "bg-accent"
                          : "bg-text/35",
                      ].join(" ")}
                    />
                  ))}
                </div>
              ) : null}
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
