"use client";

import { useLocale } from "@/components/LocaleProvider";
import { Reveal } from "@/components/Reveal";
import { SectionFrame } from "@/components/SectionFrame";
import { SectionHeading } from "@/components/SectionHeading";
import { skillGroups } from "@/data/skills";

export function Experience() {
  const { t } = useLocale();

  const roles = [
    {
      key: "freelance",
      period: "2024 — Actualidad / Present",
      ...t.experience.roles.freelance,
    },
    {
      key: "tecnico",
      period: "2022 — 2024",
      ...t.experience.roles.tecnico,
    },
  ];

  return (
    <SectionFrame
      id="experiencia"
      aria-labelledby="experience-title"
      center={false}
      nextHref="#contacto"
      nextLabel={t.scroll.toContact}
      className="border-t border-border"
    >
      <Reveal>
        <SectionHeading
          id="experience-title"
          eyebrow={t.experience.eyebrow}
          title={t.experience.title}
          description={t.experience.description}
        />
      </Reveal>

      <Reveal className="mb-6">
        <h3 className="eyebrow">{t.experience.skills}</h3>
      </Reveal>

      <div className="mb-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {skillGroups.map((group) => (
          <Reveal key={group.id} className="border-t border-border pt-5">
            <h4 className="text-sm font-medium tracking-tight text-text">
              {t.experience.skillGroups[
                group.id as keyof typeof t.experience.skillGroups
              ] ?? group.title}
            </h4>
            <ul className="mt-4 space-y-2">
              {group.items.map((item) => (
                <li
                  key={`${group.id}-${item.name}`}
                  className="text-sm leading-relaxed text-text/90"
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>

      <Reveal className="mb-14">
        <h3 className="eyebrow mb-6">{t.experience.trajectory}</h3>
        <ol className="space-y-0 border-t border-border">
          {roles.map((item) => (
            <li
              key={item.key}
              className="grid gap-2 border-b border-border py-6 md:grid-cols-[12rem_minmax(0,1fr)] md:gap-10"
            >
              <p className="font-mono text-xs tracking-wide text-muted md:pt-1">
                {item.key === "freelance"
                  ? item.period.split(" / ")[0]
                  : item.period}
              </p>
              <div>
                <p className="font-medium text-text">
                  {item.role}
                  <span className="text-muted"> · {item.org}</span>
                </p>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
                  {item.summary}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Reveal>

      <Reveal className="border border-border bg-bg-elevated p-6 md:p-8">
        <h3 className="eyebrow mb-4">{t.experience.educationTitle}</h3>
        <p className="text-lg font-medium tracking-tight text-text">
          {t.experience.education.degree}
        </p>
        <p className="mt-1 text-sm text-muted">
          {t.experience.education.institution}
        </p>
        <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs tracking-wide text-muted">
          <span>{t.experience.education.period}</span>
          <span className="text-accent">{t.experience.education.status}</span>
        </div>
      </Reveal>
    </SectionFrame>
  );
}
