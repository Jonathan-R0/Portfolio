export type Locale = "en" | "es";
export const locales = ["en", "es"] as const;
export const pagePaths = ["/", "/projects", "/aboutme"] as const;
export type PagePath = typeof pagePaths[number];

export function stripLocale(pathname: string) {
  const path = pathname.replace(/\/+$/, "") || "/";
  return path === "/es" ? "/" : path.startsWith("/es/") ? path.slice(3) : path;
}

export function localizedPath(pathname: string, locale: Locale) {
  const path = stripLocale(pathname);
  const localized = locale === "es" ? (path === "/" ? "/es" : `/es${path}`) : path;
  return localized === "/" ? "/" : `${localized}/`;
}

export function localizeHref(href: string, locale: Locale) {
  if (!href.startsWith("/") || href.startsWith("//")) return href;
  const url = new URL(href, "https://portfolio.local");
  if (!pagePaths.some((path) => path === stripLocale(url.pathname))) return href;
  url.pathname = localizedPath(url.pathname, locale);
  url.searchParams.delete("lang");
  return `${url.pathname}${url.search}${url.hash}`;
}

export function legacyLocaleHref(href: string) {
  const url = new URL(href, "https://portfolio.local");
  const locale = url.searchParams.get("lang");
  return locale === "en" || locale === "es" ? localizeHref(`${url.pathname}${url.search}${url.hash}`, locale) : null;
}
