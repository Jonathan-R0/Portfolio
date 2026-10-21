import type { MetadataRoute } from "next";
import { indexablePaths, siteUrl } from "@/lib/seo";
import { localizedPath } from "@/lib/routing";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return indexablePaths.map((path) => ({
    url: new URL(path, siteUrl).href,
    alternates: {
      languages: {
        en: new URL(localizedPath(path, "en"), siteUrl).href,
        es: new URL(localizedPath(path, "es"), siteUrl).href,
      },
    },
  }));
}
