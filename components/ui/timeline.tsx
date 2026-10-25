"use client";

// Adapted from Aceternity UI's Timeline by Manu Arora.
// https://ui.aceternity.com/components/timeline
// Uses a semantic list and a transform-only blue scroll beam instead of measured heights.
import { motion, useReducedMotion, useScroll } from "framer-motion";
import { useRef, type ReactNode } from "react";

interface TimelineEntry {
  title: string;
  content: ReactNode;
}

export function Timeline({ data }: { data: TimelineEntry[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 55%"],
  });

  return (
    <div className="career-timeline" ref={ref}>
      <div className="timeline-track" aria-hidden="true">
        <motion.span
          className="timeline-beam"
          style={{ scaleY: reducedMotion ? 1 : scrollYProgress }}
        />
      </div>
      <ol>
        {data.map((entry) => (
          <li className="timeline-entry" key={entry.title}>
            <div className="timeline-date">
              <span className="timeline-node" aria-hidden="true" />
              <p>{entry.title}</p>
            </div>
            <div className="timeline-content">{entry.content}</div>
          </li>
        ))}
      </ol>
    </div>
  );
}
