"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import en from "./locales/en.json";
import es from "./locales/es.json";

export type Locale = "en" | "es";
export type Messages = typeof en;
const dictionaries: Record<Locale, Messages> = { en, es };
const storageKey = "portfolio.locale.v1";
const isLocale = (value: unknown): value is Locale => value === "en" || value === "es";

export function localizeHref(href: string, locale: Locale) {
  if (!href.startsWith("/") || href.startsWith("//")) return href;
  const url = new URL(href, "https://portfolio.local");
  url.searchParams.set("lang", locale);
  return `${url.pathname}${url.search}${url.hash}`;
}

const I18nContext = createContext<{
  locale: Locale;
  messages: Messages;
  setLocale: (locale: Locale) => void;
}>({ locale: "en", messages: en, setLocale: () => {} });

export function I18nProvider({ children }: { children: ReactNode }) {
  // Match static HTML during hydration, then resolve browser preferences.
  const [locale, updateLocale] = useState<Locale>("en");
  const pathname = usePathname();

  function setLocale(next: Locale) {
    updateLocale(next);
    const url = new URL(window.location.href);
    url.searchParams.set("lang", next);
    window.history.pushState(null, "", `${url.pathname}${url.search}${url.hash}`);
    try { window.localStorage.setItem(storageKey, next); } catch { /* Storage may be blocked. */ }
  }

  useEffect(() => {
    function syncLocale() {
      const query = new URLSearchParams(window.location.search).get("lang");
      let saved: string | null = null;
      try { saved = window.localStorage.getItem(storageKey); } catch { /* Use browser language. */ }
      const next = isLocale(query) ? query : isLocale(saved) ? saved : navigator.language.toLowerCase().startsWith("es") ? "es" : "en";
      updateLocale(next);
      if (isLocale(query)) {
        try { window.localStorage.setItem(storageKey, next); } catch { /* Optional persistence. */ }
      }
    }
    syncLocale();
    window.addEventListener("popstate", syncLocale);
    return () => window.removeEventListener("popstate", syncLocale);
  }, [pathname]);

  useEffect(() => {
    const messages = dictionaries[locale];
    document.documentElement.lang = locale;
    const page = pathname.startsWith("/projects") ? messages.common.projects : pathname.startsWith("/aboutme") ? messages.common.about : null;
    const title = page ? `${page} | Jonathan Rosenblatt` : messages.meta.title;
    function syncMetadata() {
      if (document.title !== title) document.title = title;
      const tags = { 'meta[name="description"]': messages.meta.description, 'meta[property="og:title"]': title, 'meta[property="og:description"]': messages.meta.description, 'meta[property="og:locale"]': locale === "es" ? "es_AR" : "en_US", 'meta[property="og:site_name"]': messages.meta.siteName, 'meta[property="og:image:alt"]': messages.meta.title };
      for (const [selector, content] of Object.entries(tags)) {
        const element = document.querySelector(selector);
        if (element && element.getAttribute("content") !== content) element.setAttribute("content", content);
      }
    }
    syncMetadata();
    // Next may restore static metadata after hydration or client-side navigation.
    // Only write changed values so observing our own changes cannot create a loop.
    const observer = new MutationObserver(syncMetadata);
    observer.observe(document.head, { subtree: true, childList: true, attributes: true, attributeFilter: ["content"] });
    return () => observer.disconnect();
  }, [locale, pathname]);

  return <I18nContext.Provider value={{ locale, messages: dictionaries[locale], setLocale }}>{children}</I18nContext.Provider>;
}

export function useI18n() { return useContext(I18nContext); }

export function SkipLink() {
  const { messages } = useI18n();
  return <a className="skip-link" href="#main-content">{messages.common.skip}</a>;
}
