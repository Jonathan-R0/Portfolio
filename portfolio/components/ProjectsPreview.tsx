import Link from "next/link";
import { useState, useEffect } from "react";
import Project from "./Project";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  important: boolean;
}

export default function ProjectsPreview() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch("./projects.json")
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);

  return (
    <section id="projects-preview" className="py-20">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Featured Projects 💼
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) =>
          project.important ? (
            <Project key={index} {...project} index={index} />
          ) : null
        )}
      </div>
      <div className="mt-12 text-center">
        <Link
          href="/projects"
          className="text-green-400 hover:text-green-500 transition-colors text-lg font-semibold"
        >
          Explore More Projects &rarr;
        </Link>
      </div>
    </section>
  );
}
