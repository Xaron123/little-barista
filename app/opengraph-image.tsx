import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Little Barista — мобильный кейтеринг";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background:
            "linear-gradient(135deg, #0B0A09 0%, #1a1614 55%, #2A1B10 100%)",
          color: "#FAF7F1",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "rgba(250,247,241,0.7)",
          }}
        >
          <span>Little Barista</span>
          <span>Мобильный кейтеринг · 2018</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 118,
              lineHeight: 1,
              letterSpacing: "-0.04em",
              fontWeight: 300,
            }}
          >
            Фудтрак, который
          </div>
          <div
            style={{
              fontSize: 118,
              lineHeight: 1,
              letterSpacing: "-0.04em",
              fontStyle: "italic",
              color: "#E7D9C4",
              marginTop: 8,
              fontWeight: 400,
            }}
          >
            приезжает первым.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 26,
            color: "rgba(250,247,241,0.7)",
          }}
        >
          <span>Кино · Мероприятия · BTL</span>
          <span
            style={{
              background: "#E7D9C4",
              color: "#0B0A09",
              padding: "14px 26px",
              borderRadius: 999,
              fontSize: 22,
            }}
          >
            littlebarista.ru →
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
