import { legacyLocaleHref, localizeHref, type Locale } from "./routing";

const scrollKey = "portfolio.locale-scroll.v1";

function currentHref() {
  const { pathname, search, hash } = window.location;
  return `${pathname}${search}${hash}`;
}

export function changeLocale(locale: Locale) {
  const current = currentHref();
  const href = localizeHref(current, locale);
  if (href === current) return;

  try {
    window.sessionStorage.setItem(
      scrollKey,
      JSON.stringify({ href, x: window.scrollX, y: window.scrollY }),
    );
  } catch {
    // Switching languages works without scroll persistence.
  }
  // Language routes have separate HTML root layouts.
  window.location.assign(href);
}

export function restoreLocaleNavigation() {
  const current = currentHref();
  const legacy = legacyLocaleHref(current);
  if (legacy && legacy !== current) {
    window.location.replace(legacy);
    return;
  }

  try {
    const saved = window.sessionStorage.getItem(scrollKey);
    window.sessionStorage.removeItem(scrollKey);
    const position = saved ? JSON.parse(saved) : null;
    if (
      position?.href !== current ||
      !Number.isFinite(position.x) ||
      !Number.isFinite(position.y)
    )
      return;

    const frame = window.requestAnimationFrame(() => {
      window.scrollTo({
        left: position.x,
        top: position.y,
        behavior: "instant",
      });
    });
    return () => window.cancelAnimationFrame(frame);
  } catch {
    // Storage and malformed saved values must not prevent navigation.
  }
}
