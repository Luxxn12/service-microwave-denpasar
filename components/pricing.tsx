"use client"

import { useRef } from "react"
import { Check, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Pricing() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const pricingItems = [
    {
      title: "Biaya Pengecekan",
      price: "Rp 50.000",
      description: "Biaya ini akan dimasukkan ke dalam total biaya perbaikan jika dilanjutkan.",
      features: ["Diagnosis kerusakan", "Estimasi biaya perbaikan", "Konsultasi dengan teknisi"],
      color: "from-[#102544] to-[#22456f]",
      popular: false,
    },
    {
      title: "Perbaikan Ringan",
      price: "Rp 150.000 - Rp 300.000",
      description: "Untuk kerusakan ringan yang tidak memerlukan penggantian komponen utama.",
      features: ["Perbaikan dalam 1-2 jam", "Garansi 1 bulan", "Termasuk biaya pengecekan", "Pembersihan unit"],
      color: "from-[#c7921b] to-[#f0cf72]",
      popular: true,
    },
    {
      title: "Perbaikan Sedang",
      price: "Rp 300.000 - Rp 600.000",
      description: "Untuk kerusakan yang memerlukan penggantian komponen kecil hingga menengah.",
      features: [
        "Perbaikan dalam 2-3 jam",
        "Garansi 1 bulan",
        "Termasuk biaya pengecekan",
        "Pembersihan unit",
        "Penggantian komponen",
      ],
      color: "from-[#18365f] to-[#3b6794]",
      popular: false,
    },
    {
      title: "Perbaikan Berat",
      price: "Rp 600.000 - Rp 1.200.000",
      description: "Untuk kerusakan yang memerlukan penggantian komponen utama seperti magnetron.",
      features: [
        "Perbaikan dalam 3-5 jam",
        "Garansi 1 bulan",
        "Termasuk biaya pengecekan",
        "Pembersihan unit",
        "Penggantian komponen utama",
        "Kalibrasi ulang",
      ],
      color: "from-[#b78218] to-[#ebc965]",
      popular: false,
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
    <section id="harga" className="relative w-full overflow-hidden py-12 md:py-24 lg:py-32">
      <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-[#12315c]/10 blur-3xl opacity-70 -z-10" />
      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[#f0cf72]/16 blur-3xl opacity-70 -z-10" />

      <div className="container px-4 md:px-6" ref={ref}>
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-2">
            <div className="mb-2 inline-block rounded-full border border-[#d6a72f]/25 bg-[#fff6dc] px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#9f7514] dark:bg-[#18273d] dark:text-[#f0cf72] sm:text-sm">
              Harga Layanan
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tighter">
              Estimasi Biaya
            </h2>
            <p className="max-w-[900px] text-sm text-slate-600 dark:text-slate-300 sm:text-base md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Kami menawarkan harga yang transparan dan kompetitif untuk setiap jenis perbaikan.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mt-12"
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {pricingItems.map((item, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="relative"
            >
              {item.popular && (
                <div className="absolute -top-4 inset-x-0 flex justify-center">
                  <div className="rounded-full bg-gradient-to-r from-[#c7921b] to-[#f0cf72] px-3 py-1 text-xs font-medium text-[#102544] shadow-lg sm:text-sm">
                    Paling Populer
                  </div>
                </div>
              )}
              <Card
                className={`flex h-full flex-col rounded-[28px] border border-white/70 bg-white/92 shadow-lg ${
                  item.popular ? "shadow-[0_28px_70px_rgba(214,167,47,0.18)]" : ""
                }`}
              >
                <div className={`h-2 w-full bg-gradient-to-r ${item.color}`} />
                <CardHeader>
                  <CardTitle className="text-base sm:text-lg md:text-xl">{item.title}</CardTitle>
                  <CardDescription className="text-xl sm:text-2xl md:text-3xl font-bold mt-2">
                    {item.price}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="mb-4 text-sm text-slate-600 dark:text-slate-300 sm:text-base">
                    {item.description}
                  </p>
                  <ul className="space-y-2">
                    {item.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm sm:text-base">
                        <div className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#102544]">
                          <Check className="h-3 w-3 text-[#f0cf72]" />
                        </div>
                        <span className="text-slate-600 dark:text-slate-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className={`group w-full rounded-full bg-gradient-to-r ${item.color} font-semibold ${
                      item.popular ? "text-[#102544]" : "text-white"
                    } hover:opacity-90`}
                    asChild
                  >
                    <a href="#kontak" className="flex items-center justify-center text-sm sm:text-base">
                      Hubungi Sekarang
                      <motion.span initial={{ x: 0 }} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </motion.span>
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-8 text-center text-xs text-slate-500 dark:text-slate-400 sm:text-sm"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p>* Harga dapat bervariasi tergantung pada merek, model, dan tingkat kerusakan microwave.</p>
          <p>* Konsultasi dan estimasi biaya lebih akurat akan diberikan setelah pengecekan oleh teknisi.</p>
        </motion.div>
      </div>
    </section>
  )
}
