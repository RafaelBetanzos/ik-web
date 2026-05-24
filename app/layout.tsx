import "./globals.css";
import localFont from "next/font/local";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";

/* ── Google fonts ── */
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

/* ── Local fonts ── */
const inter = localFont({
  src: [{ path: "../public/assets/fonts/Inter.ttf" }],
  variable: "--font-inter",
});

const merriweather = localFont({
  src: [{ path: "../public/assets/fonts/Merriweather.ttf" }],
  variable: "--font-merriweather",
});

const bambino = localFont({
  src: [{ path: "../public/assets/fonts/Bambino.ttf" }],
  variable: "--font-bambino",
});

export const metadata = {
  title: "Ik-Holcán",
  description:
    "Ik-Holcán — Bridging traditional herbal wisdom and modern bioinformatics for a healthier, more sustainable world.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${cormorant.variable} ${dmSans.variable} ${inter.variable} ${merriweather.variable} ${bambino.variable} font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
