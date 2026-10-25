import assert from "node:assert/strict";
import test from "node:test";
import { runInNewContext } from "node:vm";
import { loadTypeScript } from "./helpers/load-typescript.mjs";

const {
  parseThemePreference,
  resolveTheme,
  nextThemePreference,
  themeInitScript,
  themeStorageKey,
  systemThemeQuery,
} = await loadTypeScript(new URL("../lib/theme.ts", import.meta.url));

test("Invalid or missing saved themes fall back to system", () => {
  for (const value of [null, undefined, "", "unknown", {}, 0, "system"]) {
    assert.equal(parseThemePreference(value), "system");
  }
  assert.equal(parseThemePreference("dark"), "dark");
  assert.equal(parseThemePreference("light"), "light");
});

test("The theme toggle cycles light → dark → system → light", () => {
  assert.equal(nextThemePreference("light"), "dark");
  assert.equal(nextThemePreference("dark"), "system");
  assert.equal(nextThemePreference("system"), "light");
});

test("Only system mode follows the device theme", () => {
  for (const systemDark of [false, true]) {
    assert.equal(resolveTheme("light", systemDark), "light");
    assert.equal(resolveTheme("dark", systemDark), "dark");
    assert.equal(
      resolveTheme("system", systemDark),
      systemDark ? "dark" : "light",
    );
  }
});

function initializeTheme(saved, systemDark, storageBlocked = false) {
  const dataset = {};
  runInNewContext(themeInitScript, {
    document: { documentElement: { dataset } },
    localStorage: {
      getItem(key) {
        assert.equal(key, themeStorageKey);
        if (storageBlocked) throw new Error("Storage unavailable");
        return saved;
      },
    },
    window: {
      matchMedia(query) {
        assert.equal(query, systemThemeQuery);
        return { matches: systemDark };
      },
    },
  });
  return dataset;
}

test("Pre-paint initialization uses the same rules as the interactive toggle", () => {
  for (const saved of [null, "light", "dark", "system", "invalid"]) {
    for (const systemDark of [false, true]) {
      const dataset = initializeTheme(saved, systemDark);
      const preference = parseThemePreference(saved);
      assert.equal(dataset.themePreference, preference);
      assert.equal(dataset.theme, resolveTheme(preference, systemDark));
    }
  }
});

test("The pre-paint script works when localStorage is blocked", () => {
  const dataset = initializeTheme(null, true, true);
  assert.equal(dataset.themePreference, "system");
  assert.equal(dataset.theme, "dark");
});
