import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const read = (path) =>
  JSON.parse(readFileSync(new URL(path, import.meta.url), "utf8"));
const en = read("../lib/locales/en.json");
const es = read("../lib/locales/es.json");

function leaves(value, path = "") {
  return Object.entries(value).flatMap(([key, entry]) => {
    const next = path ? `${path}.${key}` : key;
    return typeof entry === "string" ? [[next, entry]] : leaves(entry, next);
  });
}

test("English and Spanish contain the same translation keys and nonempty strings", () => {
  const english = leaves(en);
  const spanish = leaves(es);
  assert.deepEqual(
    english.map(([key]) => key),
    spanish.map(([key]) => key),
  );
  for (const [key, value] of [...english, ...spanish])
    assert.ok(value.trim(), key);
});

test("Interpolation placeholders match across languages", () => {
  const spanish = new Map(leaves(es));
  for (const [key, value] of leaves(en)) {
    assert.deepEqual(
      value.match(/\{\w+\}/g),
      spanish.get(key).match(/\{\w+\}/g),
      key,
    );
  }
});

test("Every project has translations, stable unique anchors, and translated notes", () => {
  const projects = read("../public/projects.json");
  assert.equal(new Set(projects.map(({ id }) => id)).size, projects.length);
  for (const messages of [en, es]) {
    assert.equal(messages.projects.entries.length, projects.length);
    projects.forEach(({ id }, index) => {
      assert.match(id, /^[a-z0-9]+(?:-[a-z0-9]+)*$/);
      const entry = messages.projects.entries[index];
      assert.ok(
        entry.title && entry.description && entry.focus && entry.notes.length,
      );
    });
    assert.equal(messages.skills.groups.length, 4);
    assert.equal(messages.logos.entries.length, 7);
  }
});

test("Project order keeps Goodreads after machine learning in both languages", () => {
  const projects = read("../public/projects.json");
  assert.deepEqual(
    projects.map(({ id }) => id),
    [
      "numi",
      "wolfenstein-3d",
      "machine-learning-competiton",
      "goodreads-backend",
      "ms-teams-notifier",
      "user-crud",
    ],
  );
  for (const messages of [en, es]) {
    assert.equal(messages.projects.entries[3].title, "Goodreads Backend");
    assert.ok(!messages.projects.entries[4].description.includes("📱"));
    assert.ok(messages.projects.entries[5].description.includes("PRE-AI"));
    assert.ok(messages.projects.entries[5].description.includes(";)"));
  }
});
