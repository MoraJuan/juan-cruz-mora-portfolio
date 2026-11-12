import { site } from "@/data/site";
import { getSiteUrl } from "@/lib/site-url";

export function JsonLd() {
  const siteUrl = getSiteUrl();
  const email = site.links.emailLabel;

  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.role,
    url: siteUrl,
    email,
    image: `${siteUrl}/profile.png`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "San Juan",
      addressRegion: "San Juan",
      addressCountry: "AR",
    },
    sameAs: [site.links.github, site.links.linkedin],
    knowsAbout: [
      "Full-stack development",
      "AI engineering",
      "Agent orchestration",
      "APIs",
      "PostgreSQL",
      "FastAPI",
      "Next.js",
      "TypeScript",
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${site.name} — Portfolio`,
    url: siteUrl,
    description:
      "Portfolio profesional de Juan Cruz Mora, Full-Stack AI Engineer.",
    inLanguage: ["es", "en"],
    author: {
      "@type": "Person",
      name: site.name,
      url: siteUrl,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}
