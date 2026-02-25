'use client';

import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/hooks/useLanguage";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <title>.latino — The Internet&apos;s New Home for Latino Identity</title>
        <meta name="description" content="Claim your .latino domain. The new top-level domain built for the global Latino community — businesses, creators, and organizations. Coming soon." />
        <meta property="og:title" content=".latino — Your Culture. Your Domain." />
        <meta property="og:description" content="The new top-level domain for the global Latino community. Coming soon." />
        <meta property="og:image" content="/images/og-image.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://get.latino" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content=".latino — Your Culture. Your Domain." />
        <meta name="twitter:description" content="The new TLD for the global Latino community. Coming soon." />
        <meta name="twitter:image" content="/images/og-image.jpg" />
      </head>
      <body
        className={`${playfair.variable} ${dmSans.variable} font-body antialiased relative`}
      >
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
