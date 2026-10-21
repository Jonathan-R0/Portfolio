"use client";

import { useI18n, type Locale } from "@/lib/i18n";

export default function LanguageSwitcher() {
  const { locale, messages, setLocale } = useI18n();
  return <div className="language-switcher" role="group" aria-label={messages.common.language}>
    {(["es", "en"] as Locale[]).map((language) => <button key={language} type="button" lang={language} aria-label={language === "es" ? "Español" : "English"} aria-pressed={locale === language} onClick={() => { if (language !== locale) setLocale(language); }}>{language.toUpperCase()}</button>)}
  </div>;
}
