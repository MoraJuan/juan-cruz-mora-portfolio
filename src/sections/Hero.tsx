"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { CvDownload } from "@/components/CvDownload";
import { ExternalLink } from "@/components/ExternalLink";
import { useLocale } from "@/components/LocaleProvider";
import { site } from "@/data/site";

export function Hero() {
  const { t } = useLocale();

  return (
    <section
      id="inicio"
      className="border-b border-border pb-6 pt-4 md:pb-8 md:pt-5"
      aria-labelledby="hero-title"
    >
      <div className="container-page">
        <div className="grid gap-5 lg:grid-cols-[minmax(0,1.45fr)_minmax(0,0.7fr)] lg:items-start lg:gap-6">
          <div>
            <p className="eyebrow mb-2">{t.hero.indicator}</p>
            <h1
              id="hero-title"
              className="max-w-2xl text-[clamp(1.7rem,3.6vw,2.35rem)] font-medium leading-[1.2] tracking-tight text-text"
            >
              {t.hero.headline}
            </h1>
            <p className="mt-2.5 max-w-xl text-base leading-relaxed text-muted">
              {t.hero.description}
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              <ButtonLink href="#proyectos">
                {t.hero.viewProjects}
                <ArrowRight className="size-4" aria-hidden />
              </ButtonLink>
              <CvDownload />
            </div>
          </div>

          <aside className="border-t border-border pt-4 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
            <div className="group relative mb-4 aspect-square w-full max-w-[220px] overflow-hidden rounded-full border border-border bg-bg-elevated transition-[border-color,transform] duration-200 ease-out motion-safe:hover:scale-[1.03] motion-safe:hover:border-accent sm:max-w-[240px] lg:max-w-[260px]">
              <Image
                src="/profile.jpg"
                alt="Juan Cruz Mora"
                fill
                priority
                sizes="(min-width: 1024px) 260px, (min-width: 640px) 240px, 220px"
                className="object-cover object-[center_18%] transition-transform duration-200 ease-out motion-safe:group-hover:scale-[1.02]"
              />
            </div>
            <dl className="space-y-2.5">
              <div>
                <dt className="eyebrow">{t.hero.locationLabel}</dt>
                <dd className="mt-0.5 text-sm text-text">{site.location}</dd>
              </div>
              <div>
                <dt className="eyebrow">{t.hero.profileLabel}</dt>
                <dd className="mt-0.5 text-sm text-text">{site.role}</dd>
              </div>
              <div>
                <dt className="eyebrow">{t.hero.linksLabel}</dt>
                <dd className="mt-1 flex flex-wrap gap-x-4 gap-y-2">
                  <ExternalLink href={site.links.github}>GitHub</ExternalLink>
                  <ExternalLink href={site.links.linkedin}>LinkedIn</ExternalLink>
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </div>
    </section>
  );
}
