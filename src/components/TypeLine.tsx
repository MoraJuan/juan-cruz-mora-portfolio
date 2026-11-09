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
  /** Base ms per character (titles ~16–20). */
  charMs?: number;
  /** Start on mount (above the fold). */
  eager?: boolean;
  /** Word units for longer leads — steadier rhythm. */
  byWord?: boolean;
} & Omit<HTMLAttributes<HTMLElement>, "children">;

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function splitUnits(text: string, byWord: boolean) {
  if (!byWord) return Array.from(text);
  return text.split(/(\s+)/).filter((part) => part.length > 0);
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
  const playedRef = useRef(false);
  const [started, setStarted] = useState(false);
  const [visible, setVisible] = useState("");
  const [done, setDone] = useState(false);
  const [instant, setInstant] = useState(false);

  useEffect(() => {
    playedRef.current = false;
    setVisible("");
    setDone(false);
    setStarted(false);
    setInstant(false);
  }, [text]);

  useEffect(() => {
    const node = rootRef.current;
    if (!node || playedRef.current) return;

    if (prefersReducedMotion()) {
      playedRef.current = true;
      setInstant(true);
      setVisible(text);
      setDone(true);
      setStarted(true);
      return;
    }

    const start = () => {
      if (playedRef.current) return;
      playedRef.current = true;
      setStarted(true);
    };

    if (eager) {
      start();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0) {
          start();
          observer.disconnect();
        }
      },
      { threshold: [0, 0.05, 0.15], rootMargin: "0px 0px -1% 0px" },
    );

    observer.observe(node);

    const rect = node.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.96 && rect.bottom > 40) {
      start();
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

    const units = splitUnits(text, byWord);
    const stepMs = byWord
      ? Math.min(44, Math.max(24, charMs * 1.9))
      : Math.min(26, Math.max(14, charMs));

    let unitIndex = 0;
    let raf = 0;
    let lastTick = performance.now();
    setVisible("");

    const tick = (now: number) => {
      const elapsed = now - lastTick;
      if (elapsed >= stepMs) {
        const steps = Math.max(1, Math.floor(elapsed / stepMs));
        unitIndex = Math.min(units.length, unitIndex + steps);
        lastTick += steps * stepMs;
        setVisible(units.slice(0, unitIndex).join(""));
      }

      if (unitIndex >= units.length) {
        setDone(true);
        return;
      }
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, instant, done, text, charMs, byWord]);

  const classes = ["type-line", className].filter(Boolean).join(" ");

  // Finished / reduced-motion: one real text node (no ghost layers).
  if (done || instant) {
    return (
      <Tag ref={rootRef as never} className={classes} {...rest}>
        {text}
      </Tag>
    );
  }

  return (
    <Tag
      ref={rootRef as never}
      className={classes}
      {...rest}
      aria-label={text}
    >
      <span className="type-line__seo">{text}</span>
      <span className="type-line__visual" aria-hidden="true">
        <span className="type-line__spacer">{text}</span>
        <span className="type-line__typed">
          {visible}
          <span
            className={`type-caret${started && !done ? " is-on" : ""}`}
          />
        </span>
      </span>
    </Tag>
  );
}
