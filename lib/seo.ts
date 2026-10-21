import type { Metadata } from "next";
import en from "./locales/en.json";
import es from "./locales/es.json";
import { locales, localizedPath, pagePaths, stripLocale, type Locale, type PagePath } from "./routing";

export const siteUrl = "https://niyo.com.ar";
export const indexablePaths = locales.flatMap((locale) => pagePaths.map((path) => localizedPath(path, locale)));

export function getPageSeo(messages: typeof en, pathname: string) {
  const path = stripLocale(pathname);
  if (path === "/projects") {
    return { title: messages.meta.projectsTitle, description: messages.meta.projectsDescription };
  }
  if (path === "/aboutme") {
    return { title: messages.meta.aboutTitle, description: messages.meta.aboutDescription };
  }
  return { title: messages.meta.title, description: messages.meta.description };
}

export function createPageMetadata(pathname: PagePath, locale: Locale = "en"): Metadata {
  const messages = locale === "es" ? es : en;
  const { title, description } = getPageSeo(messages, pathname);
  const url = new URL(localizedPath(pathname, locale), siteUrl).href;
  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: url,
      languages: {
        en: new URL(localizedPath(pathname, "en"), siteUrl).href,
        es: new URL(localizedPath(pathname, "es"), siteUrl).href,
        "x-default": new URL(pathname, siteUrl).href,
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "es" ? "es_AR" : "en_US",
      alternateLocale: locale === "es" ? "en_US" : "es_AR",
      url,
      title,
      description,
      siteName: messages.meta.siteName,
      images: [{ url: "/profileimage.jpg", alt: "Jonathan Rosenblatt" }],
    },
    twitter: {
      card: "summary",
      title,
      description,
      images: [{ url: "/profileimage.jpg", alt: "Jonathan Rosenblatt" }],
    },
  };
}

export function createSiteMetadata(locale: Locale): Metadata {
  return {
    ...createPageMetadata("/", locale),
    metadataBase: new URL(siteUrl),
    authors: [{ name: "Jonathan Rosenblatt" }],
    creator: "Jonathan Rosenblatt",
    publisher: "Jonathan Rosenblatt",
    robots: "index, follow",
  };
}
