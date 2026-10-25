"use client";

// Adapted from Manu Arora / Aceternity UI: https://ui.aceternity.com/components/tooltip-card
// Portaled, viewport-clamped card; shared hover, keyboard and tap presentation.
import { createPortal } from "react-dom";
import { motion, useReducedMotion } from "framer-motion";

export function TooltipCard({
  id,
  title,
  context,
  description,
  anchor,
  onEnter,
  onLeave,
}: {
  id: string;
  title: string;
  context: string;
  description: string;
  anchor: DOMRect;
  onEnter: () => void;
  onLeave: () => void;
}) {
  const reduced = useReducedMotion();
  const width = Math.min(288, window.innerWidth - 32);
  const left = Math.max(
    16,
    Math.min(
      anchor.left + anchor.width / 2 - width / 2,
      window.innerWidth - width - 16,
    ),
  );
  const below = anchor.top < 230;
  return createPortal(
    <motion.div
      id={id}
      role="tooltip"
      className="tooltip-card"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      initial={{ opacity: reduced ? 1 : 0, y: reduced ? 0 : 5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: reduced ? 0 : 0.16 }}
      style={{
        width,
        left,
        top: below
          ? Math.min(anchor.bottom + 12, window.innerHeight - 210)
          : undefined,
        bottom: below ? undefined : window.innerHeight - anchor.top + 12,
      }}
    >
      <h3>{title}</h3>
      <p className="tooltip-context">{context}</p>
      <p>{description}</p>
    </motion.div>,
    document.body,
  );
}
