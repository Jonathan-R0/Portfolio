import Hero from "@/components/Hero";
import { getMessages, type LocalizedProps } from "@/lib/messages";
import { localizeHref } from "@/lib/routing";
import LogoCarousel from "@/components/LogoCarousel";
import Skills from "@/components/Skills";
import Teaching from "@/components/Teaching";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Home({ locale }: LocalizedProps) {
  const { home } = getMessages(locale);
  return (
    <main id="main-content" tabIndex={-1}>
      <Hero locale={locale} />
      <Skills locale={locale} />
      <LogoCarousel />
      <Teaching locale={locale} />
      <section
        className="about-strip page-width"
        aria-labelledby="about-preview-title"
      >
        <h2 id="about-preview-title">
          {home.title}
          <br />
          {home.titleEnd}
        </h2>
        <div>
          <p>{home.intro}</p>
          <Link
            prefetch={false}
            href={localizeHref("/aboutme", locale)}
            className="text-link"
          >
            {home.about} <ArrowUpRight size={19} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
