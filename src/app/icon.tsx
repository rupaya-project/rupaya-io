import { ImageResponse } from "next/og";
import { BRAND, MarkSvg } from "@/lib/brand";

export function generateImageMetadata() {
  return [
    { id: "16", size: { width: 16, height: 16 }, contentType: "image/png" },
    { id: "32", size: { width: 32, height: 32 }, contentType: "image/png" },
    { id: "48", size: { width: 48, height: 48 }, contentType: "image/png" },
  ];
}

export default async function Icon({ id }: { id: Promise<string> }) {
  const size = Number(await id);
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: BRAND.ink,
        }}
      >
        <MarkSvg size={Math.round(size * 0.72)} color={BRAND.brass} />
      </div>
    ),
    { width: size, height: size }
  );
}
