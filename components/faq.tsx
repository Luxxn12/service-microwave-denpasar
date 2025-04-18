"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function Faq() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const faqs = [
    {
      question: "Berapa lama proses servis microwave?",
      answer:
        "Waktu perbaikan microwave bervariasi tergantung pada jenis kerusakan. Untuk kerusakan ringan, biasanya dapat diselesaikan dalam 1-2 jam. Untuk kerusakan sedang hingga berat, mungkin membutuhkan waktu 3-5 jam. Dalam beberapa kasus khusus, microwave perlu dibawa ke workshop kami dan membutuhkan waktu 1-2 hari.",
    },
    {
      question: "Apakah ada garansi untuk perbaikan microwave?",
      answer:
        "Ya, kami memberikan garansi untuk setiap perbaikan yang kami lakukan. Lamanya garansi tergantung pada jenis perbaikan dan kesepakatan di Awal. Garansi mencakup kerusakan yang sama dan tidak berlaku jika terjadi kerusakan akibat kesalahan penggunaan atau bencana alam.",
    },
    {
      question: "Apakah bisa panggilan ke rumah?",
      answer:
        "Ya, kami menyediakan layanan panggilan ke rumah untuk seluruh wilayah Bali. Teknisi kami akan datang ke lokasi Anda sesuai dengan jadwal yang telah disepakati. Untuk pemesanan, Anda dapat menghubungi kami melalui telepon, WhatsApp, atau mengisi formulir di website kami.",
    },
    {
      question: "Berapa biaya panggilan teknisi ke rumah?",
      answer:
        "Biaya panggilan teknisi ke rumah adalah Rp 50.000 untuk wilayah Denpasar dan sekitarnya. Biaya ini akan dimasukkan ke dalam total biaya perbaikan jika Anda melanjutkan perbaikan. Untuk wilayah lain di Bali, mungkin ada biaya tambahan tergantung pada jarak.",
    },
    {
      question: "Apakah suku cadang yang digunakan original?",
      answer:
        "Ya, kami menggunakan suku cadang original atau berkualitas setara untuk memastikan kualitas perbaikan dan keamanan microwave Anda. Kami juga memberikan garansi untuk setiap suku cadang yang kami ganti.",
    },
    {
      question: "Bagaimana cara memesan layanan perbaikan microwave?",
      answer:
        "Anda dapat memesan layanan perbaikan microwave melalui beberapa cara: menghubungi kami di nomor telepon/WhatsApp 085737655537, mengisi formulir pemesanan di website kami, atau mengirim email ke info@ServiceMicrowaveDenpasar.com. Setelah itu, kami akan menghubungi Anda untuk konfirmasi jadwal kunjungan teknisi.",
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
      id="faq"
      className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden"
    >
      {/* Background */}
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
              FAQ
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter">
              Pertanyaan Umum
            </h2>
            <p className="max-w-[900px] text-gray-500 dark:text-gray-400 text-sm sm:text-base md:text-lg">
              Temukan jawaban untuk pertanyaan yang sering diajukan tentang layanan kami.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="mx-auto max-w-3xl mt-12"
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <motion.div key={index} variants={item}>
                <AccordionItem
                  value={`item-${index}`}
                  className="border-b border-gray-200 dark:border-gray-700"
                >
                  <AccordionTrigger className="text-left text-sm sm:text-base font-medium py-4 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 dark:text-gray-300 text-xs sm:text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
