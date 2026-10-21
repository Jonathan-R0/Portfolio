import { Metadata } from "next";
import "./globals.css";
import { Barlow_Condensed } from "next/font/google";
import localFont from "next/font/local";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";
import { I18nProvider, SkipLink } from "@/lib/i18n";
import en from "@/lib/locales/en.json";

const display = Barlow_Condensed({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-display", display: "swap" });
const body = localFont({ src: "./fonts/GeistVF.woff", variable: "--font-body", display: "swap" });
const mono = localFont({ src: "./fonts/GeistMonoVF.woff", variable: "--font-code", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://niyo.com.ar"),
  title: {
    default: en.meta.title,
    template: "%s | Jonathan Rosenblatt",
  },
  description:
    en.meta.description,
  keywords: [
    "backend developer",
    "computer engineering",
    "FIUBA",
    "TypeScript",
    "NestJS",
    "Java Spring",
    "Python",
    "portfolio",
    "Jonathan Rosenblatt",
    "software engineer",
    "Argentina developer",
    "Buenos Aires",
    "Latin American tech",
    "Argentinian programmer",
    "South America",
  ],
  authors: [{ name: "Jonathan Rosenblatt" }],
  creator: "Jonathan Rosenblatt",
  publisher: "Jonathan Rosenblatt",
  robots: "index, follow",
  alternates: {
    canonical: "https://niyo.com.ar",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://niyo.com.ar",
    title: en.meta.title,
    description:
      en.meta.description,
    siteName: en.meta.siteName,
    images: [
      {
        url: "/profileimage.jpg",
        width: 400,
        height: 400,
        alt: en.meta.title,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable} ${mono.variable}`}>
        <I18nProvider>
        <SkipLink />
        <div className="site-shell">
          <Header />
          {children}
          <Footer />
        </div>
        </I18nProvider>
        <Script id="schema-structured-data" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Jonathan Rosenblatt",
              "url": "https://niyo.com.ar",
              "jobTitle": ["Software Developer", "Teaching Assistant"],
              "nationality": "Argentinian",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "Argentina",
                "addressLocality": "Buenos Aires"
              },
              "alumniOf": {
                "@type": "CollegeOrUniversity",
                "name": "FIUBA"
              },
              "description": "Argentina-based Computer Engineer, backend developer, and teaching assistant for Software Engineering I at FIUBA.",
              "knowsAbout": ["TypeScript", "Java Spring", "Python", "NestJS", "Docker", "Algorithms"],
              "sameAs": [
                "https://github.com/Jonathan-R0",
                "https://www.linkedin.com/in/jonathan-rosenblatt-7b38981b4/"
              ]
            }
          `}
        </Script>
      </body>
    </html>
  );
}
