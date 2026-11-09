"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/data/site";
import { CvDownload } from "./CvDownload";
import { LanguageToggle } from "./LanguageToggle";
import { useLocale } from "./LocaleProvider";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const { t } = useLocale();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { label: t.nav.home, href: "#inicio" },
    { label: t.nav.about, href: "#sobre-mi" },
    { label: t.nav.projects, href: "#proyectos" },
    { label: t.nav.experience, href: "#experiencia" },
    { label: t.nav.contact, href: "#contacto" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("nav-open", open);
    return () => {
      document.documentElement.classList.remove("nav-open");
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-200 ${
        scrolled || open
          ? "border-border bg-bg/90 backdrop-blur-md"
          : "border-transparent bg-bg/70 backdrop-blur-sm"
      }`}
    >
      <div className="container-page flex h-14 min-w-0 items-center justify-between gap-3 md:h-16 md:gap-4">
        <Link
          href="#inicio"
          className="min-w-0 truncate text-[0.85rem] font-semibold uppercase tracking-[0.05em] text-text sm:text-[0.98rem] sm:tracking-[0.06em] md:text-[1.05rem]"
          onClick={() => setOpen(false)}
        >
          {site.name}
        </Link>

        <nav
          className="hidden items-center gap-6 lg:flex"
          aria-label={t.nav.primary}
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted transition-colors duration-200 hover:text-text"
            >
              {item.label}
            </a>
          ))}
          <CvDownload className="!py-2" />
          <LanguageToggle />
          <ThemeToggle />
        </nav>

        <button
          type="button"
          className="inline-flex size-10 shrink-0 items-center justify-center rounded-sm border border-border text-text lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? t.nav.menuClose : t.nav.menuOpen}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
        </button>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="max-h-[min(100dvh-3.5rem,100%)] overflow-y-auto border-t border-border bg-bg lg:hidden"
        >
          <nav
            className="container-page flex flex-col gap-1 py-4"
            aria-label={t.nav.mobile}
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-sm px-2 py-3 text-base text-text"
                onClick={() => setOpen(false)}
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
