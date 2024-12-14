import Link from "next/link";
import Image from "next/image";
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
      className="bg-gray-800 rounded-lg overflow-hidden shadow-lg flex flex-col h-full group"
    >
      <div className="relative overflow-hidden">
        {
          /*!important*/ false ? (
            <Image
              src={`${image}?height=200&width=300`}
              alt={title}
              width={300}
              height={200}
              className="w-full  transition-all duration-300 filter grayscale group-hover:filter-none"
            />
          ) : null
        }
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400 mb-4 flex-grow">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, i) => (
            <span key={i} className="bg-gray-700 px-2 py-1 rounded text-sm">
              {tech}
            </span>
          ))}
        </div>
        {github ? (
          <div className="flex flex-col mt-auto">
            <Link
              href={github}
              target="_blank"
              className="text-green-400 hover:text-green-500 transition-colors flex items-center gap-2"
            >
              <Github size={20} />
              <span>View on GitHub</span>
            </Link>
          </div>
        ) : (
          <Link
            href={alternate_link || "#"}
            target="_blank"
            className="text-green-400 hover:text-green-500 transition-colors flex items-center gap-2"
          >
            <span className="text-green-400">
              Check out whats coming soon! 👀
            </span>
          </Link>
        )}
      </div>
    </div>
  );
}
