"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { handleHashLinkClick, scrollToHash } from "@/lib/scroll-to-hash";
import { CvDownload } from "./CvDownload";
import GooeyNav from "./GooeyNav";
import { LanguageToggle } from "./LanguageToggle";
import { useLocale } from "./LocaleProvider";
import { useTheme } from "./ThemeProvider";
import { ThemeToggle } from "./ThemeToggle";

const SECTION_IDS = [
  "inicio",
  "sobre-mi",
  "proyectos",
  "experiencia",
  "contacto",
] as const;

export function Navbar() {
  const { t } = useLocale();
  const { theme } = useTheme();
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const navItems = useMemo(
    () => [
      { label: t.nav.home, href: "#inicio" },
      { label: t.nav.about, href: "#sobre-mi" },
      { label: t.nav.projects, href: "#proyectos" },
      { label: t.nav.experience, href: "#experiencia" },
      { label: t.nav.contact, href: "#contacto" },
    ],
    [t],
  );

  useEffect(() => {
    document.documentElement.classList.toggle("nav-open", open);
    return () => {
      document.documentElement.classList.remove("nav-open");
    };
  }, [open]);

  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (node): node is HTMLElement => Boolean(node),
    );
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        const top = visible[0];
        if (!top?.target.id) return;
        const index = SECTION_IDS.indexOf(
          top.target.id as (typeof SECTION_IDS)[number],
        );
        if (index >= 0) setActiveIndex(index);
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0.1, 0.25, 0.5],
      },
    );

    for (const section of sections) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
      <div className="container-page relative flex items-start justify-end pt-4 md:pt-5">
        <div className="pointer-events-auto absolute left-1/2 top-4 hidden max-w-[min(100%,42rem)] -translate-x-1/2 md:top-5 lg:block">
          <GooeyNav
            items={navItems}
            activeIndex={activeIndex}
            onChange={(index, item) => {
              setActiveIndex(index);
              if (item.href) scrollToHash(item.href);
            }}
            theme={theme}
            size="md"
            frame
            particleCount={1}
            spread={28}
            animationTime={550}
            timeVariance={220}
            gooeyness={0.35}
            wobble={0.45}
            hoverEffect
          />
        </div>

        <div className="pointer-events-auto flex items-center gap-2">
          <div className="hidden items-center gap-2 rounded-full border border-border/70 bg-bg/70 px-2 py-1.5 shadow-[0_12px_30px_-18px_rgba(0,0,0,0.55)] backdrop-blur-md lg:flex">
            <CvDownload className="!rounded-full !py-2" />
            <LanguageToggle />
            <ThemeToggle />
          </div>

          <button
            type="button"
            className="inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-border/70 bg-bg/80 text-text shadow-[0_12px_30px_-18px_rgba(0,0,0,0.55)] backdrop-blur-md lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? t.nav.menuClose : t.nav.menuOpen}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? (
              <X className="size-5" aria-hidden />
            ) : (
              <Menu className="size-5" aria-hidden />
            )}
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="pointer-events-auto mx-4 mt-3 max-h-[min(100dvh-5rem,100%)] overflow-y-auto rounded-2xl border border-border/70 bg-bg/95 shadow-[0_22px_44px_-22px_rgba(0,0,0,0.55)] backdrop-blur-md lg:hidden"
        >
          <nav className="flex flex-col gap-1 p-4" aria-label={t.nav.mobile}>
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className={`rounded-xl px-3 py-3 text-base transition-colors ${
                  index === activeIndex
                    ? "bg-accent-soft text-text"
                    : "text-text hover:bg-bg-elevated"
                }`}
                onClick={(event) =>
                  handleHashLinkClick(event, () => {
                    setActiveIndex(index);
                    setOpen(false);
                  })
                }
              >
                {item.label}
              </a>
            ))}

            <div className="mt-3 flex flex-col gap-3 border-t border-border pt-4">
              <div className="flex flex-wrap items-center gap-2">
                <LanguageToggle />
                <ThemeToggle />
              </div>
              <CvDownload fullWidth />
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
