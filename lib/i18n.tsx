"use client";

import { createContext, useContext, useMemo, type ReactNode } from "react";
import type { Messages } from "./messages";
import type { Locale } from "./routing";
import { changeLocale } from "./locale-navigation";

export type { Locale } from "./routing";
export { localizeHref } from "./routing";
export type { Messages } from "./messages";

interface I18nContextValue {
  locale: Locale;
  messages: Messages;
  setLocale: (locale: Locale) => void;
}

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({
  children,
  locale,
  messages,
}: {
  children: ReactNode;
  locale: Locale;
  messages: Messages;
}) {
  const value = useMemo(
    () => ({ locale, messages, setLocale: changeLocale }),
    [locale, messages],
  );
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) throw new Error("useI18n must be used within I18nProvider");
  return context;
}

export function SkipLink() {
  const { messages } = useI18n();
  return (
    <a className="skip-link" href="#main-content">
      {messages.common.skip}
    </a>
  );
}
