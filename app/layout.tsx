import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Service Microwave Denpasar",
  description:
    "Jasa service microwave terpercaya di Denpasar Bali. Teknisi handal, bergaransi, dan bisa panggilan ke rumah.",
  keywords: [
    "service microwave denpasar",
    "service microwave bali",
    "jasa service microwave",
    "perbaikan microwave",
    "panggilan service microwave",
    "service microwave terpercaya",
    "service microwave bergaransi",
    "jasa service microwave bali",
  ],
  robots: "index, follow",
  alternates: {
    canonical: "https://www.servicemicrowavedenpasar.com/",
  },
  openGraph: {
    title: "Service Microwave Denpasar - Cepat & Bergaransi",
    description: "Layanan perbaikan microwave profesional di Denpasar Bali",
    url: "https://www.servicemicrowavedenpasar.com",
    siteName: "Service Microwave Denpasar",
    images: [
      {
        url: "https://www.servicemicrowavedenpasar.com",
        width: 800,
        height: 600,
        alt: "Service Microwave Denpasar",
      },
    ],
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "Service Microwave Denpasar",
    description: "Service Microwave Panggilan Cepat dan Bergaransi di Bali",
    images: ["https://www.servicemicrowavedenpasar.com"],
  },
  icons: {
    icon: "/logo.png",
  },
  authors: [
    {
      name: "Service Microwave Denpasar",
      url: "https://www.servicemicrowavedenpasar.com",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

import "./globals.css";
