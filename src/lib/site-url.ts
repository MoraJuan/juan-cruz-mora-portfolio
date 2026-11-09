import { site } from "@/data/site";

/** Canonical site origin used by metadata, sitemap, and structured data. */
export function getSiteUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL ?? "https://juancruzmora.dev";
}

export const siteDescriptionEs =
  "Portfolio de Juan Cruz Mora, software developer en San Juan, Argentina. Backend, APIs, bases de datos e interfaces web.";

export const siteDescriptionEn =
  "Portfolio of Juan Cruz Mora, software developer based in San Juan, Argentina. Backend, APIs, databases, and web interfaces.";

export const defaultTitle = `${site.name} — Software Developer`;
