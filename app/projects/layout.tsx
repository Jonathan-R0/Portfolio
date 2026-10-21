import type { Metadata } from "next";
import en from "@/lib/locales/en.json";

export const metadata: Metadata = { title: en.common.projects };

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
