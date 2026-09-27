import { ImageResponse } from "next/og";
import { BRAND, MarkSvg } from "@/lib/brand";

const ALLOWED_SIZES = [192, 512];

export function generateStaticParams() {
  return ALLOWED_SIZES.map((size) => ({ size: String(size) }));
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ size: string }> }
) {
  const { size: sizeParam } = await params;
  const size = ALLOWED_SIZES.includes(Number(sizeParam))
    ? Number(sizeParam)
    : 512;

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
        <MarkSvg size={Math.round(size * 0.6)} color={BRAND.brass} />
      </div>
    ),
    { width: size, height: size }
  );
}
