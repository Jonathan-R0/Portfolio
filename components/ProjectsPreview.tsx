import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Project from "./Project";
import projects from "@/public/projects.json";

export default function ProjectsPreview() {
  const selected = projects.filter((project) => project.important);
  return (
    <section id="selected-work" className="selected-work" aria-labelledby="selected-title">
      <div className="page-width">
        <div className="section-heading"><h2 id="selected-title">Work, in practice</h2><Link href="/projects" className="text-link">The complete collection <ArrowRight size={19} aria-hidden="true" /></Link></div>
        <div className="selected-projects">{selected.map((project) => <Project key={project.title} {...project} />)}</div>
      </div>
    </section>
  );
}
