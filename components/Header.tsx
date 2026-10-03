"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/#skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/aboutme", label: "About" },
];

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="site-header">
      <div className="page-width header-inner">
        <Link href="/" className="wordmark" aria-label="Jonathan Rosenblatt, home">Jonathan R.</Link>
        <nav aria-label="Main navigation">
          {links.map(({ href, label }) => {
            const active = href === "/" ? pathname === href : pathname.startsWith(href);
            return <Link key={href} href={href} aria-current={active ? "page" : undefined}>{label}</Link>;
          })}
        </nav>
        <a className="resume-link" href="https://drive.google.com/file/d/1TqiDR9FA-7JP3-DO4ha2yrW4X3IyuRYO/view?usp=sharing" target="_blank" rel="noopener noreferrer">
          Resume <ArrowUpRight size={17} aria-hidden="true" />
        </a>
      </div>
    </header>
  );
}
