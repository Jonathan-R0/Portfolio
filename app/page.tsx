import Hero from "@/components/Hero";
import ProjectsPreview from "@/components/ProjectsPreview";
import Skills from "@/components/Skills";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Home() {
  return (
    <main id="main-content" tabIndex={-1}>
      <Hero />
      <ProjectsPreview />
      <Skills />
      <section className="about-strip page-width" aria-labelledby="about-preview-title"><h2 id="about-preview-title">A little more<br />about the person.</h2><div><p>Computer Engineering at FIUBA. A love for computing, abstract problems, and Linux.</p><Link href="/aboutme" className="text-link">About me <ArrowUpRight size={19} aria-hidden="true" /></Link></div><Link href="/blog" className="text-link">Read my writing <ArrowUpRight size={19} aria-hidden="true" /></Link></section>
    </main>
  );
}
