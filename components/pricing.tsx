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
      color: "from-blue-500 to-blue-600",
      popular: false,
    },
    {
      title: "Perbaikan Ringan",
      price: "Rp 150.000 - Rp 300.000",
      description: "Untuk kerusakan ringan yang tidak memerlukan penggantian komponen utama.",
      features: ["Perbaikan dalam 1-2 jam", "Garansi 1 bulan", "Termasuk biaya pengecekan", "Pembersihan unit"],
      color: "from-purple-500 to-purple-600",
      popular: true,
    },
    {
      title: "Perbaikan Sedang",
      price: "Rp 300.000 - Rp 600.000",
      description: "Untuk kerusakan yang memerlukan penggantian komponen kecil hingga menengah.",
      features: [
        "Perbaikan dalam 2-3 jam",
        "Garansi 2 bulan",
        "Termasuk biaya pengecekan",
        "Pembersihan unit",
        "Penggantian komponen",
      ],
      color: "from-indigo-500 to-indigo-600",
      popular: false,
    },
    {
      title: "Perbaikan Berat",
      price: "Rp 600.000 - Rp 1.200.000",
      description: "Untuk kerusakan yang memerlukan penggantian komponen utama seperti magnetron.",
      features: [
        "Perbaikan dalam 3-5 jam",
        "Garansi 3 bulan",
        "Termasuk biaya pengecekan",
        "Pembersihan unit",
        "Penggantian komponen utama",
        "Kalibrasi ulang",
      ],
      color: "from-cyan-500 to-cyan-600",
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
    <section id="harga" className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-100/50 dark:bg-blue-900/20 rounded-full blur-3xl opacity-70 -z-10" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-purple-100/50 dark:bg-purple-900/20 rounded-full blur-3xl opacity-70 -z-10" />

      <div className="container px-4 md:px-6" ref={ref}>
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-blue-100 dark:bg-blue-900/30 px-3 py-1 text-xs sm:text-sm text-blue-600 dark:text-blue-400 mb-2">
              Harga Layanan
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tighter">
              Estimasi Biaya
            </h2>
            <p className="max-w-[900px] text-sm sm:text-base md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-gray-500 dark:text-gray-400">
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
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-medium shadow-lg">
                    Paling Populer
                  </div>
                </div>
              )}
              <Card
                className={`flex flex-col h-full border-0 shadow-lg ${
                  item.popular ? "shadow-blue-100 dark:shadow-blue-900/20" : ""
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
                  <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 mb-4">
                    {item.description}
                  </p>
                  <ul className="space-y-2">
                    {item.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm sm:text-base">
                        <div className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30">
                          <Check className="h-3 w-3 text-blue-600 dark:text-blue-400" />
                        </div>
                        <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className={`w-full bg-gradient-to-r ${item.color} hover:opacity-90 text-white group`} asChild>
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
          className="mt-8 text-center text-xs sm:text-sm text-gray-500 dark:text-gray-400"
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
