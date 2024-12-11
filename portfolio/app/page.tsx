"use client";

import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProjectsPreview from "@/components/ProjectsPreview";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useSearchParams } from "next/navigation";
import Skills from "@/components/Skills";

export default function Home() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const scrollToContact = searchParams.get("scrollToContact");
    if (scrollToContact === "true") {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-mono">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Hero />
        <Skills />
        <ProjectsPreview />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
