"use client";

import { createContext, useContext, useEffect, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import en from "./locales/en.json";
import es from "./locales/es.json";
import { legacyLocaleHref, localizeHref, type Locale } from "./routing";

export type { Locale } from "./routing";
export { localizeHref } from "./routing";
export type Messages = typeof en;
const dictionaries: Record<Locale, Messages> = { en, es };
const scrollKey = "portfolio.locale-scroll.v1";

const I18nContext = createContext<{
  locale: Locale;
  messages: Messages;
  setLocale: (locale: Locale) => void;
}>({ locale: "en", messages: en, setLocale: () => {} });

export function I18nProvider({ children, locale }: { children: ReactNode; locale: Locale }) {
  const pathname = usePathname();

  function setLocale(next: Locale) {
    const url = new URL(window.location.href);
    const href = localizeHref(`${url.pathname}${url.search}${url.hash}`, next);
    if (href === `${url.pathname}${url.search}${url.hash}`) return;
    try {
      window.sessionStorage.setItem(scrollKey, JSON.stringify({ href, x: window.scrollX, y: window.scrollY }));
    } catch { /* The destination still works without scroll persistence. */ }
    // Crossing language root layouts requires a full document navigation.
    window.location.assign(href);
  }

  useEffect(() => {
    const current = `${window.location.pathname}${window.location.search}${window.location.hash}`;
    const legacy = legacyLocaleHref(current);
    if (legacy && legacy !== current) {
      window.location.replace(legacy);
      return;
    }
    // The route is authoritative: never replace a shared URL's language with
    // browser/storage preferences, or rewrite server-rendered SEO metadata.
    let frame: number | undefined;
    try {
      const saved = window.sessionStorage.getItem(scrollKey);
      window.sessionStorage.removeItem(scrollKey);
      const position = saved ? JSON.parse(saved) : null;
      if (position?.href === current && Number.isFinite(position.x) && Number.isFinite(position.y)) {
        frame = window.requestAnimationFrame(() => window.scrollTo({ left: position.x, top: position.y, behavior: "instant" }));
      }
    } catch { /* Storage is optional. */ }
    return () => { if (frame !== undefined) window.cancelAnimationFrame(frame); };
  }, [pathname]);

  return <I18nContext.Provider value={{ locale, messages: dictionaries[locale], setLocale }}>{children}</I18nContext.Provider>;
}

export function useI18n() { return useContext(I18nContext); }

export function SkipLink() {
  const { messages } = useI18n();
  return <a className="skip-link" href="#main-content">{messages.common.skip}</a>;
}
