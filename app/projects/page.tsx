import type { Metadata } from "next";
import Projects from "@/components/Projects";

export const metadata: Metadata = { title: "Projects" };

export default function ProjectsPage() {
  return <main id="main-content" tabIndex={-1} className="page-width inner-page"><div className="page-intro"><h1>Projects.</h1><p>Backend systems, games, and experiments.<br />A collection of things I’ve built.</p></div><Projects /></main>;
}
