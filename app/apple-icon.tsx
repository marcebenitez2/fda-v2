import { ImageResponse } from "next/og";
import { escudoDataUrl } from "./_lib/escudo-data-url";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// Home-screen icon for iOS. Opaque background: iOS rounds the corners itself.
export default async function AppleIcon(): Promise<ImageResponse> {
  const logoSrc = await escudoDataUrl();

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#fbf4dc",
      }}
    >
      <img src={logoSrc} alt="" width={120} height={130} />
    </div>,
    size,
  );
}
