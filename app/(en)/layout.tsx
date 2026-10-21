import SiteDocument from "@/components/SiteDocument";
import { createSiteMetadata } from "@/lib/seo";

export const metadata = createSiteMetadata("en");

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return <SiteDocument locale="en">{children}</SiteDocument>;
}
