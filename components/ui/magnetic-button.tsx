"use client";

// Adapted from Manu Arora / Aceternity UI: https://ui.aceternity.com/components/magnetic-button
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { useRef, type ReactNode, type PointerEvent } from "react";

export function MagneticButton({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduced = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 220, damping: 24 });
  const springY = useSpring(y, { stiffness: 220, damping: 24 });
  const reset = () => { x.set(0); y.set(0); };

  function move(event: PointerEvent<HTMLSpanElement>) {
    if (reduced || event.pointerType !== "mouse" || ref.current?.contains(document.activeElement)) return;
    const box = event.currentTarget.getBoundingClientRect();
    x.set(Math.max(-4, Math.min(4, (event.clientX - box.left - box.width / 2) * 0.12)));
    y.set(Math.max(-4, Math.min(4, (event.clientY - box.top - box.height / 2) * 0.12)));
  }

  return <span ref={ref} className={`magnetic-target ${className}`} onPointerMove={move} onPointerLeave={reset} onFocusCapture={reset}>
    <motion.span className="magnetic-content" style={{ x: reduced ? 0 : springX, y: reduced ? 0 : springY }}>{children}</motion.span>
  </span>;
}
