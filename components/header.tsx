"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";
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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: "Beranda", href: "#beranda" },
    { name: "Tentang Kami", href: "#tentang" },
    { name: "Layanan", href: "#layanan" },
    { name: "Area Layanan", href: "#area" },
    { name: "Testimoni", href: "#testimoni" },
    { name: "Kontak", href: "#kontak" },
  ];

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-md shadow-md dark:bg-background/90"
          : "bg-transparent"
      )}
    >
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <Link href="/" className="flex items-center">
            <Image
              src={logo}
              alt="Logo"
              width={100}
              height={100}
              className="object-cover"
            />
          </Link>
        </motion.div>

        <nav className="hidden md:flex gap-1">
          {navItems.map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <Link
                href={item.href}
                className="px-3 py-2 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            <Button
              asChild
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
            >
              <Link href="#kontak" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                Hubungi Sekarang
              </Link>
            </Button>
          </motion.div>
        </div>

        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-16 z-50 bg-background/95 backdrop-blur-md shadow-lg md:hidden border-b"
          >
            <nav className="container flex flex-col p-4">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Link
                    href={item.href}
                    className="py-3 text-lg font-medium hover:text-primary transition-colors"
                    onClick={toggleMenu}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className="mt-4"
              >
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                >
                  <Link
                    href="#kontak"
                    onClick={toggleMenu}
                    className="flex items-center justify-center gap-2"
                  >
                    <Phone className="h-4 w-4" />
                    Hubungi Sekarang
                  </Link>
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
