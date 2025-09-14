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
        className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-0 px-8 py-3 font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25" 
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
        className="border-cyan-500 text-cyan-400 hover:bg-cyan-950/30 px-8 py-3 font-semibold transition-all duration-300 transform hover:scale-105"
        onClick={handleViewOnline}
      >
        <ExternalLink className="mr-2 h-4 w-4" />
        View Online
      </Button>
      
      <Button 
        variant="outline" 
        className="border-slate-600 text-slate-300 hover:bg-slate-800/30 px-8 py-3 font-semibold transition-all duration-300 transform hover:scale-105"
        onClick={() => window.open('https://www.linkedin.com/in/krishi-shah312', '_blank')}
      >
        LinkedIn Profile
        <ExternalLink className="ml-2 h-4 w-4" />
      </Button>
    </div>
  )
}