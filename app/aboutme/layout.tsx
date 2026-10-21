import type { Metadata } from "next";
import en from "@/lib/locales/en.json";

export const metadata: Metadata = { title: en.common.about };

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
