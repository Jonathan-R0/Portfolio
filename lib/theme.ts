export const themeStorageKey = "portfolio.theme.v1";

// Run before the page is painted, including across language root layouts.
export const themeInitScript = `(() => {
  let theme;
  try { theme = localStorage.getItem(${JSON.stringify(themeStorageKey)}); } catch {}
  document.documentElement.dataset.themePreference = theme === 'dark' || theme === 'light' ? theme : 'system';
  document.documentElement.dataset.theme = theme === 'dark' || theme === 'light'
    ? theme
    : window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
})();`;
