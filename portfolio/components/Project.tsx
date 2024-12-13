import Link from "next/link";
import Image from "next/image";
import { Github } from "lucide-react";

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  index: number;
}

export default function Project({
  title,
  description,
  image,
  technologies,
  github,
  index,
}: ProjectProps) {
  return (
    <div
      key={index}
      className="bg-gray-800 rounded-lg overflow-hidden shadow-lg flex flex-col h-full"
    >
      <Image
        src={image}
        alt={title}
        width={300}
        height={200}
        className="w-full"
      />
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
      </div>
    </div>
  );
}
