"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { localizeHref, useI18n } from "@/lib/i18n";
import LanguageSwitcher from "./LanguageSwitcher";

const links = [
  { href: "/", label: "home" },
  { href: "/#skills", label: "skills" },
  { href: "/projects", label: "projects" },
  { href: "/aboutme", label: "about" },
] as const;

export default function Header() {
  const pathname = usePathname();
  const { locale, messages: { common } } = useI18n();
  // Aceternity Resizable Navbar adaptation: solid compact mobile index, desktop rail unchanged.
  const marker = useRef<HTMLSpanElement>(null);
  const [compact, setCompact] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setCompact(!entry.isIntersecting));
    if (marker.current) observer.observe(marker.current);
    return () => observer.disconnect();
  }, []);
  return (
    <><span ref={marker} className="nav-scroll-marker" aria-hidden="true" /><header className="site-header" data-compact={compact}>
      <div className="page-width header-inner">
        <Link href={localizeHref("/", locale)} className="wordmark" aria-label={common.homeLabel}><span className="monogram">JR<span>.</span></span><span className="wordmark-name">Jonathan<br />Rosenblatt</span></Link>
        <nav aria-label={common.navigation}>
          {links.map(({ href, label }) => {
            const active = href === "/" ? pathname === href : pathname.startsWith(href);
            return <Link key={href} href={localizeHref(href, locale)} aria-current={active ? "page" : undefined}><span>{common[label]}</span><ArrowRight size={15} aria-hidden="true" /></Link>;
          })}
        </nav>
        <div className="header-actions"><LanguageSwitcher /><MagneticButton className="resume-magnetic"><a className="resume-link" href="https://drive.google.com/file/d/1TqiDR9FA-7JP3-DO4ha2yrW4X3IyuRYO/view?usp=sharing" target="_blank" rel="noopener noreferrer">
          {common.resume} <ArrowUpRight size={17} aria-hidden="true" />
        </a></MagneticButton></div>
        <div className="rail-note"><span>{common.backend}</span><span>{common.engineer}</span><span>{common.location}</span></div>
      </div>
    </header></>
  );
}
