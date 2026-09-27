import { renderOgImage, OG_SIZE } from "@/lib/og-render";

export const size = OG_SIZE;
export const contentType = "image/png";
export const alt = "Rupaya — the reputation stake for AI agents";

export default async function Image() {
  return renderOgImage({
    eyebrow: "pre-bond · Base",
    title: "Agents can already pay each other. They still have nothing to lose.",
    subtitle:
      "RUPX is the stake that gives them one — a reputation bond an AI agent locks against its onchain identity.",
  });
}
