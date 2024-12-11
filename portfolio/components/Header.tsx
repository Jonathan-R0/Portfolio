"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (pathname !== "/") {
      router.push("/");
      setTimeout(() => {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className="bg-gray-800 py-4 sticky top-0 z-50">
      <nav className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold fade-in">
            Jonathan-R0.dev
          </Link>
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
          <ul
            className={`md:flex space-y-2 md:space-y-0 md:space-x-4 ${
              isMenuOpen
                ? "block absolute top-full left-0 right-0 bg-gray-800 p-4"
                : "hidden md:block"
            }`}
          >
            <li>
              <Link
                href="/"
                className="hover:text-green-400 transition-colors slide-in-right"
                style={{ animationDelay: "0.1s" }}
              >
                🏠 Home
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="hover:text-green-400 transition-colors slide-in-right"
                style={{ animationDelay: "0.2s" }}
              >
                💼 Projects
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="hover:text-green-400 transition-colors slide-in-right"
                style={{ animationDelay: "0.3s" }}
              >
                📝 Blog
              </Link>
            </li>
            <li>
              <Link
                href="/aboutme"
                className="hover:text-green-400 transition-colors slide-in-right"
                style={{ animationDelay: "0.3s" }}
              >
                😁 About Me
              </Link>
            </li>
            <li>
              <a
                href="#contact"
                onClick={handleContactClick}
                className="hover:text-green-400 transition-colors slide-in-right"
                style={{ animationDelay: "0.4s" }}
              >
                📬 Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
