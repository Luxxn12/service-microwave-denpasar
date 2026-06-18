"use client";

import { useRef } from "react";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import baliPeta from "../public/bali.png";

export default function ServiceAreas() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const areas = [
    "Denpasar",
    "Kuta",
    "Ubud",
    "Seminyak",
    "Canggu",
    "Nusa Dua",
    "Jimbaran",
    "Sanur",
    "Tabanan",
    "Gianyar",
    "Badung",
    "Karangasem",
    "Buleleng",
    "Bangli",
    "Klungkung",
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  };

  return (
    <section
      id="area"
      className="relative w-full overflow-hidden py-12 md:py-24 lg:py-32"
    >
      <div className="absolute left-1/2 top-1/2 -z-10 h-1/2 w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-b from-[#12315c]/8 to-[#e6c062]/10 blur-3xl" />

      <div className="container px-4 md:px-6" ref={ref}>
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-2">
            <div className="mb-2 inline-block rounded-full border border-[#d6a72f]/25 bg-[#fff6dc] px-4 py-1 text-sm font-semibold text-[#9f7514] dark:bg-[#18273d] dark:text-[#f0cf72]">
              Jangkauan Kami
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter">
              Area Layanan
            </h2>
            <p className="max-w-[900px] text-sm text-slate-600 dark:text-slate-300 md:text-lg lg:text-xl">
              Kami melayani perbaikan microwave di seluruh wilayah Bali.
            </p>
          </div>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2 mt-12 items-center">
          <motion.div
            className="flex flex-col justify-center space-y-4"
            variants={container}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
          >
            <div className="grid grid-cols-2 gap-4">
              {areas.map((area, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-2 rounded-2xl border border-white/70 bg-white/92 p-4 shadow-md transition-all hover:shadow-lg dark:border-white/10 dark:bg-slate-900/88"
                  variants={item}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#102544]">
                    <MapPin className="h-4 w-4 text-[#f0cf72]" />
                  </div>
                  <span className="font-medium text-sm md:text-base ">{area}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute inset-0 -z-10 rounded-[34px] bg-gradient-to-br from-[#102544]/12 to-[#f0cf72]/12 blur-xl" />
              <div className="relative overflow-hidden rounded-[30px] border border-white/70 bg-white shadow-xl dark:border-white/10 dark:bg-slate-900">
                <Image
                  src={baliPeta}
                  alt="Peta Area Layanan"
                  width={500}
                  height={500}
                  className="object-cover"
                />

                {/* Map pin animation */}
                {/* Jembrana */}
                <motion.div
                  className="absolute top-[32%] left-[20%] w-6 h-6"
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "loop",
                  }}
                >
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                    <MapPin className="h-4 w-4 text-white" />
                  </div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-red-500 rounded-full animate-ping" />
                </motion.div>

                {/* Buleleng */}
                <motion.div
                  className="absolute top-[25%] left-[40%] w-6 h-6"
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "loop",
                  }}
                >
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                    <MapPin className="h-4 w-4 text-white" />
                  </div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-red-500 rounded-full animate-ping" />
                </motion.div>

                {/* Bangli */}
                <motion.div
                  className="absolute top-[28%] right-[26%] w-6 h-6"
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "loop",
                  }}
                >
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                    <MapPin className="h-4 w-4 text-white" />
                  </div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-red-500 rounded-full animate-ping" />
                </motion.div>

                {/* karangasem */}
                <motion.div
                  className="absolute top-[40%] right-[10%] w-6 h-6"
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "loop",
                  }}
                >
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                    <MapPin className="h-4 w-4 text-white" />
                  </div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-red-500 rounded-full animate-ping" />
                </motion.div>

                {/* Tabanan */}
                <motion.div
                  className="absolute top-[43%] left-[47%] w-6 h-6"
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "loop",
                  }}
                >
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                    <MapPin className="h-4 w-4 text-white" />
                  </div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-red-500 rounded-full animate-ping" />
                </motion.div>

                <motion.div
                  className="absolute top-1/2 right-[35%]  w-6 h-6"
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "loop",
                    delay: 0.5,
                  }}
                >
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                    <MapPin className="h-4 w-4 text-white" />
                  </div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-red-500 rounded-full animate-ping" />
                </motion.div>

                <motion.div
                  className="absolute bottom-[30%] right-[35%] w-6 h-6"
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "loop",
                    delay: 1,
                  }}
                >
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                    <MapPin className="h-4 w-4 text-white" />
                  </div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-red-500 rounded-full animate-ping" />
                </motion.div>
                <motion.div
                  className="absolute bottom-[20%] right-[13%] w-6 h-6"
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "loop",
                    delay: 1,
                  }}
                >
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                    <MapPin className="h-4 w-4 text-white" />
                  </div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-red-500 rounded-full animate-ping" />
                </motion.div>
                <motion.div
                  className="absolute bottom-[40%] right-[30%] w-6 h-6"
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "loop",
                    delay: 1,
                  }}
                >
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                    <MapPin className="h-4 w-4 text-white" />
                  </div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-red-500 rounded-full animate-ping" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
