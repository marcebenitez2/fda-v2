import { ImageResponse } from "next/og";

export const alt = "Club Domingo Matheu — Más de 80 años en Zona Sur de Rosario";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "72px 88px",
        color: "#fffaf0",
        background: "linear-gradient(135deg, #003b24 0%, #00633b 100%)",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", width: 780 }}>
        <div style={{ color: "#e3ac35", fontSize: 28, letterSpacing: 4 }}>
          ROSARIO · ZONA SUR
        </div>
        <div style={{ fontSize: 76, fontWeight: 800, lineHeight: 1.05, marginTop: 24 }}>
          Club Domingo Matheu
        </div>
        <div style={{ fontSize: 34, lineHeight: 1.3, marginTop: 28, opacity: 0.9 }}>
          Más de 80 años de deporte, familia y comunidad.
        </div>
      </div>
      <div
        style={{
          width: 210,
          height: 230,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "8px solid #e3ac35",
          borderRadius: "44% 44% 50% 50% / 20% 20% 70% 70%",
          color: "#e3ac35",
          fontSize: 94,
          fontWeight: 900,
        }}
      >
        +
      </div>
    </div>,
    size,
  );
}
