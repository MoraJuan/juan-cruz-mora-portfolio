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
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
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
      <div className="container-page flex h-14 items-center justify-between gap-4 md:h-16">
        <Link
          href="#inicio"
          className="shrink-0 text-[0.98rem] font-semibold uppercase tracking-[0.06em] text-text md:text-[1.05rem]"
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

        <div className="flex items-center gap-2 lg:hidden">
          <CvDownload className="!py-2" />
          <LanguageToggle />
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-sm border border-border text-text"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? t.nav.menuClose : t.nav.menuOpen}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-border bg-bg lg:hidden"
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
          </nav>
        </div>
      ) : null}
    </header>
  );
}
