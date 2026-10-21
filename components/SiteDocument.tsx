import "@/app/globals.css";
import { Barlow_Condensed } from "next/font/google";
import localFont from "next/font/local";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { I18nProvider, SkipLink } from "@/lib/i18n";
import en from "@/lib/locales/en.json";
import es from "@/lib/locales/es.json";
import { siteUrl } from "@/lib/seo";
import type { Locale } from "@/lib/routing";

const display = Barlow_Condensed({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-display", display: "swap" });
const body = localFont({ src: "../app/fonts/GeistVF.woff", variable: "--font-body", display: "swap" });
const mono = localFont({ src: "../app/fonts/GeistMonoVF.woff", variable: "--font-code", display: "swap" });

function getStructuredData(locale: Locale) {
  const messages = locale === "es" ? es : en;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: "Jonathan Rosenblatt",
        url: `${siteUrl}/`,
        image: `${siteUrl}/profileimage.jpg`,
        jobTitle: ["Backend Developer", "Teaching Assistant"],
        nationality: { "@type": "Country", name: "Argentina" },
        address: { "@type": "PostalAddress", addressCountry: "AR", addressLocality: "Buenos Aires" },
        alumniOf: { "@type": "CollegeOrUniversity", name: "Faculty of Engineering, University of Buenos Aires (FIUBA)" },
        description: messages.meta.description,
        knowsAbout: ["TypeScript", "Java Spring", "Python", "NestJS", "Docker", "Algorithms"],
        sameAs: ["https://github.com/Jonathan-R0", "https://www.linkedin.com/in/jonathan-rosenblatt-7b38981b4/"],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: `${siteUrl}/`,
        name: messages.meta.siteName,
        publisher: { "@id": `${siteUrl}/#person` },
        inLanguage: ["en", "es"],
      },
    ],
  };
}

export default function SiteDocument({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: Locale;
}) {
  return (
    <html lang={locale}>
      <body className={`${display.variable} ${body.variable} ${mono.variable}`}>
        <I18nProvider locale={locale}>
          <SkipLink />
          <div className="site-shell">
            <Header />
            {children}
            <Footer />
          </div>
        </I18nProvider>
        <script
          id="schema-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getStructuredData(locale)).replace(/</g, "\\u003c") }}
        />
      </body>
    </html>
  );
}
