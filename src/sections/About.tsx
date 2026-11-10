"use client";

import { ExternalLink } from "@/components/ExternalLink";
import { useLocale } from "@/components/LocaleProvider";
import { Reveal } from "@/components/Reveal";
import { SectionFrame } from "@/components/SectionFrame";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/data/site";

export function About() {
  const { t } = useLocale();

  return (
    <SectionFrame
      id="sobre-mi"
      aria-labelledby="about-title"
      nextHref="#proyectos"
      nextLabel={t.scroll.toProjects}
      className="border-t border-border"
    >
      <Reveal>
        <SectionHeading
          id="about-title"
          title={t.about.title}
          description={t.about.description}
        />
      </Reveal>

      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.85fr)]">
        <Reveal className="space-y-4">
          {t.about.paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="max-w-2xl text-[1.05rem] leading-relaxed text-text/90"
            >
              {paragraph}
            </p>
          ))}
        </Reveal>

        <Reveal>
          <dl className="space-y-0 border-t border-border">
            {t.about.facts.map((fact) => (
              <div
                key={fact.label}
                className="border-b border-border py-4"
              >
                <dt className="eyebrow">{fact.label}</dt>
                <dd className="mt-1 text-sm leading-relaxed text-text">
                  {fact.value}
                </dd>
              </div>
            ))}
            {site.links.email && site.links.emailLabel ? (
              <div className="border-b border-border py-4">
                <dt className="eyebrow">{t.contact.email}</dt>
                <dd className="mt-1">
                  <a
                    href={site.links.email}
                    className="text-sm text-text underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent/40"
                  >
                    {site.links.emailLabel}
                  </a>
                </dd>
              </div>
            ) : null}
            <div className="border-b border-border py-4">
              <dt className="eyebrow">GitHub</dt>
              <dd className="mt-1">
                <ExternalLink href={site.links.github}>
                  github.com/MoraJuan
                </ExternalLink>
              </dd>
            </div>
            <div className="border-b border-border py-4">
              <dt className="eyebrow">LinkedIn</dt>
              <dd className="mt-1">
                <ExternalLink href={site.links.linkedin}>
                  linkedin.com/in/juan-cruz-mora
                </ExternalLink>
              </dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </SectionFrame>
  );
}
