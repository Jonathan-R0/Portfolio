"use client";

import { useI18n } from "@/lib/i18n";
import SubjectsLeft from "@/components/SubjectsLeft";
import Skills from "@/components/Skills";
import AcademicJourney from "@/components/AcademicJourney";
import { ArrowUpRight } from "lucide-react";

export default function AboutMe() {
  const { messages: { about, common } } = useI18n();
  return (
    <main id="main-content" tabIndex={-1}>
      <section className="page-width inner-page about-page" aria-labelledby="about-title">
        <div className="page-intro">
          <h1 id="about-title">{about.title}<br />{about.titleEnd}<span className="name-period">.</span></h1>
          <p>{about.intro}</p>
        </div>
        <div className="about-body">
          <div className="about-perspective">
            <h2>{about.perspective}<br />{about.perspectiveEnd}</h2>
            <p>{common.location}</p>
          </div>
          <div className="about-copy">
            {about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <a className="text-link" href="https://github.com/Jonathan-R0" target="_blank" rel="noopener noreferrer">{common.github} <ArrowUpRight size={19} aria-hidden="true" /></a>
          </div>
        </div>
        <SubjectsLeft />
      </section>
      <AcademicJourney />
      <Skills />
    </main>
  );
}
