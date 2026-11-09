"use client";

import { useLocale } from "./LocaleProvider";

export function SkipLink() {
  const { t } = useLocale();

  return (
    <a
      href="#inicio"
      className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-bg-elevated focus:px-4 focus:py-2 focus:text-sm focus:text-text focus:shadow"
    >
      {t.skipToContent}
    </a>
  );
}
