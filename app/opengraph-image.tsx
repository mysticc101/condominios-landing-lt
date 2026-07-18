import { ImageResponse } from "next/og";

export const alt = "Altum San Isidro, residencias privadas en Lima";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ alignItems: "stretch", background: "#11110f", color: "#f7f5ef", display: "flex", height: "100%", width: "100%" }}>
      <div style={{ background: "linear-gradient(115deg, #11110f 0%, #1a211b 64%, #687663 165%)", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "76px 82px", width: "100%" }}>
        <div style={{ color: "#b7c6af", display: "flex", fontSize: 18, letterSpacing: 6, textTransform: "uppercase" }}>Residencias privadas · San Isidro, Lima</div>
        <div style={{ display: "flex", flexDirection: "column" }}><div style={{ fontFamily: "serif", fontSize: 104, letterSpacing: -7, lineHeight: 0.84 }}>Altum</div><div style={{ fontFamily: "serif", fontSize: 48, letterSpacing: -3, marginTop: 28 }}>La vida no necesita ruido.</div></div>
        <div style={{ color: "#d1d3cb", display: "flex", fontSize: 24 }}>Doce residencias privadas · tres tipologías</div>
      </div>
    </div>,
    size
  );
}
