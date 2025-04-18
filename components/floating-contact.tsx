"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Phone, MessageCircle, X } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false)
  const message = 'Halo, saya ingin bertanya tentang layanan servis microwave atau elektronik lainnya. Apakah bisa dibantu?'
  const phoneNumber = '6285737655537'
  const encodedMessage = encodeURIComponent(message)
  const waUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`


  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
            className="mb-4 flex flex-col gap-2"
          >
            <Button
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center gap-2 shadow-lg"
              asChild
            >
              <a href={waUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" />
                WhatsApp
              </a>
            </Button>
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center gap-2 shadow-lg"
              asChild
            >
              <a href="tel:+6285737655537">
                <Phone className="h-5 w-5" />
                Telepon
              </a>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white flex items-center justify-center shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Phone className="h-6 w-6" />}
      </motion.button>
    </div>
  )
}
