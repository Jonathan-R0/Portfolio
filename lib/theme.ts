export const themeStorageKey = "portfolio.theme.v1";
export const systemThemeQuery = "(prefers-color-scheme: dark)";
export type ThemePreference = "light" | "dark" | "system";
export type ResolvedTheme = Exclude<ThemePreference, "system">;

export function parseThemePreference(value: unknown): ThemePreference {
  return value === "light" || value === "dark" ? value : "system";
}

export function resolveTheme(
  preference: ThemePreference,
  systemDark: boolean,
): ResolvedTheme {
  return preference === "system" ? (systemDark ? "dark" : "light") : preference;
}

export function nextThemePreference(
  preference: ThemePreference,
): ThemePreference {
  switch (preference) {
    case "light":
      return "dark";
    case "dark":
      return "system";
    case "system":
      return "light";
  }
}

// Run before the page is painted, including across language root layouts.
export const themeInitScript = `(() => {
  const parsePreference = ${parseThemePreference.toString()};
  const resolve = ${resolveTheme.toString()};
  let saved;
  try { saved = localStorage.getItem(${JSON.stringify(themeStorageKey)}); } catch {}
  const preference = parsePreference(saved);
  document.documentElement.dataset.themePreference = preference;
  document.documentElement.dataset.theme = resolve(preference, window.matchMedia(${JSON.stringify(systemThemeQuery)}).matches);
})();`;
