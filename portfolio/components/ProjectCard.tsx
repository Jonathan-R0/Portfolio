import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface ProjectCardProps {
  slug: string
  title: string
  description: string
  image: string
  technologies: string[]
}

export default function ProjectCard({ slug, title, description, image, technologies }: ProjectCardProps) {
  return (
    <motion.div 
      className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Image src={image} alt={title} width={300} height={200} className="w-full" />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, i) => (
            <span key={i} className="bg-gray-700 px-2 py-1 rounded-md text-sm">{tech}</span>
          ))}
        </div>
        <Link href={`/projects/${slug}`} className="text-green-400 hover:underline">
          View Project Details 👀
        </Link>
      </div>
    </motion.div>
  )
}

