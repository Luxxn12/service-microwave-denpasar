"use client";

import { motion, useInView } from "framer-motion";
import {
  ArrowUp,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import logo from "../public/logo.png";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <footer className="relative w-full overflow-hidden bg-gradient-to-br from-[#0d1d36] via-[#102544] to-[#0a1730] py-12 text-xs text-white md:text-sm">
      <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#c7921b] via-[#f0cf72] to-[#c7921b]" />
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute left-10 top-20 h-20 w-20 rounded-full bg-[#f0cf72]/10 blur-3xl opacity-70" />
        <div className="absolute bottom-20 right-10 h-20 w-20 rounded-full bg-white/8 blur-3xl opacity-70" />
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
            <p className="text-slate-300">
              Layanan perbaikan microwave profesional dengan teknisi
              berpengalaman. Kami siap datang ke rumah Anda dalam waktu 1 jam!
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-slate-300 transition-colors hover:text-[#f0cf72]"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="text-slate-300 transition-colors hover:text-[#f0cf72]"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="text-slate-300 transition-colors hover:text-[#f0cf72]"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="text-slate-300 transition-colors hover:text-[#f0cf72]"
              >
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </motion.div>

          <motion.div className="space-y-4" variants={item}>
            <h3 className="text-lg font-bold">Layanan Kami</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#layanan"
                  className="inline-block text-slate-300 transition-colors hover:text-[#f0cf72]"
                >
                  Service Microwave Digital & Manual
                </Link>
              </li>
              <li>
                <Link
                  href="#layanan"
                  className="inline-block text-slate-300 transition-colors hover:text-[#f0cf72]"
                >
                  Ganti Magnetron
                </Link>
              </li>
              <li>
                <Link
                  href="#layanan"
                  className="inline-block text-slate-300 transition-colors hover:text-[#f0cf72]"
                >
                  Perbaikan PCB
                </Link>
              </li>
              <li>
                <Link
                  href="#layanan"
                  className="inline-block text-slate-300 transition-colors hover:text-[#f0cf72]"
                >
                  Ganti Kaca / Pintu Microwave
                </Link>
              </li>
              <li>
                <Link
                  href="#layanan"
                  className="inline-block text-slate-300 transition-colors hover:text-[#f0cf72]"
                >
                  Pembersihan & Maintenance
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div className="space-y-4" variants={item}>
            <h3 className="text-lg font-bold">Tautan Cepat</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#beranda"
                  className="inline-block text-slate-300 transition-colors hover:text-[#f0cf72]"
                >
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  href="#tentang"
                  className="inline-block text-slate-300 transition-colors hover:text-[#f0cf72]"
                >
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link
                  href="#area"
                  className="inline-block text-slate-300 transition-colors hover:text-[#f0cf72]"
                >
                  Area Layanan
                </Link>
              </li>
              <li>
                <Link
                  href="#harga"
                  className="inline-block text-slate-300 transition-colors hover:text-[#f0cf72]"
                >
                  Estimasi Biaya
                </Link>
              </li>
              <li>
                <Link
                  href="#faq"
                  className="inline-block text-slate-300 transition-colors hover:text-[#f0cf72]"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div className="space-y-4" variants={item}>
            <h3 className="text-lg font-bold">Kontak Kami</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/8">
                  <Phone className="h-5 w-5 text-[#f0cf72]" />
                </div>
                <span>085737655537</span>
              </li>
              <li className="flex items-center">
                <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/8">
                  <Mail className="h-5 w-5 text-[#f0cf72]" />
                </div>
                <span> servicemicrowavedenpasar@gmail.com</span>
              </li>
              <li className="flex items-start">
                <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/8">
                  <MapPin className="h-5 w-5 text-[#f0cf72]" />
                </div>
                <span>
                  Jl. Gn. Atena I No.11a, Padangsambian Klod, Kota Denpasar,
                  Bali 80361
                </span>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-12 flex flex-col items-center justify-between border-t border-white/10 pt-8 md:flex-row"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="text-slate-300">
            © {new Date().getFullYear()} Service Microwave Denpasar. Hak Cipta
            Dilindungi.
          </p>
          <div className="mt-4 md:mt-0">
            <button
              onClick={scrollToTop}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-[#c7921b] to-[#f0cf72] transition-all hover:brightness-105"
            >
              <ArrowUp className="h-5 w-5 text-[#102544]" />
            </button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
