import { site } from "@/data/site";

/** Canonical site origin used by metadata, sitemap, and structured data. */
export function getSiteUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL ?? "https://juancruzmora.dev";
}

export const siteDescriptionEs =
  "Portfolio de Juan Cruz Mora, Full-Stack AI Engineer en San Juan, Argentina. Productos full-stack, APIs e orquestación de agentes.";

export const siteDescriptionEn =
  "Portfolio of Juan Cruz Mora, Full-Stack AI Engineer based in San Juan, Argentina. Full-stack products, APIs, and agent orchestration.";

export const defaultTitle = `${site.name} — Full-Stack AI Engineer`;
