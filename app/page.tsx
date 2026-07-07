"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProjectsPreview from "@/components/ProjectsPreview";
import Footer from "@/components/Footer";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="site-shell">
      <Header />
      <main className="content-shell">
        <Hero />
        <Skills />
        <ProjectsPreview />
      </main>
      <Footer />
    </div>
  );
}
