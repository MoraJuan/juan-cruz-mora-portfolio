import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Source_Sans_3, Source_Serif_4 } from "next/font/google";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { LocaleProvider } from "@/components/LocaleProvider";
import { Navbar } from "@/components/Navbar";
import { SiteBackground } from "@/components/SiteBackground";
import { SkipLink } from "@/components/SkipLink";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeScript } from "@/components/theme-script";
import { site } from "@/data/site";
import {
  defaultTitle,
  getSiteUrl,
  siteDescriptionEn,
  siteDescriptionEs,
} from "@/lib/site-url";
import "./globals.css";

const display = Source_Serif_4({
  variable: "--font-display",
  subsets: ["latin"],
});

const sans = Source_Sans_3({
  variable: "--font-sans",
  subsets: ["latin"],
});

const mono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: `%s — ${site.name}`,
  },
  description: siteDescriptionEs,
  applicationName: `${site.name} Portfolio`,
  authors: [{ name: site.name, url: siteUrl }],
  creator: site.name,
  publisher: site.name,
  category: "technology",
  keywords: [
    "Juan Cruz Mora",
    "Full-Stack AI Engineer",
    "Portfolio",
    "Agent orchestration",
    "Full stack",
    "APIs",
    "FastAPI",
    "Next.js",
    "PostgreSQL",
    "San Juan",
    "Argentina",
  ],
  alternates: {
    canonical: "/",
    languages: {
      "es-AR": "/",
      en: "/",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    alternateLocale: ["en_US"],
    url: siteUrl,
    title: defaultTitle,
    description: siteDescriptionEs,
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: siteDescriptionEn,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f7f5" },
    { media: "(prefers-color-scheme: dark)", color: "#121314" },
  ],
  width: "device-width",
  initialScale: 1,
  colorScheme: "light dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${display.variable} ${sans.variable} ${mono.variable} h-full`}
      suppressHydrationWarning
    >
      <head>
        <ThemeScript />
        <JsonLd />
      </head>
      <body className="flex min-h-full max-w-full flex-col overflow-x-clip bg-bg font-sans text-text antialiased">
        <ThemeProvider>
          <LocaleProvider>
            <SiteBackground />
            <SkipLink />
            <Navbar />
            <main id="contenido" className="relative z-10 flex-1 pt-20 md:pt-24">
              {children}
            </main>
            <div className="relative z-10">
              <Footer />
            </div>
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
