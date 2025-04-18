import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SERVICE MICROWAVE DENPASAR - Panggilan Cepat & Bergaransi",
  description: "Service Microwave Denpasar | Perbaikan cepat, bergaransi, dan profesional untuk seluruh wilayah Bali.",
  keywords: ["service microwave denpasar", "perbaikan microwave denpasar", "jasa service microwave bali"],
  robots: "index, follow",
  alternates: {
    canonical: "https://www.servicemicrowavedenpasar.com/",
  },
  icons: {
    icon: "/logo.png",
  },
  authors: [
    {
      name: "Service Microwave Denpasar",
      url: "https://www.servicemicrowavedenpasar.com/",
    }
  ]
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'