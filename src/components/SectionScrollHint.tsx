"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { handleHashLinkClick } from "@/lib/scroll-to-hash";

type SectionScrollHintProps = {
  href: string;
  label: string;
  direction?: "down" | "up";
};

export function SectionScrollHint({
  href,
  label,
  direction = "down",
}: SectionScrollHintProps) {
  const Icon = direction === "up" ? ChevronUp : ChevronDown;

  return (
    <a
      href={href}
      className="section-scroll-hint"
      aria-label={label}
      onClick={(event) => handleHashLinkClick(event)}
    >
      <Icon className="size-5" strokeWidth={1.5} aria-hidden />
    </a>
  );
}
