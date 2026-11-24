import type { Metadata } from "next";
import { Bricolage_Grotesque, Newsreader } from "next/font/google";
import "./globals.css";

const sans = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const serif = Newsreader({ subsets: ["latin"], style: ["normal", "italic"], variable: "--font-serif", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://imagym.xyz"),
  title: "Imagym: Make your future feel real",
  description:
    "Describe a future moment in your own words. Imagym turns it into a personal guided visualization you can listen to again.",
  openGraph: {
    title: "Imagym: Make your future feel real",
    description: "Describe your future, hear it back, and return to the moment.",
    images: ["/screens/reskin/home.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
