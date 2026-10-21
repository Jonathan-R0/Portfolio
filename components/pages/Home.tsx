"use client";

import Hero from "@/components/Hero";
import { localizeHref, useI18n } from "@/lib/i18n";
import LogoCarousel from "@/components/LogoCarousel";
import Skills from "@/components/Skills";
import Teaching from "@/components/Teaching";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Home() {
  const { locale, messages: { home } } = useI18n();
  return (
    <main id="main-content" tabIndex={-1}>
      <Hero />
      <Skills />
      <LogoCarousel />
      <Teaching />
      <section className="about-strip page-width" aria-labelledby="about-preview-title">
        <h2 id="about-preview-title">{home.title}<br />{home.titleEnd}</h2>
        <div>
          <p>{home.intro}</p>
          <Link prefetch={false} href={localizeHref("/aboutme", locale)} className="text-link">{home.about} <ArrowUpRight size={19} aria-hidden="true" /></Link>
        </div>
      </section>
    </main>
  );
}
