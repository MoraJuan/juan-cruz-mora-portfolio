"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { CvDownload } from "@/components/CvDownload";
import { useLocale } from "@/components/LocaleProvider";
import SpecularButton from "@/components/SpecularButton";
import { getSpecularThemeProps } from "@/components/specularTheme";
import { Reveal } from "@/components/Reveal";
import { SectionFrame } from "@/components/SectionFrame";
import StrokeText from "@/components/StrokeText";
import { useTheme } from "@/components/ThemeProvider";
import { TypeLine } from "@/components/TypeLine";
import { site } from "@/data/site";
import { scrollToHash } from "@/lib/scroll-to-hash";

function GitHubLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      className={className}
      fill="currentColor"
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58v-2.23c-3.34.73-4.03-1.42-4.03-1.42-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.08 1.85 1.24 1.85 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.66-.3-5.46-1.33-5.46-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.82.58A12 12 0 0 0 24 12c0-6.63-5.37-12-12-12Z" />
    </svg>
  );
}

function LinkedInLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      className={className}
      fill="currentColor"
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0Z" />
    </svg>
  );
}

export function Hero() {
  const { t } = useLocale();
  const { theme } = useTheme();
  const specularProps = getSpecularThemeProps(theme);

  return (
    <SectionFrame
      id="inicio"
      aria-labelledby="hero-title"
      nextHref="#sobre-mi"
      nextLabel={t.scroll.toAbout}
      className="border-b border-border"
    >
      <div className="grid min-w-0 gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-end lg:gap-14">
        <div className="min-w-0">
          <div className="font-display w-full min-w-0 max-w-full text-text">
            <StrokeText
              text={site.name}
              strokeColor="var(--text)"
              fillColor="var(--text)"
              strokeStyle="solid"
              strokeWidth={2.2}
              drawDuration={1.2}
              fillDelay={0.05}
              stagger={0.04}
              fillMode="wipe"
              wipeFrom="left"
              trigger="mount"
              hoverRedraw
              fontFamily="inherit"
              fontSize={72}
              fontWeight={600}
              letterSpacing={-2.5}
            />
          </div>

          <TypeLine
            as="h1"
            id="hero-title"
            text={t.hero.headline}
            eager
            charMs={22}
            className="mt-2 max-w-xl text-[clamp(1.15rem,2.4vw,1.45rem)] font-medium leading-snug tracking-tight text-text"
          />

          <Reveal delay={180}>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-muted">
              {t.hero.description}
            </p>
          </Reveal>

          <Reveal delay={260}>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <SpecularButton
                {...specularProps}
                onClick={() => scrollToHash("#proyectos")}
              >
                {t.hero.viewProjects}
                <ArrowRight className="size-4" aria-hidden />
              </SpecularButton>
              <CvDownload specular />
            </div>
          </Reveal>

          <Reveal delay={340}>
            <p className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-text">
              <a
                href={site.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors duration-200 hover:text-accent"
              >
                <GitHubLogo className="size-4 shrink-0" />
                <span className="underline decoration-border underline-offset-4 hover:decoration-accent/50">
                  GitHub
                </span>
              </a>
              <a
                href={site.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors duration-200 hover:text-accent"
              >
                <LinkedInLogo className="size-4 shrink-0" />
                <span className="underline decoration-border underline-offset-4 hover:decoration-accent/50">
                  LinkedIn
                </span>
              </a>
            </p>
          </Reveal>
        </div>

        <Reveal as="aside" className="min-w-0" delay={220}>
          <figure className="ml-0 w-[min(100%,240px)] sm:w-[min(100%,280px)] lg:ml-auto lg:w-[min(100%,320px)]">
            <div className="relative aspect-square w-full overflow-hidden rounded-full border border-border bg-bg-elevated">
              <Image
                src="/profile.jpg"
                alt="Juan Cruz Mora, software developer based in San Juan, Argentina"
                fill
                priority
                sizes="(min-width: 1024px) 320px, (min-width: 640px) 280px, 240px"
                className="object-cover object-[center_18%]"
              />
            </div>
            <figcaption className="mt-3 text-center font-mono text-xs tracking-wide text-muted lg:text-right">
              {t.hero.photoCaption}
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </SectionFrame>
  );
}
