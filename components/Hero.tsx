import { ArrowUpRight, ArrowDown } from "lucide-react";
import { contactEmail } from "@/lib/contact";

export default function Hero() {
  return (
    <section className="hero page-width" aria-labelledby="intro-title">
      <h1 id="intro-title">Jonathan<br />Rosenblatt<span className="name-period">.</span></h1>
      <div className="hero-bottom">
        <div className="hero-identity"><p>Backend developer & teaching assistant</p><span>Computer Engineering · FIUBA<br />Buenos Aires, Argentina</span></div>
        <div className="hero-intro"><p>Software, from the inside out. My work spans backend systems, algorithms, and the tools that make them run.</p>
          <a className="text-link" href={`mailto:${contactEmail}`}>Get in touch <ArrowUpRight size={19} aria-hidden="true" /></a>
        </div>
        <a className="work-anchor" href="#skills">Explore my skills <ArrowDown size={19} aria-hidden="true" /></a>
      </div>
    </section>
  );
}
