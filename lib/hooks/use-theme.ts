"use client";

import { useEffect, useState } from "react";
import {
  nextThemePreference,
  parseThemePreference,
  resolveTheme,
  systemThemeQuery,
  themeStorageKey,
  type ThemePreference,
} from "@/lib/theme";

function readPreference() {
  return parseThemePreference(document.documentElement.dataset.themePreference);
}

function applyTheme(preference: ThemePreference) {
  document.documentElement.dataset.themePreference = preference;
  document.documentElement.dataset.theme = resolveTheme(
    preference,
    window.matchMedia(systemThemeQuery).matches,
  );
}

export function useTheme() {
  const [preference, setPreference] = useState<ThemePreference>("system");

  useEffect(() => {
    const system = window.matchMedia(systemThemeQuery);

    function syncPreference(next: ThemePreference) {
      applyTheme(next);
      setPreference(next);
    }

    // The pre-paint script already read storage. Keep system changes independent
    // of storage, so the current choice also works when storage is unavailable.
    setPreference(readPreference());

    function onSystemChange() {
      applyTheme(readPreference());
    }

    function onStorage(event: StorageEvent) {
      try {
        if (event.storageArea !== window.localStorage) return;
      } catch {
        return;
      }
      if (event.key === themeStorageKey || event.key === null) {
        syncPreference(parseThemePreference(event.newValue));
      }
    }

    system.addEventListener("change", onSystemChange);
    window.addEventListener("storage", onStorage);
    return () => {
      system.removeEventListener("change", onSystemChange);
      window.removeEventListener("storage", onStorage);
    };
  }, []);

  function cycleTheme() {
    const next = nextThemePreference(readPreference());
    applyTheme(next);
    setPreference(next);
    try {
      window.localStorage.setItem(themeStorageKey, next);
    } catch {
      // Persistence is optional; the selected mode stays active in this tab.
    }
  }

  return { preference, cycleTheme };
}
