import { ArrowUpRight } from "lucide-react";
import { Timeline } from "@/components/ui/timeline";
import { getMessages, type LocalizedProps } from "@/lib/messages";
import { profileLinks } from "@/lib/profile";

export default function AcademicJourney({ locale }: LocalizedProps) {
  const { teaching, about, common } = getMessages(locale);
  return (
    <section
      id="teaching"
      className="academic-journey page-width"
      aria-labelledby="journey-title"
    >
      <div className="section-heading">
        <h2 id="journey-title">{about.journey}</h2>
        <p>{about.journeyIntro}</p>
      </div>
      <Timeline
        data={[
          {
            title: teaching.period,
            content: (
              <>
                <h3>{teaching.role}</h3>
                <p className="timeline-institution">
                  {teaching.course} · FIUBA
                </p>
                <p>{teaching.description}</p>
                <p>{teaching.teamDescription}</p>
                <ul
                  className="teaching-topics"
                  aria-label={teaching.topicsLabel}
                >
                  {teaching.topics.map((topic) => (
                    <li key={topic}>{topic}</li>
                  ))}
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
                <a
                  className="text-link"
                  href={profileLinks.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {common.resumeLink}{" "}
                  <ArrowUpRight size={19} aria-hidden="true" />
                </a>
              </>
            ),
          },
        ]}
      />
    </section>
  );
}
