import type { Metadata } from "next";
import { Libre_Caslon_Display, Inter } from "next/font/google";
import "./globals.css";

const displayFont = Libre_Caslon_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cortina — Weaverville, North Carolina",
  description:
    "European-inspired residences on 37 acres in Weaverville, North Carolina.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${displayFont.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        {children}
      </body>
    </html>
  );
}
