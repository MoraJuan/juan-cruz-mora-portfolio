import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { LocaleProvider } from "@/components/LocaleProvider";
import { Navbar } from "@/components/Navbar";
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

const sans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const mono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
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
    "Software Developer",
    "Portfolio",
    "Backend",
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
    { media: "(prefers-color-scheme: light)", color: "#F7F7F5" },
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
      className={`${sans.variable} ${mono.variable} h-full`}
      suppressHydrationWarning
    >
      <head>
        <ThemeScript />
        <JsonLd />
      </head>
      <body className="flex min-h-full max-w-full flex-col overflow-x-hidden bg-bg font-sans text-text antialiased">
        <ThemeProvider>
          <LocaleProvider>
            <SkipLink />
            <Navbar />
            <main id="contenido" className="flex-1 pt-14 md:pt-16">
              {children}
            </main>
            <Footer />
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
