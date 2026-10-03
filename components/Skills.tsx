import { ArrowUpRight, Braces, Network, FlaskConical } from "lucide-react";
import { HoverEffect } from "@/components/ui/card-hover-effect";

const groups = [
  {
    title: "Languages & frameworks",
    description: "The building blocks I use for backend development and programming.",
    items: ["TypeScript", "Python", "Java Spring", ".NET"],
    link: "/projects#numi",
    linkLabel: "Backend projects",
    icon: <Braces size={25} aria-hidden="true" />,
  },
  {
    title: "Data & infrastructure",
    description: "Working with data, containers, networks, and the operating system.",
    items: ["SQL", "Docker", "Networking", "Linux"],
    link: "/projects#goodreads-backend",
    linkLabel: "Data in practice",
    icon: <Network size={25} aria-hidden="true" />,
  },
  {
    title: "Engineering fundamentals",
    description: "Solving problems, verifying behavior, and keeping changes organized.",
    items: ["Algorithms", "Testing", "Git"],
    link: "/projects#wolfenstein-3d",
    linkLabel: "Engineering projects",
    icon: <FlaskConical size={25} aria-hidden="true" />,
  },
];

export default function Skills() {
  return (
    <section id="skills" className="toolbox page-width" aria-labelledby="toolbox-title">
      <div className="section-heading">
        <h2 id="toolbox-title">Skills & tools.</h2>
        <p>Backend development, systems, and problem solving. Here’s what I bring to the work.</p>
      </div>
      <HoverEffect items={groups.map((group) => ({
        title: group.title,
        link: group.link,
        content: (
          <>
            <div className="skill-category-icon">{group.icon}</div>
            <h3>{group.title}</h3>
            <ul className="skill-list">{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
            <p className="skill-description">{group.description}</p>
            <span className="skill-project-link">{group.linkLabel}<ArrowUpRight size={17} aria-hidden="true" /></span>
          </>
        ),
      }))} />
    </section>
  );
}
