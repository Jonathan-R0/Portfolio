"use client";

import { ArrowUpRight } from "lucide-react";
import { localizeHref, useI18n } from "@/lib/i18n";
import { HoverEffect } from "@/components/ui/card-hover-effect";

const links = ["https://github.com/Jonathan-R0", "/projects#numi", "/projects#goodreads-backend", "/projects#wolfenstein-3d"];

export default function Skills() {
  const { locale, messages: { skills } } = useI18n();
  return (
    <section id="skills" className="toolbox page-width" aria-labelledby="toolbox-title">
      <div className="section-heading">
        <h2 id="toolbox-title">{skills.title}</h2>
        <p>{skills.intro}</p>
      </div>
      <HoverEffect items={skills.groups.map((group, index) => ({
        title: group.title,
        link: localizeHref(links[index], locale),
        content: (
          <>
            <div className="skill-category"><h3>{group.title}</h3><p className="skill-description">{group.description}</p></div>
            <ul className="skill-list">{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
            <span className="skill-project-link">{group.linkLabel}<ArrowUpRight size={19} aria-hidden="true" /></span>
          </>
        ),
      }))} />
    </section>
  );
}
