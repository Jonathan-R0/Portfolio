"use client";

// Aceternity Expandable Card adaptation: inline disclosure rather than an image-led modal.
// https://ui.aceternity.com/components/expandable-card
import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export function ExpandableCard({ title, focus, notes }: { title: string; focus: string; notes: string[] }) {
  const [open, setOpen] = useState(false);
  const reduced = useReducedMotion();
  return <motion.details className="project-details" layout={reduced ? false : "position"}
    onToggle={(event) => setOpen(event.currentTarget.open)}>
    <summary>Project notes <ChevronDown size={15} aria-hidden="true" /><span className="sr-only"> for {title}</span></summary>
    <motion.div className="project-details-body" initial={false} animate={{ opacity: open ? 1 : 0 }} transition={{ duration: reduced ? 0 : 0.18 }}>
      <h3>{focus}</h3>{notes.map((note) => <p key={note}>{note}</p>)}
    </motion.div>
  </motion.details>;
}
