import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects";
import { locales } from "@/lib/i18n";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://miventech.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = ["", "/projects"];
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const route of staticRoutes) {
      entries.push({
        url: `${SITE_URL}/${locale}${route}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: route === "" ? 1.0 : 0.8,
        alternates: {
          languages: {
            en: `${SITE_URL}/en${route}`,
            es: `${SITE_URL}/es${route}`,
          },
        },
      });
    }
    for (const project of projects) {
      entries.push({
        url: `${SITE_URL}/${locale}/projects/${project.slug}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.6,
        alternates: {
          languages: {
            en: `${SITE_URL}/en/projects/${project.slug}`,
            es: `${SITE_URL}/es/projects/${project.slug}`,
          },
        },
      });
    }
  }
  return entries;
}
