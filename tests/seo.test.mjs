import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

// Run after `npm run build`: validate the actual HTML crawlers receive.
const readExport = (path) =>
  readFileSync(new URL(`../out/${path}`, import.meta.url), "utf8");
const pages = [
  ["index.html", "https://niyo.com.ar/"],
  ["projects/index.html", "https://niyo.com.ar/projects/"],
  ["aboutme/index.html", "https://niyo.com.ar/aboutme/"],
  ["es/index.html", "https://niyo.com.ar/es/"],
  ["es/projects/index.html", "https://niyo.com.ar/es/projects/"],
  ["es/aboutme/index.html", "https://niyo.com.ar/es/aboutme/"],
];

function meta(html, key) {
  const tag = (html.match(/<meta\b[^>]*>/g) ?? []).find(
    (tag) => tag.includes(`name="${key}"`) || tag.includes(`property="${key}"`),
  );
  return tag?.match(/content="([^"]*)"/)?.[1];
}

test("Exported pages have unique metadata and self-referencing canonical URLs", () => {
  const titles = new Set();
  const descriptions = new Set();
  for (const [file, canonical] of pages) {
    const html = readExport(file);
    const title = html.match(/<title>(.*?)<\/title>/)?.[1];
    const description = meta(html, "description");
    assert.ok(title && description, file);
    titles.add(title);
    descriptions.add(description);
    assert.equal((html.match(/rel="canonical"/g) ?? []).length, 1, file);
    const canonicalHref = html.match(
      /<link rel="canonical" href="([^"]*)"/,
    )?.[1];
    assert.ok(canonicalHref, file);
    // Next normalizes the root origin without a trailing slash in head tags.
    assert.equal(new URL(canonicalHref).href, canonical, file);
    assert.equal(new URL(meta(html, "og:url")).href, canonical, file);
    assert.equal(meta(html, "og:title"), title, file);
    assert.equal(meta(html, "og:description"), description, file);
    assert.equal(meta(html, "twitter:title"), title, file);
    assert.equal(meta(html, "twitter:description"), description, file);
    assert.equal(meta(html, "twitter:card"), "summary", file);
    assert.equal(
      meta(html, "og:image"),
      "https://niyo.com.ar/profileimage.jpg",
      file,
    );
    assert.equal((html.match(/<h1\b/g) ?? []).length, 1, file);
    assert.ok(!meta(html, "robots")?.includes("noindex"), file);
    const locale = file.startsWith("es/") ? "es" : "en";
    assert.ok(html.includes(`<html lang="${locale}"`), file);
    assert.equal(
      meta(html, "og:locale"),
      locale === "es" ? "es_AR" : "en_US",
      file,
    );
    const english = canonical.replace("/es/", "/");
    const spanish = english.replace(
      "https://niyo.com.ar/",
      "https://niyo.com.ar/es/",
    );
    for (const [language, href] of [
      ["en", english],
      ["es", spanish],
      ["x-default", english],
    ]) {
      const tag = (html.match(/<link\b[^>]*>/g) ?? []).find(
        (tag) =>
          tag.includes('rel="alternate"') &&
          tag.includes(`hrefLang="${language}"`),
      );
      assert.ok(tag, `${file}: ${language} alternate`);
      assert.equal(new URL(tag.match(/href="([^"]*)"/)[1]).href, href, file);
    }
  }
  assert.equal(titles.size, pages.length);
  assert.equal(descriptions.size, pages.length);
});

test("Both languages render real localized content and navigation without JavaScript", () => {
  for (const [file] of pages) {
    const html = readExport(file).replace(
      /<script\b[^>]*>[\s\S]*?<\/script>/g,
      "",
    );
    const spanish = file.startsWith("es/");
    assert.ok(
      html.includes(spanish ? "Desarrollador backend" : "Backend developer"),
      file,
    );
    for (const path of ["", "projects/", "aboutme/"]) {
      assert.ok(html.includes(`href="/${spanish ? "es/" : ""}${path}"`), file);
    }
    assert.ok(!html.includes("?lang="), file);
    if (file.includes("projects/")) {
      assert.ok(html.includes(spanish ? "La colección" : "The project"), file);
      assert.ok(html.includes("Numi"), file);
      assert.ok(html.includes(`aria-current="page"`), file);
    }
  }
});

test("Structured data is present in static HTML without executing JavaScript", () => {
  for (const [file] of pages) {
    const html = readExport(file);
    const source = html.match(
      /<script[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/s,
    )?.[1];
    assert.ok(source, file);
    const data = JSON.parse(source);
    assert.equal(data["@context"], "https://schema.org");
    const person = data["@graph"].find((entry) => entry["@type"] === "Person");
    const website = data["@graph"].find(
      (entry) => entry["@type"] === "WebSite",
    );
    assert.equal(person.name, "Jonathan Rosenblatt");
    assert.equal(website.publisher["@id"], person["@id"]);
    assert.deepEqual(website.inLanguage, ["en", "es"]);
  }
});

test("Project notes use native disclosures with visible content in both exports", () => {
  for (const file of ["projects/index.html", "es/projects/index.html"]) {
    const html = readExport(file).replace(
      /<script\b[^>]*>[\s\S]*?<\/script>/g,
      "",
    );
    const disclosures = [
      ...html.matchAll(
        /<details class="project-details">([\s\S]*?)<\/details>/g,
      ),
    ];
    assert.equal(disclosures.length, 6, file);
    for (const [, content] of disclosures) {
      assert.match(content, /<summary>/);
      assert.match(content, /class="project-details-body"/);
      assert.doesNotMatch(
        content,
        /opacity:0|aria-hidden="true"[^>]*class="project-details-body"/,
      );
    }
  }
});

test("Robots exposes the sitemap and the sitemap lists only canonical pages", () => {
  const robots = readExport("robots.txt");
  assert.match(robots, /User-Agent: \*/i);
  assert.match(robots, /Allow: \//);
  assert.match(robots, /Sitemap: https:\/\/niyo\.com\.ar\/sitemap\.xml/);
  const locations = [
    ...readExport("sitemap.xml").matchAll(/<loc>(.*?)<\/loc>/g),
  ].map((match) => match[1]);
  assert.deepEqual(
    locations.sort(),
    pages.map(([, canonical]) => canonical).sort(),
  );
  assert.match(meta(readExport("404.html"), "robots"), /noindex/);
});
