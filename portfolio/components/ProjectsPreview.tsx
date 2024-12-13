import Image from "next/image";
import { Github } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
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
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={300}
              height={200}
              className="w-full"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gray-700 px-2 py-1 rounded text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-500 transition-colors flex items-center gap-2"
              >
                <Github size={20} />
                View on GitHub
              </Link>
            </div>
          </div>
        ))}
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
