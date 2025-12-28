"use client"

import { useState, useEffect } from "react"
import { Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Check for saved theme preference or default to dark
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setIsDark(savedTheme === 'dark')
    } else {
      // Default to dark theme for this portfolio
      setIsDark(true)
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDark
    setIsDark(newTheme)
    localStorage.setItem('theme', newTheme ? 'dark' : 'light')
    
    // Apply theme to document
    if (newTheme) {
      document.documentElement.classList.add('dark')
      document.documentElement.classList.remove('light')
    } else {
      document.documentElement.classList.add('light')
      document.documentElement.classList.remove('dark')
    }
  }

  if (!mounted) {
    return (
      <Button
        variant="outline"
        size="sm"
        className="border-slate-600 text-slate-300"
        disabled
      >
        <Sun className="h-4 w-4" />
      </Button>
    )
  }

  return (
    <Button
      variant="outline"
      size="sm"
      className={`border-slate-600 hover:border-cyan-500 transition-all duration-300 ${
        isDark 
          ? "text-slate-300 hover:text-cyan-400 bg-slate-800/50" 
          : "text-slate-700 hover:text-cyan-600 bg-white/50"
      }`}
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      {isDark ? (
        <Sun className="h-4 w-4 transition-transform hover:rotate-180 duration-500" />
      ) : (
        <Moon className="h-4 w-4 transition-transform hover:-rotate-12 duration-500" />
      )}
    </Button>
  )
}