"use client";

import { ChevronDown } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import { site } from "@/data/site";
import { useLocale } from "./LocaleProvider";

type CvDownloadProps = {
  variant?: "primary" | "secondary";
  className?: string;
  fullWidth?: boolean;
};

const variants = {
  primary:
    "bg-accent text-white hover:bg-accent-hover border border-accent",
  secondary:
    "bg-transparent text-text border border-border hover:border-text/40 hover:bg-bg-elevated",
};

export function CvDownload({
  variant = "secondary",
  className = "",
  fullWidth = false,
}: CvDownloadProps) {
  const { t } = useLocale();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div
      ref={rootRef}
      className={`relative inline-flex ${fullWidth ? "w-full" : ""}`}
    >
      <button
        type="button"
        className={[
          "inline-flex items-center justify-center gap-2 rounded-sm px-4 py-2.5 text-sm font-medium transition-colors duration-200",
          variants[variant],
          fullWidth ? "w-full" : "",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((value) => !value)}
      >
        {t.cv.download}
        <ChevronDown
          className={`size-3.5 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          aria-hidden
        />
      </button>

      {open ? (
        <div
          id={menuId}
          role="menu"
          aria-label={t.cv.download}
          className={`absolute top-[calc(100%+0.35rem)] z-50 border border-border bg-bg-elevated py-1 shadow-sm ${
            fullWidth ? "left-0 right-0" : "right-0 min-w-[11.5rem]"
          }`}
        >
          <a
            role="menuitem"
            href={site.links.cvEs}
            download
            className="block px-3 py-2 text-sm text-text transition-colors duration-200 hover:bg-bg"
            onClick={() => setOpen(false)}
          >
            <span className="font-mono text-[0.65rem] tracking-wide text-muted">
              ES
            </span>
            <span className="ml-2">{t.cv.es}</span>
          </a>
          <a
            role="menuitem"
            href={site.links.cvEn}
            download
            className="block px-3 py-2 text-sm text-text transition-colors duration-200 hover:bg-bg"
            onClick={() => setOpen(false)}
          >
            <span className="font-mono text-[0.65rem] tracking-wide text-muted">
              EN
            </span>
            <span className="ml-2">{t.cv.en}</span>
          </a>
        </div>
      ) : null}
    </div>
  );
}
