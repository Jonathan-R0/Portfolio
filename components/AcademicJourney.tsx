"use client";

import { ArrowUpRight } from "lucide-react";
import { Timeline } from "@/components/ui/timeline";
import { useI18n } from "@/lib/i18n";

export default function AcademicJourney() {
  const { messages: { teaching, about, common } } = useI18n();
  return (
    <section id="teaching" className="academic-journey page-width" aria-labelledby="journey-title">
      <div className="section-heading">
        <h2 id="journey-title">{about.journey}</h2>
        <p>{about.journeyIntro}</p>
      </div>
      <Timeline data={[
        {
          title: teaching.period,
          content: (
            <>
              <h3>{teaching.role}</h3>
              <p className="timeline-institution">{teaching.course} · FIUBA</p>
              <p>{teaching.description}</p>
              <p>{teaching.teamDescription}</p>
              <ul className="teaching-topics" aria-label={teaching.topicsLabel}>
                {teaching.topics.map((topic) => <li key={topic}>{topic}</li>)}
              </ul>
            </>
          ),
        },
        {
          title: about.graduation,
          content: (
            <>
              <h3>{about.graduate}</h3>
              <p className="timeline-institution">{common.faculty}</p>
              <p>{about.graduationDescription}</p>
              <a className="text-link" href="https://drive.google.com/file/d/1TqiDR9FA-7JP3-DO4ha2yrW4X3IyuRYO/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                {common.resumeLink} <ArrowUpRight size={19} aria-hidden="true" />
              </a>
            </>
          ),
        },
      ]} />
    </section>
  );
}
