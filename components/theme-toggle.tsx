"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        disabled
        className="h-10 w-10 rounded-full border border-[#d9e4f0] bg-white text-[#102544] dark:border-white/10 dark:bg-white/6 dark:text-white"
      >
        <Sun className="h-4 w-4" />
      </Button>
    )
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="h-10 w-10 rounded-full border border-[#d9e4f0] bg-white text-[#102544] transition-colors hover:bg-white hover:text-[#b88415] dark:border-white/10 dark:bg-white/6 dark:text-white dark:hover:bg-white/12 dark:hover:text-[#f0cf72]"
    >
      <motion.div
        animate={{ rotate: resolvedTheme === "dark" ? 180 : 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        {resolvedTheme === "dark" ? (
          <Moon className="h-4 w-4 text-[#f0cf72]" />
        ) : (
          <Sun className="h-4 w-4 text-[#102544]" />
        )}
      </motion.div>
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
