import { ArrowUpRight } from "lucide-react";
import { Timeline } from "@/components/ui/timeline";
import { teaching, education } from "@/lib/profile";

export default function AcademicJourney() {
  return (
    <section id="teaching" className="academic-journey page-width" aria-labelledby="journey-title">
      <div className="section-heading">
        <h2 id="journey-title">Teaching & learning.</h2>
        <p>My work at FIUBA, on both sides of the classroom.</p>
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
              <ul className="teaching-topics" aria-label="Teaching topics">
                <li>API design</li><li>Testing</li><li>Project management</li><li>Development</li>
              </ul>
            </>
          ),
        },
        {
          title: education.graduation,
          content: (
            <>
              <h3>{education.title} graduate</h3>
              <p className="timeline-institution">{education.institution}</p>
              <p>I graduated in August 2026. My studies and teaching share the same focus: understanding problems and turning that understanding into working software.</p>
              <a className="text-link" href="https://drive.google.com/file/d/1TqiDR9FA-7JP3-DO4ha2yrW4X3IyuRYO/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                Full background in my resume <ArrowUpRight size={19} aria-hidden="true" />
              </a>
            </>
          ),
        },
      ]} />
    </section>
  );
}
