/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Github } from "lucide-react";

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  index: number;
  important: boolean;
  alternate_link?: string;
}

export default function Project({
  title,
  description,
  image,
  technologies,
  github,
  index,
  alternate_link,
}: // important,
ProjectProps) {
  return (
    <div
      key={index}
      className="glass-panel group flex h-full flex-col overflow-hidden rounded-3xl transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300/30 hover:bg-slate-800/60"
    >
      <div className="relative overflow-hidden">
        {
          /*!important*/ false ? (
            <img
              src={`${image}?height=200&width=300`}
              alt={title}
              width={300}
              height={200}
              className="w-full  transition-all duration-300 filter grayscale group-hover:filter-none"
            />
          ) : null
        }
      </div>
      <div className="flex flex-grow flex-col p-5">
        <h3 className="mb-3 text-xl font-semibold text-white">{title}</h3>
        <p className="mb-5 flex-grow leading-7 text-slate-400">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, i) => (
            <span key={i} className="pill">
              {tech}
            </span>
          ))}
        </div>
        {github ? (
          <div className="flex flex-col mt-auto">
            <Link
              href={github}
              target="_blank"
              className="accent-link flex items-center gap-2 font-medium"
            >
              <Github size={20} />
              <span>View on GitHub</span>
            </Link>
          </div>
        ) : (
          <Link
            href={alternate_link || "#"}
            target="_blank"
            className="accent-link flex items-center gap-2 font-medium"
          >
            <span>
              Check out whats coming soon! 👀
            </span>
          </Link>
        )}
      </div>
    </div>
  );
}
