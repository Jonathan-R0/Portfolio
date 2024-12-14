"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProjectsPreview from "@/components/ProjectsPreview";
import Footer from "@/components/Footer";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-mono">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Hero />
        <Skills />
        <ProjectsPreview />
      </main>
      <Footer />
    </div>
  );
}
