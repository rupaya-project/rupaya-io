import { renderOgImage, OG_SIZE } from "@/lib/og-render";

export const size = OG_SIZE;
export const contentType = "image/png";
export const alt = "Pivot statement — Rupaya";

export default async function Image() {
  return renderOgImage({
    eyebrow: "pivot",
    title:
      "Rupaya is rebuilding RUPX as the reputation bond for autonomous AI agents.",
    subtitle:
      "x402 gives agents a way to pay. ERC-8004 gives them an identity. RUPX gives them something to lose.",
  });
}
