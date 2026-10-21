import SiteDocument from "@/components/SiteDocument";
import { createSiteMetadata } from "@/lib/seo";

export const metadata = createSiteMetadata("es");

export default function SpanishLayout({ children }: { children: React.ReactNode }) {
  return <SiteDocument locale="es">{children}</SiteDocument>;
}
