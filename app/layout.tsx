import { Metadata } from "next";
import "./globals.css";
import { Manrope } from "next/font/google";
import localFont from "next/font/local";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";

const display = Manrope({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const body = localFont({ src: "./fonts/GeistVF.woff", variable: "--font-body", display: "swap" });
const mono = localFont({ src: "./fonts/GeistMonoVF.woff", variable: "--font-code", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://niyo.com.ar"),
  title: {
    default: "Jonathan Rosenblatt | Argentina-based Backend Developer",
    template: "%s | Jonathan Rosenblatt",
  },
  description:
    "Argentina-based backend developer, Computer Engineer, and teaching assistant for Software Engineering I at FIUBA.",
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
    locale: "es_AR",
    url: "https://niyo.com.ar",
    title: "Jonathan Rosenblatt | Argentina-based Backend Developer",
    description:
      "Argentina-based backend developer, Computer Engineer, and teaching assistant for Software Engineering I at FIUBA.",
    siteName: "Jonathan Rosenblatt Portfolio",
    images: [
      {
        url: "/profileimage.jpg",
        width: 400,
        height: 400,
        alt: "Jonathan Rosenblatt - Argentina-based Backend Developer",
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
        <a className="skip-link" href="#main-content">Skip to content</a>
        <div className="site-shell">
          <Header />
          {children}
          <Footer />
        </div>
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
