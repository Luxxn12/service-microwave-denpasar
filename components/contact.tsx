"use client";

import type React from "react";
import { useRef } from "react";
import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle,
} from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { toast } from "sonner";
import dynamic from "next/dynamic";
export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const [formData, setFormData] = useState({
    from_name: "",
    email: "",
    message: "",
  });

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
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { from_name, email, message } = formData;

    if (!from_name || !email || !message) {
      return toast.error("Mohon isi semua kolom form.");
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      return toast.error("Alamat email tidak valid.");
    }

    setLoading(true);

    const payload = new FormData();
    payload.append("access_key", "142c1755-0e78-4d1b-93c6-518291508184");
    payload.append("from_name", from_name);
    payload.append("email", email);
    payload.append("message", message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: payload,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Form berhasil dikirim!");
        setFormData({ from_name: "", email: "", message: "" });
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
        }, 3000);
      } else {
        console.error("Error:", data);
        toast.error("Gagal mengirim form.");
      }
    } catch (error) {
      console.error("Unexpected error:", error);
      toast.error("Terjadi kesalahan saat mengirim.");
    } finally {
      setLoading(false);
    }
  };

  const LocationMap = dynamic(() => import("@/components/location-map"), {
    ssr: false,
    loading: () => (
      <div className="flex h-[300px] w-full items-center justify-center rounded-[24px] bg-slate-100 dark:bg-slate-900">
        <p className="text-slate-500 dark:text-slate-400">Loading map...</p>
      </div>
    ),
  });

  return (
    <section
      id="kontak"
      className="relative w-full overflow-hidden bg-[#f7fbff]/70 py-12 md:py-24 lg:py-32 dark:bg-slate-950/20"
    >
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#f0cf72]/16 blur-3xl opacity-70 -z-10" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#12315c]/10 blur-3xl opacity-70 -z-10" />

      <div className="container px-4 md:px-6" ref={ref}>
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-2">
            <div className="mb-2 inline-block rounded-full border border-[#d6a72f]/25 bg-[#fff6dc] px-4 py-1 text-sm font-semibold text-[#9f7514] dark:bg-[#18273d] dark:text-[#f0cf72]">
              Hubungi Kami
            </div>
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
              Hubungi Kami
            </h2>
            <p className="max-w-[900px] text-sm text-slate-600 dark:text-slate-300 md:text-base/relaxed lg:text-sm/relaxed xl:text-base/relaxed">
              Butuh bantuan perbaikan microwave? Hubungi kami sekarang untuk layanan cepat, profesional, dan nyaman
              untuk pelanggan lokal maupun turis yang tinggal di Bali.
            </p>
          </div>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2 mt-12">
          <motion.div
            className="flex flex-col space-y-6"
            variants={container}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
          >
            <motion.div variants={item}>
              <Card className="rounded-[28px] border border-white/70 bg-white/92 shadow-lg dark:border-white/10 dark:bg-slate-900/88">
                <CardHeader>
                  <CardTitle>Informasi Kontak</CardTitle>
                  <CardDescription>
                    Hubungi kami melalui salah satu kontak di bawah ini
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#102544]">
                      <Phone className="h-6 w-6 text-[#f0cf72]" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">Telepon / WhatsApp</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        085737655537
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#f8edd0]">
                      <Mail className="h-6 w-6 text-[#b88415]" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">Email</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        servicemicrowavedenpasar@gmail.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#f8edd0]">
                      <MapPin className="h-6 w-6 text-[#b88415]" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">Alamat</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        Jl. Gn. Atena I No.11a, Padangsambian Klod, Kota
                        Denpasar, Bali 80361
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={item}>
              <Card className="rounded-[28px] border border-white/70 bg-white/92 shadow-lg dark:border-white/10 dark:bg-slate-900/88">
                <CardHeader>
                  <CardTitle>Jam Operasional</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
                      <span>Senin - Jumat</span>
                      <span className="font-medium">08:00 - 20:00</span>
                    </div>
                    <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
                      <span>Sabtu</span>
                      <span className="font-medium">09:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Minggu</span>
                      <span className="font-medium">09:00 - 15:00</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="h-full rounded-[28px] border border-white/70 bg-white/92 shadow-lg dark:border-white/10 dark:bg-slate-900/88">
              <CardHeader>
                <CardTitle>Formulir Pemesanan</CardTitle>
                <CardDescription>
                  Isi formulir di bawah ini untuk memesan layanan perbaikan
                  microwave
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <motion.div
                    className="flex flex-col items-center justify-center h-full py-12 text-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#edf7ef] dark:bg-green-900/30">
                      <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Pesan Terkirim!</h3>
                    <p className="text-slate-500 dark:text-slate-400">
                      Terima kasih telah menghubungi kami. Tim kami akan segera
                      menghubungi Anda.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={onSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">
                        Nama Lengkap <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="name"
                        name="from_name"
                        placeholder="Masukkan nama lengkap Anda"
                        value={formData.from_name}
                        onChange={handleChange}
                        required
                        className="rounded-2xl border-slate-200 bg-white/90 focus-visible:ring-[#d6a72f] dark:border-slate-700 dark:bg-slate-950/60"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">
                        Email <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Masukkan email Anda"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="rounded-2xl border-slate-200 bg-white/90 focus-visible:ring-[#d6a72f] dark:border-slate-700 dark:bg-slate-950/60"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">
                        Deskripsi Kerusakan{" "}
                        <span className="text-red-500">*</span>
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Jelaskan kerusakan microwave Anda"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="min-h-[120px] rounded-2xl border-slate-200 bg-white/90 focus-visible:ring-[#d6a72f] dark:border-slate-700 dark:bg-slate-950/60"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full rounded-full bg-gradient-to-r from-[#c7921b] to-[#f0cf72] font-semibold text-[#102544] hover:brightness-105"
                      disabled={loading}
                    >
                      {loading ? (
                        <div className="flex items-center">
                          <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                          Mengirim...
                        </div>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Kirim Pesan
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
        <div className="mt-7">
        <motion.div variants={item}>
          <Card className="rounded-[28px] border border-white/70 bg-white/92 shadow-lg dark:border-white/10 dark:bg-slate-900/88">
            <CardHeader>
              <CardTitle>Lokasi Kami</CardTitle>
              <CardDescription>
                Klik pada peta untuk membuka di Google Maps
              </CardDescription>
            </CardHeader>
            <CardContent>
              <LocationMap />
            </CardContent>
          </Card>
        </motion.div>
        </div>
      </div>
    </section>
  );
}
