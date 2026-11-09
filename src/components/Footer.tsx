"use client";

import { useLocale } from "@/components/LocaleProvider";
import { site } from "@/data/site";

export function Footer() {
  const { t } = useLocale();

  return (
    <footer className="border-t border-border py-8">
      <div className="container-page flex flex-col gap-3 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © 2026 {site.name}
        </p>
        <p className="font-mono text-xs tracking-wide">{t.footer.location}</p>
      </div>
    </footer>
  );
}
