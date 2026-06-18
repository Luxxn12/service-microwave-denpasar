"use client"

import { useRef } from "react"
import { Zap, Settings, PenToolIcon as Tool, Cpu, RefreshCw, Shield, Wrench, MessageSquare } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const services = [
    {
      icon: <Settings className="h-8 w-8 text-[#102544] sm:h-10 sm:w-10" />,
      title: "Service Microwave Digital & Manual",
      description: "Perbaikan untuk semua jenis microwave digital maupun manual dari berbagai merek.",
      color: "from-[#102544] to-[#1f4976]",
    },
    {
      icon: <Zap className="h-8 w-8 text-[#b88415] sm:h-10 sm:w-10" />,
      title: "Ganti Magnetron",
      description: "Penggantian magnetron yang rusak dengan suku cadang asli dan berkualitas.",
      color: "from-[#c7921b] to-[#f0cf72]",
    },
    {
      icon: <Tool className="h-8 w-8 text-[#22456f] sm:h-10 sm:w-10" />,
      title: "Ganti Fuse",
      description: "Penggantian sekring yang putus dengan cepat dan aman.",
      color: "from-[#22456f] to-[#3e6b99]",
    },
    {
      icon: <Cpu className="h-8 w-8 text-[#ba8520] sm:h-10 sm:w-10" />,
      title: "Perbaikan PCB",
      description: "Perbaikan papan sirkuit elektronik dengan teknologi terkini.",
      color: "from-[#c08b1b] to-[#eac45e]",
    },
    {
      icon: <RefreshCw className="h-8 w-8 text-[#102544] sm:h-10 sm:w-10" />,
      title: "Ganti Kaca / Pintu Microwave",
      description: "Penggantian kaca atau pintu microwave yang rusak atau retak.",
      color: "from-[#102544] to-[#2a5b90]",
    },
    {
      icon: <Shield className="h-8 w-8 text-[#b88415] sm:h-10 sm:w-10" />,
      title: "Pembersihan & Maintenance",
      description: "Pembersihan menyeluruh dan perawatan rutin untuk memperpanjang umur microwave.",
      color: "from-[#bb8719] to-[#f0cf72]",
    },
    {
      icon: <Wrench className="h-8 w-8 text-[#22456f] sm:h-10 sm:w-10" />,
      title: "Perbaikan Listrik Tidak Menyala",
      description: "Mengatasi masalah microwave yang tidak menyala atau tidak berfungsi.",
      color: "from-[#22456f] to-[#3a6897]",
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-[#b88415] sm:h-10 sm:w-10" />,
      title: "Konsultasi Gratis",
      description: "Konsultasi gratis untuk masalah microwave Anda sebelum melakukan perbaikan.",
      color: "from-[#c08b1b] to-[#f0cf72]",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section
      id="layanan"
      className="relative w-full overflow-hidden bg-[#f8fbff]/65 py-12 md:py-24 lg:py-32 dark:bg-slate-950/20"
    >
      <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-[#f0cf72]/16 blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-[#12315c]/10 blur-3xl -z-10" />

      <div className="container px-4 md:px-6" ref={ref}>
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-2">
            <div className="mb-2 inline-block rounded-full border border-[#d6a72f]/25 bg-[#fff6dc] px-4 py-1 text-sm font-semibold text-[#9f7514] dark:bg-[#18273d] dark:text-[#f0cf72]">
              Layanan Kami
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter">Jenis Layanan</h2>
            <p className="max-w-[900px] text-sm text-slate-600 dark:text-slate-300 sm:text-base md:text-lg">
              Kami menyediakan berbagai layanan perbaikan microwave untuk mengatasi semua jenis kerusakan.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mt-12"
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full overflow-hidden rounded-[28px] border border-white/60 bg-white/92 shadow-[0_18px_48px_rgba(15,34,64,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,34,64,0.16)] dark:border-white/10 dark:bg-slate-900/88">
                <div className={`h-1.5 w-full bg-gradient-to-r ${service.color}`} />
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <div className="rounded-2xl bg-slate-50 p-3 dark:bg-slate-800">{service.icon}</div>
                  <CardTitle className="text-base sm:text-lg md:text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm text-slate-600 dark:text-slate-300 sm:text-base md:text-lg">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
