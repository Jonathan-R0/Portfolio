import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  important?: boolean;
  alternate_link?: string;
  featured?: boolean;
}

export default function Project({ title, description, image, technologies, github, alternate_link, featured = false }: ProjectProps) {
  const href = github || alternate_link;
  const label = github ? "View source" : "Visit project";
  return (
    <article className={`project-entry${featured ? " project-featured" : ""}`}>
      <div className="project-visual">
        <Image src={image} alt={`${title} project preview`} width={1200} height={750} unoptimized loading={featured ? "eager" : "lazy"} sizes={featured ? "(max-width: 760px) 100vw, 60vw" : "(max-width: 760px) 100vw, 50vw"} className="project-image" />
      </div>
      <div className="project-copy">
        <h3>{title}</h3><p>{description}</p>
        <ul className="technology-list" aria-label={`${title} technologies`}>{Array.from(new Set(technologies)).map((tech) => <li key={tech}>{tech}</li>)}</ul>
        {href ? <a href={href} target="_blank" rel="noopener noreferrer" className="text-link">{label}<ArrowUpRight size={18} aria-hidden="true" /><span className="sr-only"> for {title}</span></a> : null}
      </div>
    </article>
  );
}
