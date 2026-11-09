"use client";

import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "article" | "li";
};

/** Layout wrapper kept for section structure; motion is handled by TypeLine. */
export function Reveal({
  children,
  className = "",
  as: Tag = "div",
}: RevealProps) {
  return <Tag className={className || undefined}>{children}</Tag>;
}
