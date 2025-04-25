"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import heroImage from "/public/hero.svg"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section id="beranda" className="w-full py-12 md:py-24 lg:py-32 overflow-hidden">
      <div className="container px-4 md:px-6 relative">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl opacity-70 dark:bg-blue-500/10" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl opacity-70 dark:bg-purple-500/10" />

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center space-y-4"
          >
            <div className="space-y-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <span className="inline-block px-3 py-1 text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 rounded-full mb-2">
                  Layanan Terpercaya #1
                </span>
              </motion.div>

              <motion.h1
                className="text-2xl font-bold tracking-tight sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Service Microwave Denpasar - Cepat & Terpercaya
              </motion.h1>

              <motion.p
                className="max-w-[600px] text-sm text-gray-500 dark:text-gray-400 md:text-base"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Layanan perbaikan microwave profesional dengan teknisi berpengalaman di seluruh Bali. Kami siap datang
                ke rumah Anda dalam waktu 1 jam!
              </motion.p>
            </div>

            <motion.div
              className="flex flex-col sm:flex-row gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
              >
                <Link href="#kontak" className="group">
                  Hubungi Sekarang
                  <motion.span initial={{ x: 0 }} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </motion.span>
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#layanan">Lihat Layanan</Link>
              </Button>
            </motion.div>

            <motion.div
              className="flex items-center gap-4 mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-background overflow-hidden bg-gray-200">
                    <Image
                      src={`https://i.pravatar.cc/200?img=${i}`}
                      alt={`User ${i}`}
                      width={32}
                      height={32}
                    />
                  </div>
                ))}
              </div>
              <div className="text-xs">
                <span className="font-medium">500+ pelanggan puas</span>
                <div className="text-gray-500 dark:text-gray-400">Bulan ini</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex items-center justify-center relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-3xl blur-xl opacity-70 -z-10" />
            <div className="relative w-full max-w-md overflow-hidden rounded-3xl shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 z-10" />
              <Image
                src={heroImage}
                alt="Teknisi Microwave"
                width={600}
                height={600}
                className="object-cover w-full h-full"
                priority
              />

              <motion.div
                className="absolute top-4 left-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm p-2 rounded-xl shadow-lg z-20"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-blue-600 text-xs font-bold">1h</span>
                  </div>
                  <div>
                    <p className="text-xs font-medium">Respon Cepat</p>
                    <p className="text-[10px] text-gray-500">Dalam 1 jam</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute bottom-4 right-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm p-2 rounded-xl shadow-lg z-20"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <span className="text-green-600 text-xs font-bold">1m</span>
                  </div>
                  <div>
                    <p className="text-xs font-medium">Garansi</p>
                    <p className="text-[10px] text-gray-500">Hingga 1 bulan</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
