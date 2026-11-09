"use client";

import { useLocale } from "./LocaleProvider";

type LanguageToggleProps = {
  className?: string;
};

export function LanguageToggle({ className = "" }: LanguageToggleProps) {
  const { locale, setLocale, t } = useLocale();

  return (
    <div
      className={`inline-flex items-center border border-border font-mono text-xs tracking-wide ${className}`}
      role="group"
      aria-label={t.lang.switchTo}
    >
      <button
        type="button"
        className={`px-2.5 py-1.5 transition-colors duration-200 ${
          locale === "es"
            ? "bg-text text-bg"
            : "bg-transparent text-muted hover:text-text"
        }`}
        aria-pressed={locale === "es"}
        onClick={() => setLocale("es")}
      >
        {t.lang.es}
      </button>
      <button
        type="button"
        className={`px-2.5 py-1.5 transition-colors duration-200 ${
          locale === "en"
            ? "bg-text text-bg"
            : "bg-transparent text-muted hover:text-text"
        }`}
        aria-pressed={locale === "en"}
        onClick={() => setLocale("en")}
      >
        {t.lang.en}
      </button>
    </div>
  );
}
