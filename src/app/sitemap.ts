import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://juancruzmora.dev";

  return [
    {
      url: siteUrl,
      lastModified: "2026-11-09",
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
