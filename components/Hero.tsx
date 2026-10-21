"use client";

import { ArrowUpRight, ArrowDown } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { contactEmail } from "@/lib/contact";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { PointerHighlight } from "@/components/ui/pointer-highlight";

export default function Hero() {
  const { messages: { hero, common } } = useI18n();
  return (
    <section className="hero page-width" aria-labelledby="intro-title">
      <div className="hero-title-block">
        <h1 id="intro-title">Jonathan<br />Rosenblatt<span className="name-period">.</span></h1>
        <div className="hero-person"><p>{hero.role}<br />{hero.teaching}</p></div>
      </div>
      <div className="hero-thesis"><p>{hero.thesis}{" "}<br /><PointerHighlight>{hero.highlight}</PointerHighlight></p><div className="hero-intro"><p>{hero.intro}</p><MagneticButton><a className="text-link" href={`mailto:${contactEmail}`}>{hero.contact} <ArrowUpRight size={19} aria-hidden="true" /></a></MagneticButton></div></div>
      <div className="hero-register"><span>{hero.degree}</span><span>{common.location}</span><a className="work-anchor" href="#skills">{hero.explore} <ArrowDown size={17} aria-hidden="true" /></a></div>
    </section>
  );
}
