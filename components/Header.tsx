"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { MagneticButton } from "@/components/ui/magnetic-button";

const links = [
  { href: "/", label: "Home" },
  { href: "/#skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/aboutme", label: "About" },
];

export default function Header() {
  const pathname = usePathname();
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
        <Link href="/" className="wordmark" aria-label="Jonathan Rosenblatt, home"><span className="monogram">JR<span>.</span></span><span className="wordmark-name">Jonathan<br />Rosenblatt</span></Link>
        <nav aria-label="Main navigation">
          {links.map(({ href, label }) => {
            const active = href === "/" ? pathname === href : pathname.startsWith(href);
            return <Link key={href} href={href} aria-current={active ? "page" : undefined}><span>{label}</span><ArrowRight size={15} aria-hidden="true" /></Link>;
          })}
        </nav>
        <MagneticButton className="resume-magnetic"><a className="resume-link" href="https://drive.google.com/file/d/1TqiDR9FA-7JP3-DO4ha2yrW4X3IyuRYO/view?usp=sharing" target="_blank" rel="noopener noreferrer">
          Resume <ArrowUpRight size={17} aria-hidden="true" />
        </a></MagneticButton>
        <div className="rail-note"><span>Backend developer</span><span>Computer Engineer · FIUBA</span><span>Buenos Aires, Argentina</span></div>
      </div>
    </header></>
  );
}
