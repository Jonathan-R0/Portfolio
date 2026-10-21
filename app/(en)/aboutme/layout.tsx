import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata("/aboutme");

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
