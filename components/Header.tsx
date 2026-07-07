"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/blog", label: "Blog" },
    { href: "/aboutme", label: "About Me" },
  ];

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 py-3 backdrop-blur-xl">
      <nav className="container mx-auto max-w-6xl px-5 md:px-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="group text-sm font-semibold tracking-[0.24em] text-white fade-in md:text-base">
            Jonathan<span className="text-emerald-300 transition-colors group-hover:text-emerald-200">-R0</span>.dev
          </Link>
          <button
            className="glass-panel flex h-11 w-11 items-center justify-center rounded-full text-slate-100 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
          <ul
            className={`items-center gap-2 md:flex ${
              isMenuOpen
                ? "glass-panel absolute left-4 right-4 top-[calc(100%+0.75rem)] z-50 flex flex-col rounded-3xl p-3 transition-all duration-300 ease-in-out"
                : "hidden"
            }`}
          >
            {links.map((link, index) => {
              const isActive = pathname === link.href;

              return (
                <li key={link.href} className="w-full md:w-auto">
                  <Link
                    href={link.href}
                    className={`block rounded-full px-4 py-2 text-sm transition-all slide-in-right md:inline-flex ${
                      isActive
                        ? "bg-emerald-300 text-slate-950 shadow-lg shadow-emerald-950/40"
                        : "text-slate-300 hover:bg-white/10 hover:text-white"
                    }`}
                    style={{ animationDelay: `${(index + 1) * 0.1}s` }}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-950/60 transition-opacity duration-300 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </header>
  );
}
