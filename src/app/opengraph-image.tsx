import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const fontData = await readFile(
    join(process.cwd(), "src/app/fonts/libre-caslon-display.woff"),
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#131313",
        }}
      >
        <svg width="88" height="66" viewBox="0 0 22 18" fill="none">
          <path
            d="M1 15L7 4L11 10L15 3L21 15"
            stroke="#B08D5B"
            strokeWidth="1.4"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        </svg>
        <div
          style={{
            marginTop: 28,
            display: "flex",
            fontFamily: "Libre Caslon Display",
            fontSize: 76,
            letterSpacing: 12,
            color: "#F5F2EC",
          }}
        >
          CORTINA
        </div>
        <div style={{ marginTop: 28, width: 64, height: 1, background: "#B08D5B" }} />
        <div
          style={{
            marginTop: 28,
            display: "flex",
            fontSize: 20,
            letterSpacing: 6,
            color: "#D4B787",
          }}
        >
          WEAVERVILLE, NORTH CAROLINA
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Libre Caslon Display",
          data: fontData,
          style: "normal",
          weight: 400,
        },
      ],
    },
  );
}
