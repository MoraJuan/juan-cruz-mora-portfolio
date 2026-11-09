"use client";

import type { ReactNode } from "react";
import { SectionScrollHint } from "@/components/SectionScrollHint";

type SectionFrameProps = {
  id: string;
  "aria-labelledby"?: string;
  children: ReactNode;
  /** Vertically center short content; use false for tall sections. */
  center?: boolean;
  nextHref?: string;
  nextLabel?: string;
  nextDirection?: "down" | "up";
  className?: string;
};

export function SectionFrame({
  id,
  "aria-labelledby": labelledBy,
  children,
  center = true,
  nextHref,
  nextLabel,
  nextDirection = "down",
  className = "",
}: SectionFrameProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={[
        "section-screen",
        center ? "section-screen--center" : "section-screen--start",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="section-screen__body container-page">{children}</div>
      {nextHref && nextLabel ? (
        <SectionScrollHint
          href={nextHref}
          label={nextLabel}
          direction={nextDirection}
        />
      ) : null}
    </section>
  );
}
