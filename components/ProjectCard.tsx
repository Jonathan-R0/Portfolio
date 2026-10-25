/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { motion } from "framer-motion";

interface ProjectCardProps {
  slug: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
}

export default function ProjectCard({
  slug,
  title,
  description,
  image,
  technologies,
}: ProjectCardProps) {
  return (
    <motion.div
      className="glass-panel overflow-hidden rounded-3xl transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300/30"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <img
        src={image}
        alt={title}
        width={300}
        height={200}
        className="w-full"
      />
      <div className="p-5">
        <h3 className="mb-3 text-xl font-semibold text-white">{title}</h3>
        <p className="mb-5 leading-7 text-slate-400">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, i) => (
            <span key={i} className="pill">
              {tech}
            </span>
          ))}
        </div>
        <Link href={`/projects/${slug}`} className="accent-link font-medium">
          View Project Details 👀
        </Link>
      </div>
    </motion.div>
  );
}
