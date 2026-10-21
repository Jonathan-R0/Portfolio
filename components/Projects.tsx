"use client";

import Project from "./Project";
import { useI18n } from "@/lib/i18n";
import projects from "@/public/projects.json";
import { LayoutGroup } from "framer-motion";

export default function Projects() {
  const { messages } = useI18n();
  return <LayoutGroup id="project-collection"><div className="project-grid">{projects.map((project, index) => <Project key={project.id} {...project} {...messages.projects.entries[index]} />)}</div></LayoutGroup>;
}
