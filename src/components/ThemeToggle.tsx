"use client";

import { Moon, Sun } from "lucide-react";
import { useLocale } from "./LocaleProvider";
import { useTheme } from "./ThemeProvider";

type ThemeToggleProps = {
  className?: string;
};

export function ThemeToggle({ className = "" }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const { t } = useLocale();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      className={`inline-flex size-9 items-center justify-center rounded-sm border border-border text-muted transition-colors duration-200 hover:border-text/30 hover:text-text ${className}`}
      aria-label={isDark ? t.theme.toLight : t.theme.toDark}
      aria-pressed={isDark}
      onClick={toggleTheme}
    >
      {isDark ? (
        <Sun className="size-4" aria-hidden />
      ) : (
        <Moon className="size-4" aria-hidden />
      )}
    </button>
  );
}
