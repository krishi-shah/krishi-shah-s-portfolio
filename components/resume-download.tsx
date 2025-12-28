"use client"

import { useState } from "react"
import { Download, ExternalLink, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ResumeDownload() {
  const [isDownloading, setIsDownloading] = useState(false)

  const handleDownload = async () => {
    setIsDownloading(true)
    try {
      // Simulate download delay
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Create a link to download the resume
      const link = document.createElement('a')
      link.href = '/resume/Krishi_Shah_Resume.pdf' // You'll need to add this file to public/resume/
      link.download = 'Krishi_Shah_Resume.pdf'
      link.target = '_blank'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } catch (error) {
      console.error('Download failed:', error)
    } finally {
      setIsDownloading(false)
    }
  }

  const handleViewOnline = () => {
    window.open('/resume/Krishi_Shah_Resume.pdf', '_blank')
  }

  return (
    <div className="flex flex-wrap justify-center gap-4">
      <Button 
        className="bg-lime-500 hover:bg-lime-400 text-black border-0 px-8 py-3 font-bold transition-all duration-300 transform hover:scale-105 neon-glow" 
        onClick={handleDownload}
        disabled={isDownloading}
      >
        {isDownloading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Preparing Download...
          </>
        ) : (
          <>
            <Download className="mr-2 h-4 w-4" />
            Download Resume
          </>
        )}
      </Button>
      
      <Button 
        variant="outline" 
        className="border-pink-500 text-pink-400 hover:bg-pink-500/10 px-8 py-3 font-semibold transition-all duration-300 transform hover:scale-105"
        onClick={handleViewOnline}
      >
        <ExternalLink className="mr-2 h-4 w-4" />
        View Online
      </Button>
      
      <Button 
        variant="outline" 
        className="border-zinc-700 text-zinc-400 hover:bg-zinc-800 hover:border-lime-500/50 hover:text-lime-400 px-8 py-3 font-semibold transition-all duration-300 transform hover:scale-105 font-mono"
        onClick={() => window.open('https://www.linkedin.com/in/krishi-shah312', '_blank')}
      >
        LinkedIn Profile
        <ExternalLink className="ml-2 h-4 w-4" />
      </Button>
    </div>
  )
}