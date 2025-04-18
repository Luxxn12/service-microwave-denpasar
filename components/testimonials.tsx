"use client"

import { useRef } from "react"
import Image from "next/image"
import { Star, Quote } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const testimonials = [
    {
      name: "Budi Santoso",
      location: "Denpasar",
      rating: 5,
      comment:
        "Teknisinya datang tepat waktu dan sangat profesional. Microwave saya yang rusak bisa diperbaiki dalam waktu kurang dari 1 jam. Sangat merekomendasikan!",
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Siti Rahayu",
      location: "Kuta",
      rating: 5,
      comment:
        "Pelayanan sangat memuaskan. Teknisi menjelaskan dengan detail penyebab kerusakan dan cara merawat microwave dengan baik. Harga juga sangat terjangkau.",
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Ahmad Hidayat",
      location: "Ubud",
      rating: 4,
      comment:
        "Respon cepat dan perbaikan berkualitas. Microwave saya kembali berfungsi dengan baik. Saya berikan bintang 4 karena ada sedikit keterlambatan.",
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Dewi Lestari",
      location: "Seminyak",
      rating: 5,
      comment:
        "Sudah 2 kali menggunakan jasa ServiceMicrowave dan selalu puas dengan hasilnya. Teknisi ramah dan berpengalaman. Harga juga transparan tanpa biaya tersembunyi.",
      image: "/placeholder.svg?height=60&width=60",
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
      id="testimoni"
      className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50/50 to-purple-50/50 dark:from-gray-900 dark:to-gray-900/80 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200 dark:bg-blue-900/30 rounded-full blur-3xl opacity-70" />
        <div className="absolute bottom-10 right-10 w-20 h-20 bg-purple-200 dark:bg-purple-900/30 rounded-full blur-3xl opacity-70" />
      </div>

      <div className="container px-4 md:px-6 relative" ref={ref}>
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-blue-100 dark:bg-blue-900/30 px-3 py-1 text-xs sm:text-sm text-blue-600 dark:text-blue-400 mb-2">
              Apa Kata Mereka
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter">Testimoni Pelanggan</h2>
            <p className="max-w-[900px] text-sm sm:text-base md:text-xl text-gray-500 dark:text-gray-400">
              Apa kata pelanggan kami tentang layanan perbaikan microwave yang kami berikan.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mt-12"
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={item} whileHover={{ y: -10, transition: { duration: 0.2 } }}>
              <Card className="h-full border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all">
                <CardHeader className="pb-2 relative">
                  <Quote className="absolute top-4 right-4 h-6 w-6 sm:h-8 sm:w-8 text-blue-100 dark:text-gray-700" />
                  <div className="flex items-center gap-0.5">
                    {Array(testimonial.rating)
                      .fill(null)
                      .map((_, i) => (
                        <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    {Array(5 - testimonial.rating)
                      .fill(null)
                      .map((_, i) => (
                        <Star key={i + testimonial.rating} className="h-4 w-4 sm:h-5 sm:w-5 text-gray-300" />
                      ))}
                  </div>
                </CardHeader>
                <CardContent className="pb-2">
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 italic">
                    "{testimonial.comment}"
                  </p>
                </CardContent>
                <CardFooter>
                  <div className="flex items-center gap-4">
                    <div className="relative h-10 w-10 sm:h-12 sm:w-12 overflow-hidden rounded-full border-2 border-white dark:border-gray-800 shadow-md">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={60}
                        height={60}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium text-sm sm:text-base">{testimonial.name}</p>
                      <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">{testimonial.location}</p>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
