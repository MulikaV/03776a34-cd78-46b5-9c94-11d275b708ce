import type { Metadata } from "next";
import { Inter_Tight, Press_Start_2P } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Pixel Arcade Store",
  description: "Create a simple, pixel-art themed single-page landing with basic sections and contact options."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${interTight.variable} antialiased bg-gradient-to-r from-[#FFE1A8] via-[#FFD1D1] to-[#E0E0FF]`}> 
        {children}
      </body>
    </html>
  );
}
