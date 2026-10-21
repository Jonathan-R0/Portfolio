"use client";

// Adapted from Manu Arora / Aceternity UI: https://ui.aceternity.com/components/pointer-highlight
import { motion, useInView, useReducedMotion } from "framer-motion";
import { MousePointer2 } from "lucide-react";
import { useRef, type ReactNode } from "react";

export function PointerHighlight({ children }: { children: ReactNode }) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const visible = useInView(ref, { once: true, amount: 0.8 });
  return <span ref={ref} className="pointer-highlight">
    {children}
    <motion.span aria-hidden="true" className="pointer-highlight-frame" initial={reduced ? false : { clipPath: "inset(0% 100% 100% 0%)" }}
      animate={{ clipPath: visible || reduced ? "inset(0% 0% 0% 0%)" : "inset(0% 100% 100% 0%)" }}
      transition={{ duration: reduced ? 0 : 0.65, ease: [0.16, 1, 0.3, 1] }} />
    <MousePointer2 className="pointer-highlight-icon" size={16} aria-hidden="true" />
  </span>;
}
