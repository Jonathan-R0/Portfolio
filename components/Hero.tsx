import { ArrowUpRight, ArrowDown } from "lucide-react";
import { contactEmail } from "@/lib/contact";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { PointerHighlight } from "@/components/ui/pointer-highlight";

export default function Hero() {
  return (
    <section className="hero page-width" aria-labelledby="intro-title">
      <div className="hero-title-block">
        <h1 id="intro-title">Jonathan<br />Rosenblatt<span className="name-period">.</span></h1>
        <div className="hero-person"><p>Backend developer<br />& teaching assistant</p></div>
      </div>
      <div className="hero-thesis"><p>Software, from<br /><PointerHighlight>the inside out.</PointerHighlight></p><div className="hero-intro"><p>Backend systems, algorithms, and the tools that make them run. I’m a Computer Engineer who likes understanding what happens underneath.</p><MagneticButton><a className="text-link" href={`mailto:${contactEmail}`}>Let’s talk software <ArrowUpRight size={19} aria-hidden="true" /></a></MagneticButton></div></div>
      <div className="hero-register"><span>Computer Engineering · FIUBA</span><span>Buenos Aires, Argentina</span><a className="work-anchor" href="#skills">Explore the folio <ArrowDown size={17} aria-hidden="true" /></a></div>
    </section>
  );
}
