import type React from "react"
import type { Metadata } from "next"
import { ThemeProvider } from "@/components/theme-provider"
import "../styles/globals.css"

export const metadata: Metadata = {
  title: "Krishi Shah | Data Scientist & ML Engineer",
  description:
    "Data Scientist and Machine Learning Engineer specializing in building intelligent systems that drive business impact. Expert in Python, ML/AI, and full-stack development.",
  keywords:
    "Krishi Shah, Data Scientist, Machine Learning Engineer, Full Stack Developer, Python, TensorFlow, PyTorch, React, Next.js, AI, Deep Learning",
  authors: [{ name: "Krishi Shah" }],
  creator: "Krishi Shah",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://krishi-shah-s-portfolio.vercel.app",
    title: "Krishi Shah | Data Scientist & ML Engineer",
    description: "Building intelligent systems that transform data into actionable insights and business impact.",
    siteName: "Krishi Shah Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Krishi Shah - Data Scientist & ML Engineer"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Krishi Shah | Data Scientist & ML Engineer",
    description: "Building intelligent systems that transform data into actionable insights.",
    images: ["/og-image.jpg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://krishi-shah-s-portfolio.vercel.app",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#4F46E5" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#1e1b4b" media="(prefers-color-scheme: dark)" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className="min-h-screen" suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <a 
            href="#main-content" 
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg z-[100] font-medium focus-ring"
          >
            Skip to main content
          </a>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
