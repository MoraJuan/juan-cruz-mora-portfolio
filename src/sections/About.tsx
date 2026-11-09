"use client";

import { ExternalLink } from "@/components/ExternalLink";
import { useLocale } from "@/components/LocaleProvider";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { TypeLine } from "@/components/TypeLine";
import { site } from "@/data/site";

export function About() {
  const { t } = useLocale();

  return (
    <section
      id="sobre-mi"
      className="section-pad border-t border-border"
      aria-labelledby="about-title"
    >
      <div className="container-page">
        <Reveal>
          <SectionHeading
            id="about-title"
            eyebrow={t.about.eyebrow}
            title={t.about.title}
            description={t.about.description}
          />
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.85fr)]">
          <Reveal className="space-y-4">
            {t.about.paragraphs.map((paragraph, index) =>
              index === 0 ? (
                <TypeLine
                  key={paragraph}
                  as="p"
                  text={paragraph}
                  byWord
                  charMs={11}
                  className="max-w-2xl text-[1.05rem] leading-relaxed text-text/90"
                />
              ) : (
                <p
                  key={paragraph}
                  className="max-w-2xl text-[1.05rem] leading-relaxed text-text/90"
                >
                  {paragraph}
                </p>
              ),
            )}
          </Reveal>

          <Reveal>
            <div className="border border-border bg-bg-elevated p-6">
              <dl className="space-y-5">
                {t.about.facts.map((fact) => (
                  <div key={fact.label}>
                    <dt className="eyebrow">{fact.label}</dt>
                    <dd className="mt-1 text-sm leading-relaxed text-text">
                      {fact.value}
                    </dd>
                  </div>
                ))}
                {site.links.email && site.links.emailLabel ? (
                  <div>
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
                <div>
                  <dt className="eyebrow">GitHub</dt>
                  <dd className="mt-1">
                    <ExternalLink href={site.links.github}>
                      github.com/MoraJuan
                    </ExternalLink>
                  </dd>
                </div>
                <div>
                  <dt className="eyebrow">LinkedIn</dt>
                  <dd className="mt-1">
                    <ExternalLink href={site.links.linkedin}>
                      linkedin.com/in/juan-cruz-mora
                    </ExternalLink>
                  </dd>
                </div>
              </dl>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
