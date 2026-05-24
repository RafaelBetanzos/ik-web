import "./globals.css";
import localFont from "next/font/local";

const inter = localFont({
  src: [
    {
      path: "../public/assets/fonts/Inter.ttf",
    },
  ],
  variable: "--font-inter",
});
const merriweather = localFont({
  src: [
    {
      path: "../public/assets/fonts/Merriweather.ttf",
    },
  ],
  variable: "--font-merriweather",
});
const bambino = localFont({
  src: [
    {
      path: "../public/assets/fonts/Bambino.ttf",
    },
  ],
  variable: "--font-bambino",
});

export const metadata = {
  title: "Ik-Holcán",
  description:
    "Ik-Holcán es una empresa dedicada a la investigación y desarrollo de productos cosméticos y fármacos naturales.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${merriweather.variable} ${bambino.variable} font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
