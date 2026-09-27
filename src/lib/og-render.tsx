import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { BRAND, MarkSvg } from "@/lib/brand";

export const OG_SIZE = { width: 1200, height: 630 };

let fontsPromise: Promise<
  { name: string; data: ArrayBuffer; weight: 400 | 700; style: "normal" }[]
> | null = null;

function loadFonts() {
  if (!fontsPromise) {
    fontsPromise = Promise.all([
      readFile(join(process.cwd(), "src/fonts/SourceSerif4-Bold.ttf")),
      readFile(join(process.cwd(), "src/fonts/SourceSerif4-Regular.ttf")),
      readFile(join(process.cwd(), "src/fonts/JetBrainsMono-Medium.ttf")),
    ]).then(([bold, regular, mono]) => [
      {
        name: "Source Serif 4",
        data: bold.buffer.slice(
          bold.byteOffset,
          bold.byteOffset + bold.byteLength
        ) as ArrayBuffer,
        weight: 700 as const,
        style: "normal" as const,
      },
      {
        name: "Source Serif 4",
        data: regular.buffer.slice(
          regular.byteOffset,
          regular.byteOffset + regular.byteLength
        ) as ArrayBuffer,
        weight: 400 as const,
        style: "normal" as const,
      },
      {
        name: "JetBrains Mono",
        data: mono.buffer.slice(
          mono.byteOffset,
          mono.byteOffset + mono.byteLength
        ) as ArrayBuffer,
        weight: 400 as const,
        style: "normal" as const,
      },
    ]);
  }
  return fontsPromise;
}

export async function renderOgImage({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  const fonts = await loadFonts();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: BRAND.ink,
          padding: "72px 76px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <MarkSvg size={40} color={BRAND.paper} />
          <span
            style={{
              fontFamily: "JetBrains Mono",
              fontSize: 22,
              color: BRAND.mist,
              letterSpacing: 1,
            }}
          >
            rupaya.io
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            style={{
              fontFamily: "JetBrains Mono",
              fontSize: 24,
              color: BRAND.brass,
              marginBottom: 20,
            }}
          >
            {eyebrow}
          </span>
          <span
            style={{
              fontFamily: "Source Serif 4",
              fontWeight: 700,
              fontSize: 56,
              lineHeight: 1.15,
              color: BRAND.paper,
              maxWidth: 980,
            }}
          >
            {title}
          </span>
          {subtitle ? (
            <span
              style={{
                fontFamily: "Source Serif 4",
                fontWeight: 400,
                fontSize: 28,
                lineHeight: 1.4,
                color: BRAND.mist,
                marginTop: 24,
                maxWidth: 900,
              }}
            >
              {subtitle}
            </span>
          ) : null}
        </div>
      </div>
    ),
    { ...OG_SIZE, fonts }
  );
}
