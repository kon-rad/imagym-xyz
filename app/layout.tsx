import type { Metadata } from "next";
import { Bricolage_Grotesque, Newsreader } from "next/font/google";
import "./globals.css";

const sans = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const serif = Newsreader({ subsets: ["latin"], style: ["normal", "italic"], variable: "--font-serif", display: "swap" });

export const metadata: Metadata = {
  title: "Imagym: AI visualization for your future self",
  description:
    "Talk through the future you want with a live AI voice guide, then keep a personalized audio visualization you can replay any time. Free on the App Store for iPhone.",
  openGraph: {
    title: "Imagym: AI visualization for your future self",
    description: "Speak your future, hear it back, rehearse it until it feels real.",
    images: ["/screens/home.webp"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
