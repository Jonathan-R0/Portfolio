import { createPageMetadata } from "@/lib/seo";
import ProjectsPage from "@/components/pages/ProjectsPage";

export const metadata = createPageMetadata("/projects", "es");
export default function Page() {
  return <ProjectsPage locale="es" />;
}
