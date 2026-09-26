import { ChatWidget } from "@/components/chat/chat-widget";
import type { Metadata } from "next";
import { Bodoni_Moda, Cinzel, Great_Vibes, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});
const bodoniModa = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-bodoni",
  display: "swap",
});
const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-script",
  display: "swap",
  fallback: ["Alex Brush", "cursive"],
});
const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
});
export const metadata: Metadata = {
  title: "Sombra Coffee Lounge | Artisanal Roastery & Tasting Room",
  description: "Artisanal shade-grown single-origin coffee, master roast profiles, and intimate lounge ambiance.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${bodoniModa.variable} ${greatVibes.variable} ${cinzel.variable}`}>
      <body className="bg-ink font-sans text-text antialiased">
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}
