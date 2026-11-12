"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "article" | "aside" | "li";
  /** Stagger delay in ms once the block enters view. */
  delay?: number;
};

/**
 * Scroll-triggered soft reveal — same motion language as ChatFab / ThoughtLine:
 * fade + slight rise + blur settle, cubic-bezier(0.22, 1, 0.36, 1).
 */
export function Reveal({
  children,
  className = "",
  as: Tag = "div",
  delay = 0,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) {
      node.classList.add("is-visible");
      return;
    }

    const show = () => {
      node.classList.add("is-visible");
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0) {
          show();
          observer.disconnect();
        }
      },
      { threshold: [0, 0.08, 0.16], rootMargin: "0px 0px -6% 0px" },
    );

    observer.observe(node);

    const rect = node.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.94 && rect.bottom > 48) {
      show();
      observer.disconnect();
    }

    return () => observer.disconnect();
  }, []);

  const style =
    delay > 0
      ? ({ "--reveal-delay": `${delay}ms` } as CSSProperties)
      : undefined;

  return (
    <Tag
      ref={ref as never}
      className={["reveal", className].filter(Boolean).join(" ")}
      style={style}
    >
      {children}
    </Tag>
  );
}
