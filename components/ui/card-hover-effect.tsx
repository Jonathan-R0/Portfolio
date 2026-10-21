"use client";

// Adapted from Aceternity UI's Card Hover Effect by Manu Arora.
// https://ui.aceternity.com/components/card-hover-effect
// Keeps the shared-layout highlight; adds keyboard focus and reduced-motion support.
import Link from "next/link";
import { AnimatePresence, LayoutGroup, motion, useReducedMotion } from "framer-motion";
import { useId, useState, type ReactNode } from "react";

interface HoverItem {
  title: string;
  link: string;
  content: ReactNode;
}

export function HoverEffect({ items }: { items: HoverItem[] }) {
  const [active, setActive] = useState<number | null>(null);
  const reducedMotion = useReducedMotion();
  const groupId = useId();

  return (
    <LayoutGroup id={groupId}>
      <div className="skill-hover-grid">
        {items.map((item, index) => (
          <Link
            key={item.title}
            href={item.link}
            target={item.link.startsWith("https://") ? "_blank" : undefined}
            rel={item.link.startsWith("https://") ? "noopener noreferrer" : undefined}
            className="skill-hover-item"
            onMouseEnter={() => setActive(index)}
            onMouseLeave={() => setActive(null)}
            onFocus={() => setActive(index)}
            onBlur={() => setActive(null)}
          >
            <AnimatePresence initial={false}>
              {active === index ? (
                <motion.span
                  aria-hidden="true"
                  className="skill-hover-background"
                  layoutId={reducedMotion ? undefined : "skill-highlight"}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: reducedMotion ? 0 : 0.2 }}
                />
              ) : null}
            </AnimatePresence>
            <div className="skill-card-content">{item.content}</div>
          </Link>
        ))}
      </div>
    </LayoutGroup>
  );
}
