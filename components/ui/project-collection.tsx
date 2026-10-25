"use client";

import { LayoutGroup } from "framer-motion";
import type { ReactNode } from "react";

export function ProjectCollection({ children }: { children: ReactNode }) {
  return (
    <LayoutGroup id="project-collection">
      <div className="project-grid">{children}</div>
    </LayoutGroup>
  );
}
