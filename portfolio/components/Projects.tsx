import Project from "./Project";

const projects = [
  {
    title: "FileTransfer",
    description: "TP File Transfer client & server. Grupo B2.",
    image: "/placeholder.svg?height=200&width=300",
    technologies: ["Python", "MIT License"],
    github: "https://github.com/Jonathan-R0/FileTransfer",
  },
  {
    title: "SDN",
    description: "Software Defined Network POX & Mininet TP2",
    image: "/placeholder.svg?height=200&width=300",
    technologies: ["Python", "MIT License"],
    github: "https://github.com/Jonathan-R0/SDN",
  },
  {
    title: "TP2-OrganizacionDeDatos",
    description: "Public",
    image: "/placeholder.svg?height=200&width=300",
    technologies: ["Jupyter Notebook", "MIT License"],
    github: "https://github.com/Jonathan-R0/TP2-OrganizacionDeDatos",
  },
  {
    title: "TP1-OrganizacionDeDatos",
    description: "Public",
    image: "/placeholder.svg?height=200&width=300",
    technologies: ["Jupyter Notebook", "MIT License"],
    github: "https://github.com/Jonathan-R0/TP1-OrganizacionDeDatos",
  },
  {
    title: "FIUBA-Bot",
    description:
      "El FIUBA-Bot te permite gestionar y visualizar datos relevantes para tu paso por la facultad!",
    image: "/placeholder.svg?height=200&width=300",
    technologies: ["TypeScript"],
    github: "https://github.com/Jonathan-R0/FIUBA-Bot",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl font-bold mb-8 text-center">Projects 💼</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Project key={index} {...project} index={index} />
        ))}
      </div>
    </section>
  );
}
