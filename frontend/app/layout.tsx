import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],

  weight: ["400", "500", "600", "700"],

  weight: ["500", "600"],

});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "DreamSpace AI | Redesign Your Space",
  description:

    "Discover curated interior design styles and transform your room with AI-powered redesigns.",

    "Upload your room image and transform it into your dream space in seconds with curated AI interior design styles.",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${playfair.variable} ${inter.variable} min-h-full font-body antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
