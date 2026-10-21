import type { Metadata } from "next";
import Projects from "@/components/Projects";

export const metadata: Metadata = { title: "Projects" };

export default function ProjectsPage() {
  return <main id="main-content" tabIndex={-1} className="page-width inner-page projects-page"><div className="page-intro"><h1>The project<br />collection<span className="name-period">.</span></h1><p>Backend systems, games, and experiments. Six projects, from data models and APIs to local multiplayer and machine learning.</p></div><Projects /></main>;
}
