import Link from "next/link";
import { useState, useEffect } from "react";
import Project from "./Project";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  important: boolean;
}

export default function ProjectsPreview() {
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
    <section id="projects-preview" className="py-16 md:py-20">
      <p className="section-kicker">Selected Work</p>
      <h2 className="section-title mb-12">
        Featured Projects 💼
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) =>
          project.important ? (
            <Project key={index} {...project} index={index} />
          ) : null
        )}
      </div>
      <div className="mt-12 flex flex-col items-center justify-center gap-4 text-center sm:flex-row sm:gap-10">
        <Link
          href="/projects"
          className="accent-link text-lg font-semibold"
        >
          Explore more projects 👾
        </Link>
        <Link
          href="/blog"
          className="accent-link text-lg font-semibold"
        >
          Check out my blog! 🦾
        </Link>
      </div>
    </section>
  );
}
