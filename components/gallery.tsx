"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"

export default function Gallery() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const images = [
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Teknisi sedang memperbaiki microwave",
    },
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Microwave sebelum perbaikan",
    },
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Microwave setelah perbaikan",
    },
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Workshop perbaikan microwave",
    },
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Tim teknisi kami",
    },
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Pelanggan puas dengan layanan kami",
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
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  }

  return (
    <section id="galeri" className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Background elements */}
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
            <div className="inline-block rounded-lg bg-blue-100 dark:bg-blue-900/30 px-3 py-1 text-sm text-blue-600 dark:text-blue-400 mb-2">
              Galeri Kami
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Galeri Foto</h2>
            <p className="max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Lihat dokumentasi pekerjaan kami dalam memperbaiki berbagai jenis microwave.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 mt-12"
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg"
              variants={item}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
            >
              <div className="relative aspect-video overflow-hidden rounded-xl">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  width={400}
                  height={300}
                  className="h-full w-full object-cover transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="font-medium">{image.alt}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
