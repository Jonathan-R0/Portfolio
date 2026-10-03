import Project from "./Project";
import projects from "@/public/projects.json";

export default function Projects() {
  return <div className="project-grid">{projects.map((project) => <Project key={project.title} {...project} />)}</div>;
}
