"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, BadgeCheck, Clock3, Globe2, ShieldCheck, Star } from "lucide-react"
import { motion } from "framer-motion"
import heroImage from "../public/hero-generated.png"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const highlights = [
    "Respon cepat area Denpasar dan Bali sekitarnya",
    "Harga transparan sebelum perbaikan",
    "Cocok untuk rumah, kos, villa, dan bisnis kecil",
  ]

  return (
    <section id="beranda" className="w-full overflow-hidden pb-16 pt-3 md:pb-24 md:pt-4 lg:pb-28">
      <div className="container px-4 md:px-6">
        <div className="relative overflow-hidden rounded-[36px] border border-white/70 bg-gradient-to-br from-[#fffaf0] via-[#f7fbff] to-[#edf4fb] shadow-[0_28px_80px_rgba(15,34,64,0.12)] dark:border-[#304d74] dark:bg-gradient-to-br dark:from-[#081426] dark:via-[#0d203e] dark:to-[#16345a] dark:shadow-[0_32px_90px_rgba(8,18,34,0.34)]">
          <div className="absolute left-[-8%] top-10 h-64 w-64 rounded-full bg-[#f0cf72]/22 blur-3xl dark:bg-[#f0cf72]/18" />
          <div className="absolute right-[-8%] top-0 h-80 w-80 rounded-full bg-[#8cb4dd]/30 blur-3xl dark:bg-[#4d78ab]/30" />
          <div className="absolute bottom-[-10%] left-[35%] h-48 w-48 rounded-full bg-white/70 blur-3xl dark:bg-white/12" />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.72),rgba(255,255,255,0.14))] dark:bg-[linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))]" />

          <div className="relative grid items-center gap-8 px-6 py-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] lg:gap-12 lg:px-10 lg:py-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col justify-center space-y-4"
            >
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <span className="inline-flex items-center gap-2 rounded-full border border-[#d7b056]/35 bg-[#fff3cf] px-4 py-2 text-sm font-semibold text-[#9b7218] dark:border-[#e2ba59]/35 dark:bg-[#e2ba59]/12 dark:text-[#f1d98f]">
                    <Star className="h-4 w-4 fill-current" />
                    Service Microwave Denpasar
                  </span>
                </motion.div>

                <motion.h1
                  className="max-w-2xl font-[family:var(--font-display)] text-4xl uppercase leading-[0.95] tracking-[0.04em] text-[#102544] dark:text-[#f8fbff] sm:text-5xl lg:text-7xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  Cepat datang,
                  <span className="block text-[#d8aa42] dark:text-[#f0cf72]">rapi hasilnya.</span>
                </motion.h1>

                <motion.p
                  className="max-w-[620px] text-sm leading-7 text-slate-700 md:text-base dark:text-slate-100 lg:text-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  Layanan perbaikan microwave profesional di Denpasar dan area Bali. Cocok untuk warga lokal, expat,
                  villa manager, hingga usaha kuliner yang butuh teknisi cepat, komunikatif, dan hasil kerja yang
                  jelas.
                </motion.p>
              </div>

              <motion.div
                className="flex flex-col gap-3 sm:flex-row"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Button
                  asChild
                  size="lg"
                  className="rounded-full border border-[#f5df9d]/40 bg-gradient-to-r from-[#d2a13b] to-[#f0cf72] px-6 text-base font-semibold text-[#102544] shadow-[0_16px_32px_rgba(214,167,47,0.28)] hover:brightness-105"
                >
                  <Link href="#kontak" className="group">
                    Hubungi Sekarang
                    <motion.span initial={{ x: 0 }} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </motion.span>
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="rounded-full border-[#102544]/12 bg-white/75 text-[#102544] hover:bg-white hover:text-[#102544] dark:border-[#6e8db8] dark:bg-[#ffffff18] dark:text-white dark:hover:bg-[#ffffff24] dark:hover:text-white"
                >
                  <Link href="#layanan">Lihat Layanan</Link>
                </Button>
              </motion.div>

              <motion.div
                className="grid gap-3 pt-4 sm:grid-cols-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                {[
                  { icon: <Clock3 className="h-4 w-4" />, label: "Fast response", value: "Estimasi respon cepat" },
                  { icon: <ShieldCheck className="h-4 w-4" />, label: "Bergaransi", value: "Pekerjaan lebih tenang" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-[#102544]/10 bg-white/72 p-4 text-[#102544] shadow-[0_10px_30px_rgba(15,34,64,0.08)] backdrop-blur dark:border-[#5978a3] dark:bg-[#ffffff16] dark:text-white dark:shadow-none"
                  >
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#fff1c7] text-[#b88415] dark:bg-[#f0cf72]/16 dark:text-[#f0cf72]">
                      {item.icon}
                    </div>
                    <p className="text-sm font-semibold dark:text-white">{item.label}</p>
                    <p className="text-xs text-slate-600 dark:text-slate-100">{item.value}</p>
                  </div>
                ))}
              </motion.div>

              <div className="grid gap-2 pt-2">
                {highlights.map((text) => (
                  <div key={text} className="flex items-center gap-3 text-sm text-slate-700 dark:text-white">
                    <BadgeCheck className="h-4 w-4 text-[#f0cf72]" />
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="relative flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="absolute inset-0 -z-10 rounded-[36px] bg-[radial-gradient(circle_at_top,rgba(240,207,114,0.18),transparent_55%)]" />
              <div className="relative w-full max-w-lg overflow-hidden rounded-[32px] border border-white/70 bg-white/98 shadow-2xl dark:border-white/12">
                <div className="absolute inset-x-0 top-0 z-10 h-20 bg-gradient-to-b from-[#102544]/10 to-transparent" />
                <Image
                  src={heroImage}
                  alt="Teknisi service microwave profesional"
                  width={600}
                  height={600}
                  className="h-full w-full object-cover object-center"
                  priority
                />

                <motion.div
                  className="absolute left-4 top-4 z-20 rounded-2xl border border-slate-200 bg-white/92 p-3 shadow-xl backdrop-blur-sm"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  <div className="flex items-center gap-2">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#102544]">
                      <span className="text-xs font-bold text-[#f0cf72]">1h</span>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#f0cf72]">Respon cepat</p>
                      <p className="text-[11px] text-white">Siap atur kunjungan teknisi</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute bottom-4 right-4 z-20 rounded-2xl border border-slate-200 bg-white/92 p-3 shadow-xl backdrop-blur-sm"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                >
                  <div className="flex items-center gap-2">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f8edd0]">
                      <span className="text-xs font-bold text-[#b88415]">OK</span>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#f0cf72]">Hasil lebih jelas</p>
                      <p className="text-[11px] text-white">Estimasi dan garansi transparan</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
