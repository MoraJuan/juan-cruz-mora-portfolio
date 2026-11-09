"use client";

import { TypeLine } from "@/components/TypeLine";

type SectionHeadingProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="group mb-10 max-w-2xl md:mb-14">
      {eyebrow ? (
        <p className="font-mono text-xs tracking-wider text-muted">{eyebrow}</p>
      ) : null}
      <TypeLine
        as="h2"
        id={id}
        text={title}
        charMs={17}
        className="mt-3 text-2xl font-medium tracking-tight text-text transition-colors duration-200 group-hover:text-accent md:text-[1.75rem]"
      />
      {description ? (
        <TypeLine
          as="p"
          text={description}
          byWord
          charMs={13}
          className="mt-3 text-[1.02rem] leading-relaxed text-muted"
        />
      ) : null}
    </div>
  );
}
