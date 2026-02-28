import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EXODIA | Hybrid Trading Infrastructure",
  description:
    "High-performance crypto trading infrastructure with on-chain verification.",
};

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Web3Provider } from "@/components/providers/Web3Provider";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`min-h-screen flex flex-col font-sans`}>
        <Web3Provider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <SpeedInsights />
          <Analytics />
        </Web3Provider>
      </body>
    </html>
  );
}
