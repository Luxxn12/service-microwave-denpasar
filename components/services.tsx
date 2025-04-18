"use client"

import { useRef } from "react"
import { Zap, Settings, PenToolIcon as Tool, Cpu, RefreshCw, Shield, Wrench, MessageSquare } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const services = [
    {
      icon: <Settings className="h-10 w-10 text-blue-500" />,
      title: "Service Microwave Digital & Manual",
      description: "Perbaikan untuk semua jenis microwave digital maupun manual dari berbagai merek.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <Zap className="h-10 w-10 text-purple-500" />,
      title: "Ganti Magnetron",
      description: "Penggantian magnetron yang rusak dengan suku cadang asli dan berkualitas.",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: <Tool className="h-10 w-10 text-indigo-500" />,
      title: "Ganti Fuse",
      description: "Penggantian sekring yang putus dengan cepat dan aman.",
      color: "from-indigo-500 to-indigo-600",
    },
    {
      icon: <Cpu className="h-10 w-10 text-cyan-500" />,
      title: "Perbaikan PCB",
      description: "Perbaikan papan sirkuit elektronik dengan teknologi terkini.",
      color: "from-cyan-500 to-cyan-600",
    },
    {
      icon: <RefreshCw className="h-10 w-10 text-teal-500" />,
      title: "Ganti Kaca / Pintu Microwave",
      description: "Penggantian kaca atau pintu microwave yang rusak atau retak.",
      color: "from-teal-500 to-teal-600",
    },
    {
      icon: <Shield className="h-10 w-10 text-green-500" />,
      title: "Pembersihan & Maintenance",
      description: "Pembersihan menyeluruh dan perawatan rutin untuk memperpanjang umur microwave.",
      color: "from-green-500 to-green-600",
    },
    {
      icon: <Wrench className="h-10 w-10 text-amber-500" />,
      title: "Perbaikan Listrik Tidak Menyala",
      description: "Mengatasi masalah microwave yang tidak menyala atau tidak berfungsi.",
      color: "from-amber-500 to-amber-600",
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-rose-500" />,
      title: "Konsultasi Gratis",
      description: "Konsultasi gratis untuk masalah microwave Anda sebelum melakukan perbaikan.",
      color: "from-rose-500 to-rose-600",
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
      id="layanan"
      className="w-full py-12 md:py-24 lg:py-32 bg-gray-50/50 dark:bg-gray-900/20 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-blue-100/50 dark:bg-blue-900/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-purple-100/50 dark:bg-purple-900/20 rounded-full blur-3xl -z-10" />

      <div className="container px-4 md:px-6" ref={ref}>
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-blue-100 dark:bg-blue-900/30 px-3 py-1 text-sm text-blue-600 dark:text-blue-400 mb-2">
              Layanan Kami
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Jenis Layanan</h2>
            <p className="max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Kami menyediakan berbagai layanan perbaikan microwave untuk mengatasi semua jenis kerusakan.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mt-12"
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full overflow-hidden border-0 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-white dark:bg-gray-800">
                <div className={`h-2 w-full bg-gradient-to-r ${service.color}`} />
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <div className="rounded-full p-2 bg-gray-100 dark:bg-gray-700">{service.icon}</div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
