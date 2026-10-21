import Project from "./Project";
import projects from "@/public/projects.json";

export default function Projects() {
  return <div className="project-grid">{projects.map((project, index) => <Project key={project.title} {...project} eager={index === 0} />)}</div>;
}
