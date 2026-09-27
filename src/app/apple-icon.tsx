import { ImageResponse } from "next/og";
import { BRAND, MarkSvg } from "@/lib/brand";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default async function AppleIcon() {
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
        <MarkSvg size={108} color={BRAND.brass} />
      </div>
    ),
    { ...size }
  );
}
