import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Service Microwave Denpasar - Panggilan Cepat & Bergaransi",
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
    "jasa service microwave denpasar",
  ],
  robots: "index, follow",
  alternates: {
    canonical: "https://www.servicemicrowavedenpasar.com/",
  },
  openGraph: {
    title: "Service Microwave Denpasar - Panggilan Cepat & Bergaransi",
    description: "Layanan perbaikan microwave profesional di Denpasar Bali",
    url: "https://www.servicemicrowavedenpasar.com",
    siteName: "Service Microwave Denpasar - Panggilan Cepat & Bergaransi",
    images: [
      {
        url: "https://www.servicemicrowavedenpasar.com/logo.png",
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
    images: ["https://www.servicemicrowavedenpasar.com/logo.png"],
  },
  icons: {
    icon: "https://www.servicemicrowavedenpasar.com/logo.png",
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
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              url: "https://www.servicemicrowavedenpasar.com",
              logo: "https://www.servicemicrowavedenpasar.com/logo.png",
              name: "Service Microwave Denpasar",
              description:
                "Jasa service microwave terpercaya di Denpasar Bali. Teknisi handal dan bergaransi.",
            }),
          }} 
        />
      </Head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

import "./globals.css";
import Head from "next/head";
