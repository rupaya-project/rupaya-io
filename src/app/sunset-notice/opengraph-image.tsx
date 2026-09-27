import { renderOgImage, OG_SIZE } from "@/lib/og-render";

export const size = OG_SIZE;
export const contentType = "image/png";
export const alt = "Sunset notice — Rupaya";

export default async function Image() {
  return renderOgImage({
    eyebrow: "notice",
    title:
      "Rupaya is retiring three generations of its own blockchain, plus legacy RUPX contracts.",
    subtitle:
      "None of it is being migrated. No swap, no claims process, no implied continuity.",
  });
}
