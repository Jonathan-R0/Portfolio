import { Metadata } from "next";
import "./globals.css";
import { Inter, Roboto_Mono } from "next/font/google";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://niyo.com.ar"),
  title: {
    default: "Jonathan Rosenblatt | Argentina-based Backend Developer",
    template: "%s | Jonathan Rosenblatt",
  },
  description:
    "Computer Engineering student at FIUBA and Argentina-based software developer specializing in TypeScript, Java Spring, Python, and more.",
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
      "Computer Engineering student at FIUBA and Argentina-based software developer specializing in TypeScript, Java Spring, Python, and more.",
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
      <body className={`${inter.variable} ${robotoMono.variable} font-sans`}>
        {children}
        <Script id="schema-structured-data" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Jonathan Rosenblatt",
              "url": "https://niyo.com.ar",
              "jobTitle": "Software Developer",
              "nationality": "Argentinian",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "Argentina",
                "addressLocality": "Buenos Aires"
              },
              "worksFor": {
                "@type": "Organization",
                "name": "FIUBA"
              },
              "description": "Argentina-based Computer Engineering student and software developer specializing in backend technologies.",
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
