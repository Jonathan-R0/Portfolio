"use client";

import Project from "./Project";
import { useState, useEffect } from "react";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  important: boolean;
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch("./projects.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);

  return (
    <section id="projects" className="py-12 md:py-16">
      <h2 className="section-title mb-10">Projects 💼</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Project key={index} {...project} index={index} important={false} />
        ))}
      </div>
    </section>
  );
}
