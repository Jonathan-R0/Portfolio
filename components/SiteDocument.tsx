import "@/app/globals.css";
import { Barlow_Condensed } from "next/font/google";
import localFont from "next/font/local";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import LocaleNavigation from "@/components/LocaleNavigation";
import { I18nProvider, SkipLink } from "@/lib/i18n";
import { getMessages } from "@/lib/messages";
import { siteUrl } from "@/lib/seo";
import type { Locale } from "@/lib/routing";
import { themeInitScript } from "@/lib/theme";
import { profileLinks } from "@/lib/profile";

const display = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});
const body = localFont({
  src: "../app/fonts/GeistVF.woff",
  variable: "--font-body",
  display: "swap",
});
const mono = localFont({
  src: "../app/fonts/GeistMonoVF.woff",
  variable: "--font-code",
  display: "swap",
});

function getStructuredData(locale: Locale) {
  const messages = getMessages(locale);
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
        address: {
          "@type": "PostalAddress",
          addressCountry: "AR",
          addressLocality: "Buenos Aires",
        },
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: "Faculty of Engineering, University of Buenos Aires (FIUBA)",
        },
        description: messages.meta.description,
        knowsAbout: [
          "TypeScript",
          "Java Spring",
          "Python",
          "NestJS",
          "Docker",
          "Algorithms",
        ],
        sameAs: [profileLinks.github, profileLinks.linkedin],
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
    <html lang={locale} data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className={`${display.variable} ${body.variable} ${mono.variable}`}>
        <script
          id="theme-init"
          dangerouslySetInnerHTML={{ __html: themeInitScript }}
        />
        <I18nProvider locale={locale} messages={getMessages(locale)}>
          <LocaleNavigation />
          <SkipLink />
          <div className="site-shell">
            <Header />
            {children}
            <Footer locale={locale} />
          </div>
          <ScrollToTop />
        </I18nProvider>
        <script
          id="schema-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getStructuredData(locale)).replace(
              /</g,
              "\\u003c",
            ),
          }}
        />
      </body>
    </html>
  );
}
