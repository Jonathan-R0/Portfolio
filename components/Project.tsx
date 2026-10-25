import { ArrowUpRight } from "lucide-react";
import { ExpandableCard } from "@/components/ui/expandable-card";
import { ProjectHoverRow } from "@/components/ui/project-hover-row";
import { getMessages, type LocalizedProps } from "@/lib/messages";

interface ProjectProps extends LocalizedProps {
  id: string;
  title: string;
  description: string;
  focus: string;
  notes: string[];
  technologies: string[];
  github?: string;
  alternate_link?: string;
}

export default function Project({
  id,
  title,
  description,
  focus,
  notes,
  technologies,
  github,
  alternate_link,
  locale,
}: ProjectProps) {
  const { projects } = getMessages(locale);
  const href = github || alternate_link;
  const label = github ? projects.source : projects.visit;
  return (
    <ProjectHoverRow id={id} titleId={`${id}-title`}>
      <h2 className="project-title" id={`${id}-title`}>
        {title}
      </h2>
      <div className="project-copy">
        <p>{description}</p>
        <ul
          className="technology-list"
          aria-label={projects.technologies.replace("{title}", title)}
        >
          {Array.from(new Set(technologies)).map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        {href ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            {label}
            <ArrowUpRight size={18} aria-hidden="true" />
            <span className="sr-only">
              {projects.context.replace("{title}", title)}
            </span>
          </a>
        ) : null}
        <ExpandableCard
          title={title}
          focus={focus}
          notes={notes}
          locale={locale}
        />
      </div>
    </ProjectHoverRow>
  );
}
