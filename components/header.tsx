"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, Phone, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import logo from "@/public/logo.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Beranda", href: "#beranda" },
    { name: "Tentang Kami", href: "#tentang" },
    { name: "Layanan", href: "#layanan" },
    { name: "Area Layanan", href: "#area" },
    { name: "Testimoni", href: "#testimoni" },
    { name: "Kontak", href: "#kontak" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full px-3 pt-3 transition-all duration-300 md:px-4">
      <div
        className={cn(
          "container relative rounded-[28px] border border-[#d9e4f0] bg-white/88 px-4 shadow-[0_18px_50px_rgba(15,34,64,0.1)] backdrop-blur-xl transition-all duration-300 dark:border-white/10 dark:bg-[#102544]/94 md:px-6",
          scrolled && "shadow-[0_22px_60px_rgba(15,34,64,0.16)] dark:shadow-[0_22px_60px_rgba(7,16,32,0.34)]"
        )}
      >
        <div className="flex min-h-[72px] items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <Link href="/" className="flex min-w-0 items-center gap-3">
              <Image
                src={logo}
                alt="Service Microwave Denpasar"
                width={52}
                height={52}
                className="rounded-2xl border border-slate-200 bg-white object-cover p-1 shadow-lg dark:border-white/10 dark:bg-white/90"
              />
              <div className="hidden min-w-0 sm:block">
                <p className="truncate font-[family:var(--font-display)] text-xl uppercase tracking-[0.16em] text-[#102544] dark:text-white lg:text-2xl">
                  Microwave
                </p>
                <p className="-mt-1 truncate text-[10px] font-semibold uppercase tracking-[0.28em] text-[#e2ba59] lg:text-[11px]">
                  Service Denpasar
                </p>
              </div>
            </Link>
          </motion.div>

          <nav className="hidden items-center gap-1 rounded-full border border-[#dde7f1] bg-[#f7fbff] p-1 backdrop-blur dark:border-white/10 dark:bg-white/5 md:flex">
            {navItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Link
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium text-[#27456f] transition-colors hover:text-[#b88415] dark:text-slate-100 dark:hover:text-[#f0cf72]"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <ThemeToggle />
            <div className="hidden lg:flex items-center gap-2 rounded-full border border-[#e2ba59]/30 bg-[#fff3cf] px-3 py-2 text-xs font-medium text-[#9b7218] dark:bg-[#e2ba59]/10 dark:text-[#f5df9d]">
              <ShieldCheck className="h-4 w-4" />
              Garansi Service
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              <Button
                asChild
                className="rounded-full border border-[#f3d889]/40 bg-gradient-to-r from-[#d3a53d] to-[#f0cf72] px-5 text-sm font-semibold text-[#102544] shadow-[0_12px_32px_rgba(215,170,65,0.28)] hover:brightness-105"
              >
                <Link href="#kontak" className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  Hubungi Sekarang
                </Link>
              </Button>
            </motion.div>
          </div>

          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <div className="flex items-center gap-2 md:hidden">
              <ThemeToggle />
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full border border-[#d9e4f0] bg-white text-[#102544] hover:bg-white hover:text-[#102544] dark:border-[#4f709c] dark:bg-[#ffffff12] dark:text-[#f0cf72] dark:hover:bg-[#ffffff1c] dark:hover:text-[#f0cf72]"
                  aria-label={isMenuOpen ? "Tutup menu" : "Buka menu"}
                >
                  <Menu className="h-6 w-6 text-[#102544] dark:text-[#f0cf72]" />
                </Button>
              </SheetTrigger>
            </div>

            <SheetContent
              side="right"
              className="w-[88vw] border-l border-[#d9e4f0] bg-white px-0 text-[#102544] shadow-[0_24px_80px_rgba(15,34,64,0.22)] sm:max-w-sm dark:border-[#2f4f78] dark:bg-[#0d203e] dark:text-white [&>button]:right-5 [&>button]:top-5 [&>button]:h-auto [&>button]:w-auto [&>button]:border-0 [&>button]:bg-transparent [&>button]:p-0 [&>button]:text-[#102544] [&>button]:opacity-100 [&>button]:shadow-none [&>button]:transition-colors [&>button]:hover:bg-transparent [&>button]:hover:text-[#b88415] dark:[&>button]:text-[#f0cf72] dark:[&>button]:hover:bg-transparent dark:[&>button]:hover:text-[#ffd978] [&>button_svg]:h-6 [&>button_svg]:w-6"
            >
              <SheetHeader className="border-b border-slate-200 px-6 pb-5 pt-6 text-left dark:border-white/10">
                <div className="flex items-center gap-3 pr-12">
                  <Image
                    src={logo}
                    alt="Service Microwave Denpasar"
                    width={52}
                    height={52}
                    className="rounded-2xl border border-slate-200 bg-white object-cover p-1 shadow-sm dark:border-white/10 dark:bg-white/90"
                  />
                  <div className="min-w-0">
                    <SheetTitle className="truncate font-[family:var(--font-display)] text-xl uppercase tracking-[0.14em] text-[#102544] dark:text-white">
                      Microwave
                    </SheetTitle>
                    <SheetDescription className="mt-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#b88415] dark:text-[#f0cf72]">
                      Service Denpasar
                    </SheetDescription>
                  </div>
                </div>
              </SheetHeader>

              <div className="flex flex-col px-4 py-5">
                {navItems.map((item) => (
                  <SheetClose asChild key={item.href}>
                    <Link
                      href={item.href}
                      className="rounded-2xl px-4 py-3 text-base font-medium text-[#27456f] transition-colors hover:bg-[#f7fbff] hover:text-[#b88415] dark:text-slate-100 dark:hover:bg-white/5 dark:hover:text-[#f0cf72]"
                    >
                      {item.name}
                    </Link>
                  </SheetClose>
                ))}
              </div>

              <div className="mt-auto border-t border-slate-200 bg-[#fcfdff] px-6 py-5 dark:border-white/10 dark:bg-[#102544]">
                <div className="mb-4 flex items-center gap-2 rounded-full border border-[#e2ba59]/30 bg-[#fff3cf] px-3 py-2 text-sm font-medium text-[#9b7218] dark:bg-[#e2ba59]/10 dark:text-[#f5df9d]">
                  <ShieldCheck className="h-4 w-4" />
                  Garansi Service
                </div>
                <SheetClose asChild>
                  <Button
                    asChild
                    className="w-full rounded-full border border-[#f3d889]/40 bg-gradient-to-r from-[#d3a53d] to-[#f0cf72] text-sm font-semibold text-[#102544] hover:brightness-105"
                  >
                    <Link href="#kontak" className="flex items-center justify-center gap-2">
                      <Phone className="h-4 w-4" />
                      Hubungi Sekarang
                    </Link>
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
