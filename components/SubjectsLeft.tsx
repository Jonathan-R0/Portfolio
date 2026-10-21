"use client";

import { useI18n } from "@/lib/i18n";

export default function SubjectsLeft() {
  const { messages: { common, about } } = useI18n();
  return <section className="education" aria-labelledby="education-title"><h3 id="education-title">{common.education}</h3><p>{common.faculty}</p><p className="education-completed">{about.completed}</p></section>;
}
