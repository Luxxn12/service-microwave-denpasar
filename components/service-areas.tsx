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
      className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-1/2 bg-gradient-to-b from-blue-50/50 to-purple-50/50 dark:from-blue-900/10 dark:to-purple-900/10 rounded-full blur-3xl -z-10" />

      <div className="container px-4 md:px-6" ref={ref}>
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-blue-100 dark:bg-blue-900/30 px-3 py-1 text-sm text-blue-600 dark:text-blue-400 mb-2">
              Jangkauan Kami
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter">
              Area Layanan
            </h2>
            <p className="max-w-[900px] text-sm md:text-lg lg:text-xl text-gray-500 dark:text-gray-400">
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
                  className="flex items-center space-x-2 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md hover:shadow-lg transition-all"
                  variants={item}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                >
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30">
                    <MapPin className="h-4 w-4 text-blue-600 dark:text-blue-400" />
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
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-3xl blur-xl opacity-70 -z-10" />
              <div className="relative overflow-hidden rounded-3xl shadow-xl">
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
