import Hero from "@/components/Hero";
import LogoCarousel from "@/components/LogoCarousel";
import Skills from "@/components/Skills";
import Teaching from "@/components/Teaching";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Home() {
  return (
    <main id="main-content" tabIndex={-1}>
      <Hero />
      <Skills />
      <LogoCarousel />
      <Teaching />
      <section className="about-strip page-width" aria-labelledby="about-preview-title">
        <h2 id="about-preview-title">Beyond the<br />implementation.</h2>
        <div>
          <p>Computer Engineering at FIUBA. A love for computing, abstract problems, and Linux.</p>
          <Link href="/aboutme" className="text-link">About me <ArrowUpRight size={19} aria-hidden="true" /></Link>
        </div>
      </section>
    </main>
  );
}
