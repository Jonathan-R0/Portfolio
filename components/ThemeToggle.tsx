"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { useI18n } from "@/lib/i18n";
import { themeStorageKey } from "@/lib/theme";

export default function ThemeToggle() {
  const { messages } = useI18n();
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const system = window.matchMedia("(prefers-color-scheme: dark)");
    function syncTheme() {
      let saved: string | null = null;
      try { saved = localStorage.getItem(themeStorageKey); } catch { /* Storage is optional. */ }
      const next = saved === "dark" || (saved !== "light" && system.matches);
      document.documentElement.dataset.theme = next ? "dark" : "light";
      setDark(next);
    }
    function onStorage(event: StorageEvent) {
      if (event.key === themeStorageKey || event.key === null) syncTheme();
    }
    syncTheme();
    system.addEventListener("change", syncTheme);
    window.addEventListener("storage", onStorage);
    return () => {
      system.removeEventListener("change", syncTheme);
      window.removeEventListener("storage", onStorage);
    };
  }, []);

  function toggleTheme() {
    const next = document.documentElement.dataset.theme !== "dark";
    document.documentElement.dataset.theme = next ? "dark" : "light";
    setDark(next);
    try { localStorage.setItem(themeStorageKey, next ? "dark" : "light"); } catch { /* Keep working without persistence. */ }
  }

  return (
    <button type="button" className="theme-toggle" aria-label={messages.theme.darkMode} aria-pressed={dark} title={messages.theme.darkMode} onClick={toggleTheme}>
      <Moon className="theme-moon" size={18} aria-hidden="true" />
      <Sun className="theme-sun" size={18} aria-hidden="true" />
    </button>
  );
}
