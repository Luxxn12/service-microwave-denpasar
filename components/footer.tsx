"use client"

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin, ArrowUp } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import logo from "../public/logo.png"

export default function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
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
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <footer className="w-full bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12 relative overflow-hidden text-xs md:text-sm">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600" />
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-3xl opacity-70" />
        <div className="absolute bottom-20 right-10 w-20 h-20 bg-purple-500/10 rounded-full blur-3xl opacity-70" />
      </div>

      <div className="container px-4 md:px-6" ref={ref}>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          <motion.div className="space-y-4" variants={item}>
            <div className="flex items-center">
              <Image
                src={logo}
                alt="Logo"
                width={100}
                height={100}
                className="object-cover"
              />
            </div>
            <p className="text-gray-400">
              Layanan perbaikan microwave profesional dengan teknisi berpengalaman. Kami siap datang ke rumah Anda dalam
              waktu 1 jam!
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </motion.div>

          <motion.div className="space-y-4" variants={item}>
            <h3 className="text-lg font-bold">Layanan Kami</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#layanan" className="text-gray-400 hover:text-white transition-colors inline-block">
                  Service Microwave Digital & Manual
                </Link>
              </li>
              <li>
                <Link href="#layanan" className="text-gray-400 hover:text-white transition-colors inline-block">
                  Ganti Magnetron
                </Link>
              </li>
              <li>
                <Link href="#layanan" className="text-gray-400 hover:text-white transition-colors inline-block">
                  Perbaikan PCB
                </Link>
              </li>
              <li>
                <Link href="#layanan" className="text-gray-400 hover:text-white transition-colors inline-block">
                  Ganti Kaca / Pintu Microwave
                </Link>
              </li>
              <li>
                <Link href="#layanan" className="text-gray-400 hover:text-white transition-colors inline-block">
                  Pembersihan & Maintenance
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div className="space-y-4" variants={item}>
            <h3 className="text-lg font-bold">Tautan Cepat</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#beranda" className="text-gray-400 hover:text-white transition-colors inline-block">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="#tentang" className="text-gray-400 hover:text-white transition-colors inline-block">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="#area" className="text-gray-400 hover:text-white transition-colors inline-block">
                  Area Layanan
                </Link>
              </li>
              <li>
                <Link href="#harga" className="text-gray-400 hover:text-white transition-colors inline-block">
                  Estimasi Biaya
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-gray-400 hover:text-white transition-colors inline-block">
                  FAQ
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div className="space-y-4" variants={item}>
            <h3 className="text-lg font-bold">Kontak Kami</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-900/30 mr-3">
                  <Phone className="h-5 w-5 text-blue-400" />
                </div>
                <span>085737655537</span>
              </li>
              <li className="flex items-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-900/30 mr-3">
                  <Mail className="h-5 w-5 text-purple-400" />
                </div>
                <span> servicemicrowavedenpasar@gmail.com</span>
              </li>
              <li className="flex items-start">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-900/30 mr-3">
                  <MapPin className="h-5 w-5 text-indigo-400" />
                </div>
                <span>Jl. Gn. Atena I No.11a, Padangsambian Klod, Kota Denpasar, Bali 80361</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="text-gray-400">© {new Date().getFullYear()} ServiceMicrowaveDenpasar. Hak Cipta Dilindungi.</p>
          <div className="mt-4 md:mt-0">
            <button
              onClick={scrollToTop}
              className="flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all"
            >
              <ArrowUp className="h-5 w-5 text-white" />
            </button>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
