import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl().replace(/\/$/, "");

  return [
    {
      url: siteUrl,
      lastModified: new Date("2026-11-09"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
