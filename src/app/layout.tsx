import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "@/components/Footer";
import { LocaleProvider } from "@/components/LocaleProvider";
import { Navbar } from "@/components/Navbar";
import { SkipLink } from "@/components/SkipLink";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeScript } from "@/components/theme-script";
import { site } from "@/data/site";
import "./globals.css";

const sans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const mono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://juancruzmora.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.name} — Software Developer`,
    template: `%s — ${site.name}`,
  },
  description:
    "Software developer. Backend, APIs, and full stack. San Juan, Argentina.",
  applicationName: site.name,
  authors: [{ name: site.name, url: site.links.github }],
  creator: site.name,
  keywords: [
    "Juan Cruz Mora",
    "Software Developer",
    "Backend",
    "Full Stack",
    "FastAPI",
    "Next.js",
    "PostgreSQL",
    "San Juan",
    "Argentina",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: siteUrl,
    title: `${site.name} — Software Developer`,
    description:
      "Software developer. Backend, APIs, and full stack. San Juan, Argentina.",
    siteName: site.name,
    images: [
      {
        url: "/profile.jpg",
        width: 800,
        height: 800,
        alt: "Juan Cruz Mora",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: `${site.name} — Software Developer`,
    description:
      "Software developer. Backend, APIs, and full stack. San Juan, Argentina.",
  },
  robots: {
    index: true,
    follow: true,
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
      </head>
      <body className="flex min-h-full flex-col bg-bg font-sans text-text antialiased">
        <ThemeProvider>
          <LocaleProvider>
            <SkipLink />
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
