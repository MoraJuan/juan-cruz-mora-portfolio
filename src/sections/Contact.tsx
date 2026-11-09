"use client";

import { ExternalLink } from "@/components/ExternalLink";
import { useLocale } from "@/components/LocaleProvider";
import { Reveal } from "@/components/Reveal";
import { SectionFrame } from "@/components/SectionFrame";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/data/site";

export function Contact() {
  const { t } = useLocale();
  const hasEmail = Boolean(site.links.email && site.links.emailLabel);

  return (
    <SectionFrame
      id="contacto"
      aria-labelledby="contact-title"
      nextHref="#inicio"
      nextLabel={t.scroll.toTop}
      nextDirection="up"
      className="border-t border-border"
    >
      <Reveal>
        <SectionHeading
          id="contact-title"
          eyebrow={t.contact.eyebrow}
          title={t.contact.title}
          description={t.contact.text}
        />
      </Reveal>

      <Reveal className="mt-10 grid gap-8 border-t border-border pt-8 sm:grid-cols-2 lg:grid-cols-4">
        {hasEmail ? (
          <div>
            <p className="eyebrow mb-2">{t.contact.email}</p>
            <a
              href={site.links.email}
              className="text-sm text-text underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent/40"
            >
              {site.links.emailLabel}
            </a>
          </div>
        ) : null}

        <div>
          <p className="eyebrow mb-2">LinkedIn</p>
          <ExternalLink href={site.links.linkedin}>
            /in/juan-cruz-mora
          </ExternalLink>
        </div>

        <div>
          <p className="eyebrow mb-2">GitHub</p>
          <ExternalLink href={site.links.github}>
            github.com/MoraJuan
          </ExternalLink>
        </div>

        <div>
          <p className="eyebrow mb-2">{t.contact.location}</p>
          <p className="text-sm text-text">{site.location}</p>
        </div>
      </Reveal>
    </SectionFrame>
  );
}
