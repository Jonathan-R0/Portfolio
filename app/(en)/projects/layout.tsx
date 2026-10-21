import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata("/projects");

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
