import Project from "./Project";
import projects from "@/public/projects.json";
import { LayoutGroup } from "framer-motion";

export default function Projects() {
  return <LayoutGroup id="project-collection"><div className="project-grid">{projects.map((project) => <Project key={project.title} {...project} />)}</div></LayoutGroup>;
}
