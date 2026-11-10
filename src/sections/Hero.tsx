"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { CvDownload } from "@/components/CvDownload";
import { ExternalLink } from "@/components/ExternalLink";
import { useLocale } from "@/components/LocaleProvider";
import SpecularButton from "@/components/SpecularButton";
import { getSpecularThemeProps } from "@/components/specularTheme";
import { SectionFrame } from "@/components/SectionFrame";
import TechText from "@/components/TechText";
import { useTheme } from "@/components/ThemeProvider";
import { TypeLine } from "@/components/TypeLine";
import { site } from "@/data/site";
import { scrollToHash } from "@/lib/scroll-to-hash";

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
          <div className="font-display relative h-[3.75rem] w-full max-w-xl text-text sm:h-[4.5rem] lg:h-[5.25rem]">
            <TechText
              text={site.name}
              fontWeight={500}
              fontSize={72}
              letterSpacing={-0.04}
              align="left"
              color="currentColor"
              accentColor="currentColor"
              reveal="letter"
              dashLength={4}
              dashGap={2}
              specks={15}
              intro="none"
              introDuration={2}
              clickKick
              guides={false}
              sweep
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

          <p className="mt-3 max-w-xl text-base leading-relaxed text-muted">
            {t.hero.description}
          </p>

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

          <p className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted">
            <ExternalLink href={site.links.github}>GitHub</ExternalLink>
            <ExternalLink href={site.links.linkedin}>LinkedIn</ExternalLink>
          </p>
        </div>

        <aside className="min-w-0">
          <figure className="ml-0 w-[min(100%,280px)] sm:w-[min(100%,310px)] lg:ml-auto lg:w-[min(100%,360px)]">
            <div className="relative pb-2.5 pr-2.5">
              <div
                className="pointer-events-none absolute bottom-0 right-0 top-2.5 left-2.5 border border-accent/35"
                aria-hidden
              />
              <div className="relative aspect-[4/5] w-full overflow-hidden border border-border bg-bg-elevated">
                <Image
                  src="/profile.jpg"
                  alt="Juan Cruz Mora, software developer based in San Juan, Argentina"
                  fill
                  priority
                  sizes="(min-width: 1024px) 360px, (min-width: 640px) 310px, 280px"
                  className="object-cover object-[center_18%]"
                />
              </div>
            </div>
            <figcaption className="mt-3 font-mono text-xs tracking-wide text-muted">
              {t.hero.photoCaption}
            </figcaption>
          </figure>
        </aside>
      </div>
    </SectionFrame>
  );
}
