import type { Metadata } from "next";
import Image from "next/image";
import SubjectsLeft from "@/components/SubjectsLeft";
import Skills from "@/components/Skills";
import AcademicJourney from "@/components/AcademicJourney";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = { title: "About" };

export default function AboutMe() {
  return (
    <main id="main-content" tabIndex={-1}>
      <section className="page-width inner-page about-page"><div className="page-intro"><h1>Curiosity,<br />compiled.</h1><p>I’m Jonathan David Rosenblatt, a software developer, Computer Engineer, and teaching assistant for Software Engineering I at FIUBA.</p></div>
        <div className="about-body"><figure className="portrait"><Image src="/profileimage.jpg" alt="Illustrated portrait of Jonathan Rosenblatt" width={400} height={400} unoptimized preload /><figcaption>Jonathan David Rosenblatt · Buenos Aires</figcaption></figure><div className="about-copy"><h2>At home with<br />abstract problems.</h2><p>I love computing and Linux. My interests span backend development, algorithms, and the systems underneath the software.</p><p>My everyday favorites include gcc and i3. The projects here range from APIs and data models to a multiplayer game and machine learning.</p><a className="text-link" href="https://github.com/Jonathan-R0" target="_blank" rel="noopener noreferrer">Explore my GitHub <ArrowUpRight size={19} aria-hidden="true" /></a><SubjectsLeft /></div></div>
      </section>
      <AcademicJourney />
      <Skills />
    </main>
  );
}
