import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Cursor from "@/components/ui/cursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SINAN",
  description: "Sinan's Portfolio",
  viewport: "width=device-width, initial-scale=1.0",
  keywords: [
    "Sinan",
    "Portfolio",
    "Sinan Bh",
    "Sinan B H,",
    "sinanbh",
    "sinan-bh",
    "sinan bh",
    "sinan bh portfolio",
    "sinan portfolio",
    "full stack developer",
    "front-end developer",
    "back-end developer",
    "sinan bh portfolio",
    "sinan bh portfolio",
    "sinan bh portfolio",
    "sinan bh portfolio",
  ],
  openGraph: {
    title: "Sinan's Portfolio",
    description: "Sinan's Portfolio",
    images: [
      {
        url: "https://sinanbh.vercel.app/",
        width: 1200,
        height: 630,
        alt: "Sinan's Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sinan's Portfolio",
    description: "Sinan's Portfolio",
    images: ["https://sinanbh.vercel.app/"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    shortcut: "/favicon.ico",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <Cursor />
        <div>{children}</div>
      </body>
    </html>
  );
}
