import assert from "node:assert/strict";
import test from "node:test";
import { loadTypeScript } from "./helpers/load-typescript.mjs";

const { localizeHref, legacyLocaleHref, stripLocale } = await loadTypeScript(
  new URL("../lib/routing.ts", import.meta.url),
);

test("Language links use static routes and preserve query parameters and anchors", () => {
  assert.equal(localizeHref("/", "es"), "/es/");
  assert.equal(localizeHref("/es/", "en"), "/");
  assert.equal(
    localizeHref("/projects?ref=folio#numi", "es"),
    "/es/projects/?ref=folio#numi",
  );
  assert.equal(
    localizeHref("/es/projects/?ref=folio#numi", "en"),
    "/projects/?ref=folio#numi",
  );
  assert.equal(localizeHref("/es/aboutme/", "es"), "/es/aboutme/");
  assert.equal(localizeHref("/#skills", "es"), "/es/#skills");
});

test("Legacy language queries resolve to matching routes without redirect loops", () => {
  assert.equal(
    legacyLocaleHref("/projects?lang=es&ref=old#numi"),
    "/es/projects/?ref=old#numi",
  );
  assert.equal(
    legacyLocaleHref("/es/aboutme/?lang=en#teaching"),
    "/aboutme/#teaching",
  );
  assert.equal(legacyLocaleHref("/?lang=es"), "/es/");
  assert.equal(legacyLocaleHref("/es/?lang=es"), "/es/");
  assert.equal(legacyLocaleHref("/es/projects/"), null);
  assert.equal(legacyLocaleHref("/?lang=fr"), null);
});

test("Localization leaves external URLs, assets and unknown pages untouched", () => {
  for (const href of [
    "https://example.com/projects",
    "//example.com/",
    "mailto:a@example.com",
    "#skills",
    "/profileimage.jpg",
    "/logos/test.svg",
    "/missing",
  ]) {
    assert.equal(localizeHref(href, "es"), href);
  }
  assert.equal(stripLocale("/es/"), "/");
  assert.equal(stripLocale("/es/projects/"), "/projects");
  assert.equal(stripLocale("/projects/"), "/projects");
  assert.equal(stripLocale("/essay/"), "/essay");
});
