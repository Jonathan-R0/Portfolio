"use client";

// Shared-background technique from Aceternity Card Hover Effect.
// https://ui.aceternity.com/components/card-hover-effect
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState, type ReactNode } from "react";

export function ProjectHoverRow({
  id,
  titleId,
  children,
}: {
  id: string;
  titleId: string;
  children: ReactNode;
}) {
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const active = hovered || focused;
  const reduced = useReducedMotion();
  return (
    <article
      className="project-entry"
      id={id}
      aria-labelledby={titleId}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget))
          setFocused(false);
      }}
    >
      <AnimatePresence initial={false}>
        {active ? (
          <motion.span
            className="project-hover-background"
            aria-hidden="true"
            layoutId={reduced ? undefined : "project-row-highlight"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduced ? 0 : 0.18 }}
          />
        ) : null}
      </AnimatePresence>
      {children}
    </article>
  );
}
