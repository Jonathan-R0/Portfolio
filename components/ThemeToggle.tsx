"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useI18n } from "@/lib/i18n";
import { themeStorageKey } from "@/lib/theme";

export default function ThemeToggle() {
  const { messages } = useI18n();
  const [preference, setPreference] = useState<"light" | "dark" | "system">("system");
  const currentPreference = useRef("system");

  useEffect(() => {
    const system = window.matchMedia("(prefers-color-scheme: dark)");
    function syncTheme() {
      let saved: string | null = currentPreference.current;
      try { saved = localStorage.getItem(themeStorageKey); } catch { /* Storage is optional. */ }
      const mode = saved === "dark" || saved === "light" ? saved : "system";
      currentPreference.current = mode;
      const next = mode === "dark" || (mode === "system" && system.matches);
      document.documentElement.dataset.theme = next ? "dark" : "light";
      document.documentElement.dataset.themePreference = mode;
      setPreference(mode);
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

  function chooseTheme(mode: "light" | "dark" | "system") {
    currentPreference.current = mode;
    const next = mode === "dark" || (mode === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);
    document.documentElement.dataset.theme = next ? "dark" : "light";
    document.documentElement.dataset.themePreference = mode;
    setPreference(mode);
    try { localStorage.setItem(themeStorageKey, mode); } catch { /* Keep working without persistence. */ }
  }

  const next = preference === "light" ? "dark" : preference === "dark" ? "system" : "light";
  const label = `${messages.theme.label}: ${messages.theme[preference]}. ${messages.theme.next}: ${messages.theme[next]}`;

  return (
      <button type="button" className="theme-toggle" aria-label={label} title={label} onClick={() => chooseTheme(next)}>
        <Moon className="theme-moon" size={18} aria-hidden="true" />
        <Sun className="theme-sun" size={18} aria-hidden="true" />
        <Monitor className="theme-system" size={18} aria-hidden="true" />
      </button>
  );
}
