import { en } from "./en";
import { es } from "./es";
import type { Dictionary, Locale } from "./types";

export type { Dictionary, Locale, ProjectCopy } from "./types";

export const dictionaries: Record<Locale, Dictionary> = {
  es,
  en,
};

export const defaultLocale: Locale = "es";

export function isLocale(value: string | null | undefined): value is Locale {
  return value === "es" || value === "en";
}
