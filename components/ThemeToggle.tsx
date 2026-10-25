"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { nextThemePreference } from "@/lib/theme";
import { useTheme } from "@/lib/hooks/use-theme";

export default function ThemeToggle() {
  const { messages } = useI18n();
  const { preference, cycleTheme } = useTheme();
  const next = nextThemePreference(preference);
  const label = `${messages.theme.label}: ${messages.theme[preference]}. ${messages.theme.next}: ${messages.theme[next]}`;

  return (
    <button
      type="button"
      className="theme-toggle"
      aria-label={label}
      title={label}
      onClick={cycleTheme}
    >
      <Moon className="theme-moon" size={18} aria-hidden="true" />
      <Sun className="theme-sun" size={18} aria-hidden="true" />
      <Monitor className="theme-system" size={18} aria-hidden="true" />
    </button>
  );
}
