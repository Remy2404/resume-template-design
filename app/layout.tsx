import type React from "react";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["400", "600", "700", "900"],
});

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  ),
  title: "Professional Resume - Phon Ramy",
  description: "Full-Stack Developer Resume with Modern Design",
  icons: {
    icon: "/Icon.png?v=1",
    shortcut: "/Icon.png?v=1",
    apple: "/Icon.png?v=1",
  },
  openGraph: {
    title: "Phon Ramy - Full-Stack Developer",
    description:
      "Professional resume showcasing full-stack development expertise",
    images: ["/Icon.png?v=1"],
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
      className={`${montserrat.variable} ${openSans.variable} antialiased`}
    >
      <body className="font-sans">{children}</body>
    </html>
  );
}
