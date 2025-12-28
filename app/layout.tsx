import type React from "react"
import type { Metadata } from "next"
import "../styles/globals.css"

export const metadata: Metadata = {
  title: "Krishi Shah – Data Analyst & Software Developer Portfolio",
  description:
    "Experienced Data Analyst & Software Developer specializing in Python, SQL, Machine Learning, and data visualization. Currently at Government of Ontario with proven track record of improving business operations through data-driven solutions.",
  keywords:
    "Krishi Shah, Data Analyst, Software Developer, Python, SQL, Machine Learning, Tableau, Power BI, York University, Government of Ontario, Data Science, Business Intelligence, Healthcare Analytics, IoT, Arduino, Predictive Analytics",
  authors: [{ name: "Krishi Shah" }],
  creator: "Krishi Shah",
  publisher: "Krishi Shah",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://krishi11.vercel.app",
    title: "Krishi Shah – Data Analyst & Software Developer",
    description: "Experienced Data Analyst & Software Developer with expertise in Python, SQL, Machine Learning, and data visualization. View my projects and experience.",
    siteName: "Krishi Shah Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Krishi Shah - Data Analyst & Software Developer Portfolio"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Krishi Shah – Data Analyst & Software Developer",
    description: "Experienced Data Analyst & Software Developer specializing in Python, SQL, and Machine Learning",
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
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://krishi11.vercel.app",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#84cc16" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className="antialiased bg-black text-white" suppressHydrationWarning>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-lime-500 text-black px-4 py-2 rounded z-50 font-bold">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  )
}
