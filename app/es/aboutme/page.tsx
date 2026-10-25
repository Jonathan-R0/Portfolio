import { createPageMetadata } from "@/lib/seo";
import AboutMe from "@/components/pages/AboutMe";

export const metadata = createPageMetadata("/aboutme", "es");
export default function Page() {
  return <AboutMe locale="es" />;
}
