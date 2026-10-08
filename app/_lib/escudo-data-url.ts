import { readFile } from "node:fs/promises";
import { join } from "node:path";

// The club shield as a data URL, for images generated with ImageResponse.
export async function escudoDataUrl(): Promise<string> {
  const svg = await readFile(
    join(process.cwd(), "public/escudo-limpio.svg"),
    "base64",
  );
  return `data:image/svg+xml;base64,${svg}`;
}
