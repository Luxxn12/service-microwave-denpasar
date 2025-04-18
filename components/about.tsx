"use client"

import Image from "next/image"
import { CheckCircle, Award, Shield, Clock } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import heroIcon from "/public/8.png"

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
    <section id="tentang" className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-100/50 dark:bg-blue-900/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-purple-100/50 dark:bg-purple-900/20 rounded-full blur-3xl -z-10" />

      <div className="container px-4 md:px-6" ref={ref}>
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-blue-100 dark:bg-blue-900/30 px-3 py-1 text-xs sm:text-sm text-blue-600 dark:text-blue-400 mb-2">
              Tentang Kami
            </div>
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold tracking-tight">
              Solusi Terbaik untuk Microwave Anda
            </h2>
            <p className="max-w-[900px] text-sm sm:text-base md:text-lg text-gray-500 dark:text-gray-400">
              Kami adalah tim teknisi profesional dengan pengalaman lebih dari 10 tahun dalam perbaikan microwave
              berbagai merek di seluruh Bali.
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
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-3xl blur-xl opacity-70 -z-10" />
            <div className="relative overflow-hidden rounded-3xl shadow-xl">
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
              <h3 className="text-lg sm:text-xl font-bold">Mengapa Memilih Kami?</h3>
            </motion.div>

            <motion.ul className="space-y-6" variants={container}>
              {features.map((feature, index) => (
                <motion.li key={index} className="flex items-start" variants={item}>
                  <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base">{feature.title}</h4>
                    <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400">{feature.description}</p>
                  </div>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div className="flex flex-wrap gap-4 mt-6" variants={item}>
              <div className="flex items-center space-x-2 bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-purple-500" />
                <span className="text-sm sm:text-base font-medium">Terpercaya</span>
              </div>
              <div className="flex items-center space-x-2 bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                <Clock className="h-6 w-6 sm:h-8 sm:w-8 text-green-500" />
                <span className="text-sm sm:text-base font-medium">Tepat Waktu</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
