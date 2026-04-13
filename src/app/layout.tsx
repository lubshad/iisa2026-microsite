import type { Metadata } from "next";
import { Inter, Noto_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "IISA 2026 | International Symposium on Acoustics",
  description: "Advancing the frontiers of acoustics through collaborative innovation and academic excellence.",
  icons: {
    icon: [
      { url: "/iisa2026-white.svg", type: "image/svg+xml" },
    ],
    shortcut: "/iisa2026-white.svg",
    apple: "/iisa2026-white.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${notoSerif.variable} h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://lh3.googleusercontent.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-full font-body">
        {children}
      </body>
    </html>
  );
}
