import { ArrowUpRight } from "lucide-react";
import { ExpandableCard } from "@/components/ui/expandable-card";
import { ProjectHoverRow } from "@/components/ui/project-hover-row";
import { projectDetails } from "@/lib/project-details";

interface ProjectProps {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  important?: boolean;
  alternate_link?: string;
}

export default function Project({ title, description, technologies, github, alternate_link }: ProjectProps) {
  const href = github || alternate_link;
  const label = github ? "View source" : "Visit project";
  const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  return (
    <ProjectHoverRow id={slug} titleId={`${slug}-title`}>
      <h2 className="project-title" id={`${slug}-title`}>{title}</h2>
      <div className="project-copy">
        <p>{description}</p>
        <ul className="technology-list" aria-label={`${title} technologies`}>{Array.from(new Set(technologies)).map((tech) => <li key={tech}>{tech}</li>)}</ul>
        {href ? <a href={href} target="_blank" rel="noopener noreferrer" className="text-link">{label}<ArrowUpRight size={18} aria-hidden="true" /><span className="sr-only"> for {title}</span></a> : null}
        {projectDetails[title] ? <ExpandableCard title={title} {...projectDetails[title]} /> : null}
      </div>
    </ProjectHoverRow>
  );
}
