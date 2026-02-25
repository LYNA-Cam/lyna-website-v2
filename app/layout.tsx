import type { Metadata } from "next";
import { Lexend, Lora } from "next/font/google";
import "./globals.css";

const lora = Lora({
  variable: "--lora",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const lexend = Lexend({
  variable: "--lexend",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.lyna.cam"),
  title: {
    template: "LYNA - Female Athlete Health | %s",
    default: "LYNA - Female Athlete Health",
  },
  description: "Period, Performance & Nutrition App for Active Women",
  icons: "/logo.svg",
  openGraph: {
    title: "LYNA - Female Athlete Health",
    description: "Period, Performance & Nutrition App for Active Women",
    url: "https://www.lyna.cam",
    siteName: "LYNA",
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
        alt: "LYNA - Female Athlete Health",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LYNA - Female Athlete Health",
    description: "Period, Performance & Nutrition App for Active Women",
    images: ["/preview.png"],
  },
};

import ScrollToTop from "@/components/utils/ScrollToTop";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${lora.variable} ${lexend.variable} antialiased`}
        suppressHydrationWarning
      >
        <ScrollToTop />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
