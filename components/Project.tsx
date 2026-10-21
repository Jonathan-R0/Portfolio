"use client";

import { ArrowUpRight } from "lucide-react";
import { ExpandableCard } from "@/components/ui/expandable-card";
import { ProjectHoverRow } from "@/components/ui/project-hover-row";
import { useI18n } from "@/lib/i18n";

interface ProjectProps {
  id: string;
  title: string;
  description: string;
  focus: string;
  notes: string[];
  technologies: string[];
  github?: string;
  important?: boolean;
  alternate_link?: string;
}

export default function Project({ id, title, description, focus, notes, technologies, github, alternate_link }: ProjectProps) {
  const { messages: { projects } } = useI18n();
  const href = github || alternate_link;
  const label = github ? projects.source : projects.visit;
  const slug = id;
  return (
    <ProjectHoverRow id={slug} titleId={`${slug}-title`}>
      <h2 className="project-title" id={`${slug}-title`}>{title}</h2>
      <div className="project-copy">
        <p>{description}</p>
        <ul className="technology-list" aria-label={projects.technologies.replace("{title}", title)}>{Array.from(new Set(technologies)).map((tech) => <li key={tech}>{tech}</li>)}</ul>
        {href ? <a href={href} target="_blank" rel="noopener noreferrer" className="text-link">{label}<ArrowUpRight size={18} aria-hidden="true" /><span className="sr-only">{projects.context.replace("{title}", title)}</span></a> : null}
        <ExpandableCard title={title} focus={focus} notes={notes} />
      </div>
    </ProjectHoverRow>
  );
}
