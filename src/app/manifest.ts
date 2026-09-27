import type { MetadataRoute } from "next";
import { BRAND } from "@/lib/brand";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Rupaya",
    short_name: "Rupaya",
    description:
      "RUPX: the reputation stake for AI agents. In development on Base.",
    start_url: "/",
    display: "standalone",
    background_color: BRAND.ink,
    theme_color: BRAND.ink,
    icons: [
      { src: "/icons/192", sizes: "192x192", type: "image/png" },
      { src: "/icons/512", sizes: "512x512", type: "image/png" },
    ],
  };
}
