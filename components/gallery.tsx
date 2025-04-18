"use client"

import type React from "react"

import { useRef, useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import image1 from "../public/1.jpeg"
import image2 from "../public/2.jpeg"
import image3 from "../public/3.jpeg"
import image4 from "../public/4.jpeg"
import image5 from "../public/5.jpeg"
import image6 from "../public/6.jpeg"

export default function Gallery() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const images = [
    {
      src: image1,
      alt: "Teknisi sedang memperbaiki microwave",
    },
    {
      src: image6,
      alt: "Perbaikan Microwave oleh Teknisi",
    },
    {
      src: image2,
      alt: "Microwave sebelum perbaikan",
    },
    {
      src: image3,
      alt: "Perbaiki Alat Panggang Roti",
    },
    {
      src: image4,
      alt: "Workshop perbaikan",
    },
    {
      src: image5,
      alt: "Perbaikan Mesin Microwave",
    },
  ]


  const openModal = (index: number) => {
    setSelectedImage(index)
    // Prevent body scrolling when modal is open
    document.body.style.overflow = "hidden"
  }

  const closeModal = () => {
    setSelectedImage(null)
    // Re-enable body scrolling
    document.body.style.overflow = "auto"
  }

  const navigateImage = (direction: "next" | "prev") => {
    if (selectedImage === null) return

    if (direction === "next") {
      setSelectedImage((selectedImage + 1) % images.length)
    } else {
      setSelectedImage((selectedImage - 1 + images.length) % images.length)
    }
  }

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      closeModal()
    } else if (e.key === "ArrowRight") {
      navigateImage("next")
    } else if (e.key === "ArrowLeft") {
      navigateImage("prev")
    }
  }

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
              className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer"
              variants={item}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              onClick={() => openModal(index)}
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

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 md:p-8"
            onClick={closeModal}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl w-full h-full flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 md:top-4 md:right-4 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                aria-label="Close modal"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Navigation buttons */}
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  navigateImage("prev")
                }}
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation()
                  navigateImage("next")
                }}
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                aria-label="Next image"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* Image container */}
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={images[selectedImage].src || "/placeholder.svg"}
                  alt={images[selectedImage].alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 80vw"
                />
              </div>

              {/* Caption */}
              <div className="absolute bottom-4 left-0 right-0 text-center">
                <p className="text-white bg-black/50 inline-block px-4 py-2 rounded-lg">{images[selectedImage].alt}</p>
                <p className="text-white/70 text-sm mt-2">
                  {selectedImage + 1} / {images.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
