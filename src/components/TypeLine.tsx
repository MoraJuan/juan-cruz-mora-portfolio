"use client";

import {
  useEffect,
  useRef,
  useState,
  type ElementType,
  type HTMLAttributes,
} from "react";

type TypeLineProps = {
  text: string;
  as?: ElementType;
  className?: string;
  /** Milliseconds per character (headings). */
  charMs?: number;
  /** Start typing as soon as mounted (hero above the fold). */
  eager?: boolean;
  /** Word-chunk mode for longer copy. */
  byWord?: boolean;
} & Omit<HTMLAttributes<HTMLElement>, "children">;

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function TypeLine({
  text,
  as: Tag = "span",
  className = "",
  charMs = 18,
  eager = false,
  byWord = false,
  ...rest
}: TypeLineProps) {
  const rootRef = useRef<HTMLElement | null>(null);
  const [started, setStarted] = useState(false);
  const [visible, setVisible] = useState("");
  const [done, setDone] = useState(false);
  const [instant, setInstant] = useState(false);

  useEffect(() => {
    setVisible("");
    setDone(false);
    setStarted(false);
    setInstant(false);
  }, [text]);

  useEffect(() => {
    const node = rootRef.current;
    if (!node) return;

    if (prefersReducedMotion()) {
      setInstant(true);
      setVisible(text);
      setDone(true);
      setStarted(true);
      return;
    }

    if (eager) {
      setStarted(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -4% 0px" },
    );

    observer.observe(node);
    // If already in view on mount/locale change, start immediately.
    const rect = node.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.92 && rect.bottom > 0) {
      setStarted(true);
      observer.disconnect();
    }

    return () => observer.disconnect();
  }, [text, eager]);

  useEffect(() => {
    if (!started || instant || done) return;
    if (!text) {
      setDone(true);
      return;
    }

    let index = 0;
    const units = byWord ? text.split(/(\s+)/).filter(Boolean) : [...text];
    const stepMs = byWord ? Math.max(28, charMs * 2.2) : charMs;

    setVisible("");

    const id = window.setInterval(() => {
      index += 1;
      setVisible(units.slice(0, index).join(""));
      if (index >= units.length) {
        window.clearInterval(id);
        setDone(true);
      }
    }, stepMs);

    return () => window.clearInterval(id);
  }, [started, instant, done, text, charMs, byWord]);

  const showCaret = started && !done && !instant;

  return (
    <Tag ref={rootRef as never} className={`type-line ${className}`.trim()} {...rest}>
      <span className="sr-only">{text}</span>
      <span className="type-line__visual" aria-hidden="true">
        <span className="type-line__spacer">{text}</span>
        <span className="type-line__typed">
          {visible}
          {showCaret ? <span className="type-caret" /> : null}
        </span>
      </span>
    </Tag>
  );
}
