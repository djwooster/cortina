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
  title: "Cortina — North Carolina Mountains",
  description:
    "Twenty-two European-inspired residences on 36 acres in the North Carolina mountains.",
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
