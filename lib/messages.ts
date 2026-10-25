import en from "./locales/en.json";
import es from "./locales/es.json";
import type { Locale } from "./routing";

export type Messages = typeof en;
export interface LocalizedProps {
  locale: Locale;
}

const dictionaries: Record<Locale, Messages> = { en, es };

export function getMessages(locale: Locale): Messages {
  return dictionaries[locale];
}
