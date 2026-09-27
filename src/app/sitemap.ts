import type { MetadataRoute } from "next";

const SITE_URL = "https://rupaya.io";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/pivot-statement", "/sunset-notice"];
  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
  }));
}
