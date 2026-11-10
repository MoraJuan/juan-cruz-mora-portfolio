import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const alt = `${site.name} — Full-Stack AI Engineer · San Juan, Argentina`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#F7F7F5",
          backgroundImage:
            "radial-gradient(ellipse 70% 50% at 80% 0%, rgba(26,74,92,0.08), transparent 55%)",
          padding: "64px 72px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 72,
            height: 72,
            borderRadius: 18,
            background: "#143d4d",
            color: "#F7F7F5",
            fontSize: 40,
            fontWeight: 600,
          }}
        >
          J
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 18,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 22,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#4a4a47",
            }}
          >
            Portfolio
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 72,
              lineHeight: 1.05,
              fontWeight: 500,
              color: "#0e0e0e",
              letterSpacing: "-0.03em",
            }}
          >
            {site.name}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 34,
              color: "#143d4d",
            }}
          >
            {site.role}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 8,
              fontSize: 24,
              color: "#4a4a47",
              maxWidth: 820,
              lineHeight: 1.4,
            }}
          >
            {`Full-stack products, APIs, and agent orchestration · ${site.location}`}
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
