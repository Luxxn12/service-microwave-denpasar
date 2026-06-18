"use client"

import Image from "next/image"
import { CheckCircle, Shield, Clock, Gem } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import heroIcon from "../public/8.png"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const features = [
    {
      icon: <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />,
      title: "Teknisi Berpengalaman",
      description: "Tim kami terdiri dari teknisi bersertifikat dengan pengalaman lebih dari 10 tahun.",
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />,
      title: "Garansi Perbaikan",
      description: "Kami memberikan garansi untuk setiap perbaikan yang kami lakukan.",
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />,
      title: "Layanan Cepat",
      description: "Respon cepat dalam 1 jam dan penyelesaian perbaikan di hari yang sama.",
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />,
      title: "Harga Transparan",
      description: "Tidak ada biaya tersembunyi. Kami memberikan estimasi biaya sebelum memulai perbaikan.",
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
    <section id="tentang" className="relative w-full overflow-hidden py-14 md:py-24 lg:py-28">
      <div className="absolute right-0 top-12 h-56 w-56 rounded-full bg-[#f0cf72]/18 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-56 w-56 rounded-full bg-[#214574]/12 blur-3xl" />

      <div className="container px-4 md:px-6" ref={ref}>
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-2">
            <div className="mb-2 inline-block rounded-full border border-[#d6a72f]/25 bg-[#fff6dc] px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#9f7514] dark:bg-[#18273d] dark:text-[#f0cf72]">
              Tentang Kami
            </div>
            <h2 className="text-xl font-bold tracking-tight sm:text-2xl md:text-4xl">
              Teknisi yang rapi, cepat, dan enak diajak komunikasi
            </h2>
            <p className="max-w-[900px] text-sm text-slate-600 dark:text-slate-300 sm:text-base md:text-lg">
              Kami melayani perbaikan microwave berbagai merek di Bali dengan pendekatan yang lebih profesional:
              diagnosa jelas, pengerjaan rapi, dan komunikasi yang nyaman untuk pelanggan Indonesia maupun tamu asing.
            </p>
          </div>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2 mt-12">
          <motion.div
            className="flex items-center justify-center relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="absolute inset-0 -z-10 rounded-[34px] bg-gradient-to-br from-[#102544]/10 via-[#f0cf72]/10 to-white blur-xl" />
            <div className="relative overflow-hidden rounded-[30px] border border-white/50 bg-white shadow-[0_22px_50px_rgba(18,34,64,0.12)] dark:border-white/10 dark:bg-slate-900">
              <Image
                src={heroIcon}
                alt="Tim Teknisi"
                width={500}
                height={500}
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col justify-center space-y-6"
            variants={container}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
          >
            <motion.div variants={item}>
              <h3 className="text-lg font-bold sm:text-xl">Mengapa banyak pelanggan memilih kami?</h3>
            </motion.div>

            <motion.ul className="space-y-6" variants={container}>
              {features.map((feature, index) => (
                <motion.li key={index} className="flex items-start" variants={item}>
                  <div className="mr-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#102544] shadow-lg">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold sm:text-base">{feature.title}</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300 sm:text-base">{feature.description}</p>
                  </div>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div className="flex flex-wrap gap-4 mt-6" variants={item}>
              <div className="flex items-center space-x-2 rounded-2xl border border-[#d6a72f]/25 bg-[#fff7e1] p-3 dark:bg-[#1b2b43]">
                <Shield className="h-6 w-6 text-[#c28d17] sm:h-8 sm:w-8" />
                <span className="text-sm sm:text-base font-medium">Terpercaya</span>
              </div>
              <div className="flex items-center space-x-2 rounded-2xl border border-slate-200 bg-white p-3 dark:border-white/10 dark:bg-slate-900">
                <Clock className="h-6 w-6 text-[#102544] sm:h-8 sm:w-8 dark:text-[#f0cf72]" />
                <span className="text-sm sm:text-base font-medium">Tepat Waktu</span>
              </div>
              <div className="flex items-center space-x-2 rounded-2xl border border-slate-200 bg-white p-3 dark:border-white/10 dark:bg-slate-900">
                <Gem className="h-6 w-6 text-[#102544] sm:h-8 sm:w-8 dark:text-[#f0cf72]" />
                <span className="text-sm font-medium sm:text-base">Tampilan lebih premium</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
