import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { getCanonicalUrl } from "@/lib/metadata";

export const dynamic = "force-static";

const routes = ["", "/about", "/apps", "/privacy", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const localizedRoutes: MetadataRoute.Sitemap = routing.locales.flatMap((locale) =>
    routes.map((route) => ({
      url: getCanonicalUrl(`/${locale}${route}`),
      lastModified: new Date("2026-05-06"),
      changeFrequency: route === "" ? "monthly" : "yearly",
      priority: route === "" ? 1 : 0.7,
    })),
  );

  return [
    {
      url: getCanonicalUrl("/"),
      lastModified: new Date("2026-05-06"),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...localizedRoutes,
  ];
}
