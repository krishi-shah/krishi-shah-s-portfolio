"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Download, Mail, Phone, Linkedin, Menu, X, ExternalLink, Code, Database, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import ProjectCard from "@/components/project-card"
import ExperienceCard from "@/components/experience-card"
import SkillsSection from "@/components/skills-section"
import HeroBackground from "@/components/hero-background"
import TechDecoration from "@/components/tech-decoration"
import SectionHeader from "@/components/section-header"
import ResumeDownload from "@/components/resume-download"
import BlogSection from "@/components/blog-section"
import ThemeToggle from "@/components/theme-toggle"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      const sections = ["home", "about", "experience", "projects", "resume", "insights", "contact"]

      for (const section of sections) {
        const element = document.getElementById(section)
        if (!element) continue

        const rect = element.getBoundingClientRect()
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveSection(section)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      closeMenu()
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Form submission logic would go here
    alert("Message sent! (This is a demo)")
  }

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-white">
      {/* Header & Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-900/80 border-b border-slate-800" role="banner">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center" role="navigation" aria-label="Main navigation">
          <div className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            <Link href="#home" onClick={() => scrollToSection("home")} className="flex items-center gap-2">
              <Code className="h-5 w-5 text-cyan-400" />
              <span>Krishi Shah</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8" role="menubar" aria-label="Main menu">
            {["home", "about", "experience", "projects", "resume", "insights", "contact"].map((item) => (
              <li key={item}>
                <Link
                  href={`#${item}`}
                  className={`capitalize hover:text-cyan-400 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-slate-900 rounded-sm px-2 py-1 -mx-2 -my-1 ${
                    activeSection === item
                      ? "text-cyan-400 font-medium relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-cyan-400"
                      : "text-slate-300"
                  }`}
                  onClick={() => scrollToSection(item)}
                  role="menuitem"
                  aria-current={activeSection === item ? 'page' : undefined}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <ThemeToggle />
            
            {/* Mobile Menu Button */}
            <button className="md:hidden text-slate-300 focus:outline-none hover:text-cyan-400 transition-colors" onClick={toggleMenu} aria-label="Toggle menu">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-slate-900 border-b border-slate-800"
          >
            <ul className="flex flex-col items-center space-y-4 py-4">
              {["home", "about", "experience", "projects", "resume", "insights", "contact"].map((item) => (
                <li key={item} className="w-full text-center">
                  <Link
                    href={`#${item}`}
                    className={`capitalize hover:text-cyan-400 transition-colors block py-2 ${
                      activeSection === item ? "text-cyan-400 font-medium" : "text-slate-300"
                    }`}
                    onClick={() => scrollToSection(item)}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </header>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Krishi Shah",
            "jobTitle": ["Data Analyst", "Software Developer"],
            "description": "Experienced Data Analyst & Software Developer specializing in Python, SQL, Machine Learning, and data visualization",
            "url": "https://krishi11.vercel.app",
            "image": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1744211827596-V1wEYgvZ0Vp94xpO3oOlMrgJeH8vs0.jpeg",
            "sameAs": [
              "https://www.linkedin.com/in/krishi-shah312",
              "https://github.com/krishi-shah"
            ],
            "alumniOf": {
              "@type": "Organization",
              "name": "York University",
              "url": "https://www.yorku.ca"
            },
            "worksFor": {
              "@type": "Organization",
              "name": "Government of Ontario",
              "url": "https://www.ontario.ca"
            },
            "knowsAbout": [
              "Data Analysis",
              "Machine Learning",
              "Python Programming",
              "SQL",
              "Data Visualization",
              "Business Intelligence",
              "Tableau",
              "Power BI",
              "Software Development"
            ],
            "hasCredential": [
              {
                "@type": "EducationalOccupationalCredential",
                "name": "Bachelor of Computer Science (Honors)",
                "credentialCategory": "degree",
                "educationalLevel": "Undergraduate",
                "recognizedBy": {
                  "@type": "Organization",
                  "name": "York University"
                }
              }
            ]
          })
        }}
      />
      
      <main id="main-content" role="main">
        {/* Home Section */}
        <section id="home" className="relative min-h-[100vh] flex items-center overflow-hidden">
          <HeroBackground />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row items-center justify-between gap-8"
            >
              <div className="md:w-2/3 text-center md:text-left">
                <div className="mb-6 inline-block">
                  <span className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-cyan-400 px-4 py-2 rounded-full text-sm font-semibold border border-cyan-500/20">
                    🚀 Data Analyst & Software Developer
                  </span>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white leading-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                    Krishi Shah
                  </span>
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold text-slate-200 mb-6 leading-relaxed">
                  Turning data into decisions with
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"> dashboards, ML models, and scalable code</span>
                </h2>
                <p className="text-slate-300 mb-8 max-w-2xl text-lg leading-relaxed">
                  Software Developer Co-op at Government of Ontario with a passion for building data-driven solutions. 
                  I transform complex datasets into actionable insights and create scalable applications that solve real-world problems.
                </p>
                
                {/* Key Metrics */}
                <div className="flex flex-wrap justify-center md:justify-start gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-400">5+</div>
                    <div className="text-sm text-slate-400">ML Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-400">100K+</div>
                    <div className="text-sm text-slate-400">Data Points Analyzed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-400">4+</div>
                    <div className="text-sm text-slate-400">Years Coding</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-400">3</div>
                    <div className="text-sm text-slate-400">Internships</div>
                  </div>
                </div>

                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  <Button
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-0 px-8 py-3 text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                    onClick={() => scrollToSection("projects")}
                  >
                    View Projects
                  </Button>
                  <Button
                    variant="outline"
                    className="border-cyan-500 text-cyan-400 hover:bg-cyan-950/30 px-8 py-3 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
                    onClick={() => window.open('#', '_blank')}
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Download Resume
                  </Button>
                  <Button
                    variant="outline"
                    className="border-slate-600 text-slate-300 hover:bg-slate-800/30 px-8 py-3 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
                    onClick={() => scrollToSection("contact")}
                  >
                    Contact Me
                  </Button>
                </div>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <div className="relative w-60 h-60 md:w-80 md:h-80">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 blur-2xl opacity-30 animate-pulse"></div>
                  <div className="absolute inset-4 rounded-full bg-slate-900/50 backdrop-blur-sm"></div>
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1744211827596-V1wEYgvZ0Vp94xpO3oOlMrgJeH8vs0.jpeg"
                    alt="Krishi Shah - Data Analyst & Software Developer"
                    width={320}
                    height={320}
                    className="rounded-full border-4 border-cyan-500/50 object-cover relative z-10 shadow-2xl"
                    priority
                  />
                  
                  {/* Floating skill badges around the image */}
                  <div className="absolute top-4 right-8 bg-slate-800/80 backdrop-blur-sm px-3 py-1 rounded-full border border-cyan-500/30 hidden md:block">
                    <span className="text-xs text-cyan-400 font-semibold">Python</span>
                  </div>
                  <div className="absolute bottom-8 left-4 bg-slate-800/80 backdrop-blur-sm px-3 py-1 rounded-full border border-cyan-500/30 hidden md:block">
                    <span className="text-xs text-cyan-400 font-semibold">SQL</span>
                  </div>
                  <div className="absolute top-1/2 right-0 bg-slate-800/80 backdrop-blur-sm px-3 py-1 rounded-full border border-cyan-500/30 hidden md:block">
                    <span className="text-xs text-cyan-400 font-semibold">ML</span>
                  </div>
                  <div className="absolute bottom-4 right-12 bg-slate-800/80 backdrop-blur-sm px-3 py-1 rounded-full border border-cyan-500/30 hidden md:block">
                    <span className="text-xs text-cyan-400 font-semibold">Tableau</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-center"
            >
              <ChevronRight size={28} className="text-cyan-400 rotate-90 mx-auto" />
              <div className="text-xs text-slate-400 mt-1">Scroll to explore</div>
            </motion.div>
          </div>
        </section>

        {/* About Me Section */}
        <section id="about" className="py-20 relative">
          <TechDecoration className="top-10 right-10" />
          <TechDecoration className="bottom-10 left-10" variant="2" />

          <div className="container mx-auto px-4 max-w-4xl relative z-10">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <SectionHeader title="About Me" subtitle="My Background & Vision" />

              <div className="space-y-8">
                {/* Professional Summary */}
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 shadow-lg relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full -mr-16 -mt-16"></div>
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4">
                      💡 My Vision & Mission
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-semibold text-cyan-300 mb-3">🎯 What I Do</h4>
                        <p className="text-slate-300 leading-relaxed">
                          As a Computer Science student at York University and Software Developer Co-op at Government of Ontario, 
                          I transform complex datasets into actionable insights and build scalable applications that solve real-world problems. 
                          I specialize in the intersection of data science, machine learning, and software engineering.
                        </p>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-cyan-300 mb-3">🚀 What Drives Me</h4>
                        <p className="text-slate-300 leading-relaxed">
                          I'm passionate about leveraging technology to create meaningful impact. Whether it's optimizing healthcare operations through data analytics, 
                          predicting customer behavior with ML models, or building sustainable IoT solutions, I believe in using data and code to make informed decisions 
                          that improve lives and drive innovation.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Career Goals & Aspirations */}
                <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
                  <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4">
                    🎆 Career Goals & Vision
                  </h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center p-4 bg-slate-900/30 rounded-lg border border-slate-700/50">
                      <div className="text-2xl mb-2">📊</div>
                      <h4 className="font-semibold text-cyan-300 mb-2">Data Science Leadership</h4>
                      <p className="text-sm text-slate-400">Lead cross-functional analytics teams to drive data-driven decision making in enterprise environments</p>
                    </div>
                    <div className="text-center p-4 bg-slate-900/30 rounded-lg border border-slate-700/50">
                      <div className="text-2xl mb-2">🌍</div>
                      <h4 className="font-semibold text-cyan-300 mb-2">Global Impact</h4>
                      <p className="text-sm text-slate-400">Build scalable AI/ML solutions that address climate change, healthcare accessibility, and social equity</p>
                    </div>
                    <div className="text-center p-4 bg-slate-900/30 rounded-lg border border-slate-700/50">
                      <div className="text-2xl mb-2">🚀</div>
                      <h4 className="font-semibold text-cyan-300 mb-2">Innovation & Entrepreneurship</h4>
                      <p className="text-sm text-slate-400">Develop breakthrough technologies that merge sustainability with cutting-edge data science</p>
                    </div>
                  </div>
                </div>

                {/* Personal Interests */}
                <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
                  <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4">
                    🎨 Beyond Code & Data
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {[
                      { icon: "🌱", text: "Renewable Energy Enthusiast" },
                      { icon: "📚", text: "Continuous Learning" },
                      { icon: "🌏", text: "Sustainability Advocate" },
                      { icon: "🤝", text: "Community Building" },
                      { icon: "🏃‍♂️", text: "Fitness & Wellness" },
                      { icon: "✈️", text: "Travel & Cultures" }
                    ].map((interest, index) => (
                      <div key={index} className="flex items-center gap-2 bg-slate-900/50 px-3 py-2 rounded-full border border-slate-700">
                        <span className="text-sm">{interest.icon}</span>
                        <span className="text-sm text-slate-300">{interest.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-3">
                  Education
                </h3>
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 shadow-lg">
                  <h4 className="font-medium text-white">Bachelor of Computer Science (Honors)</h4>
                  <p className="text-slate-400">York University, Toronto, ON</p>
                  <div className="mt-4 p-3 bg-slate-900/50 rounded-lg border border-slate-800">
                    <p className="text-slate-300">
                      <span className="font-medium text-cyan-400">Relevant Coursework:</span> Data Structures,
                      Algorithms, Database Systems, Statistical Modeling, Machine Learning, Data Visualization
                    </p>
                  </div>
                </div>
              </div>

              <SkillsSection />
            </motion.div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 bg-gradient-to-b from-slate-900 to-slate-950 relative">
          <TechDecoration className="top-20 left-10" variant="3" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <SectionHeader title="Professional Experience" subtitle="My Career Journey" />

              <div className="max-w-4xl mx-auto space-y-8">
                <ExperienceCard
                  title="Software Developer Co-op"
                  company="Government of Ontario"
                  period="2024 - Present"
                  location="Toronto, ON"
                  description={[
                    "Currently working as a Software Developer Co-op, applying my skills in programming and data analysis to government projects.",
                    "Collaborating with cross-functional teams to develop and maintain software solutions.",
                    "Utilizing technical skills to contribute to data-driven decision-making processes.",
                  ]}
                  skills={["Python", "SQL", "Data Analysis", "Software Development"]}
                />

                <ExperienceCard
                  title="Data Science Intern"
                  company="NFOX Pvt. Ltd"
                  period="Nov 2022 - Feb 2023"
                  location="Gujarat, India"
                  description={[
                    "Improved machine learning models to predict customer churn using Python and SQL, improving retention rates by 12%.",
                    "Utilized natural language processing (NLP) techniques to analyze customer feedback, uncovering insights that led to a 10% improvement in customer satisfaction.",
                    "Built interactive dashboards using Tableau to visualize KPIs, trends, and financial performance, streamlining data access for senior management.",
                    "Presented data-driven recommendations to business leaders, improving decision-making and optimizing marketing strategies.",
                  ]}
                  skills={["Python", "SQL", "Machine Learning", "NLP", "Tableau", "Data Visualization"]}
                />

                <ExperienceCard
                  title="Data Analyst Intern"
                  company="CODE CLAUSE Pvt. Ltd"
                  period="Mar 2022 - Jul 2022"
                  location="Pune, India"
                  description={[
                    "Analyzed sales data using SQL and Python to identify trends and optimize inventory management, resulting in a 15% reduction in excess stock.",
                    "Created machine learning models for sales forecasting, leveraging time series analysis and regression techniques to improve accuracy by 20%.",
                    "Enhanced a secure data storage and retrieval solution, enhancing scalability and accessibility of data across departments.",
                    "Led the design and implementation of business intelligence dashboards in Power BI, improving data visualization for financial reporting.",
                  ]}
                  skills={["SQL", "Python", "Data Analysis", "Machine Learning", "Power BI", "Time Series Analysis"]}
                />
              </div>

              <div className="mt-16">
                <h3 className="text-2xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-8">
                  Volunteer Experience
                </h3>

                <div className="max-w-4xl mx-auto space-y-8">
                  <ExperienceCard
                    title="Lassonde Student Ambassador"
                    company="York University"
                    period="Jun 2024 - Sep 2024"
                    location="Toronto, ON"
                    description={[
                      "Assisted first-year students with course enrollment and introduced them with information about programs and campus life.",
                      "Organized workshops and events promoting data analytics and technology for prospective students.",
                      "Represented the Lassonde School of Engineering at various university events.",
                      "Conducted campus tours and participated in Q&A sessions to address student inquiries.",
                    ]}
                    skills={["Leadership", "Communication", "Event Planning", "Mentoring"]}
                  />

                  <ExperienceCard
                    title="Week Zero Event Leader"
                    company="York University"
                    period="Jun 2024 - Sep 2024"
                    location="Toronto, ON"
                    description={[
                      "Led a team of volunteers to organize and execute the Week Zero orientation program for new students.",
                      "Coordinated activities and events designed to welcome new students into the university community.",
                      "Managed logistics for events, including scheduling, setup, and teardown.",
                    ]}
                    skills={["Team Leadership", "Event Management", "Organization", "Communication"]}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 relative">
          <TechDecoration className="bottom-20 right-10" variant="4" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <SectionHeader title="Featured Projects" subtitle="Real-World Impact & Results" />
              
              {/* Filter Tabs */}
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {["All", "Data Analytics", "Web Development", "AI/ML", "IoT"].map((filter) => (
                  <button
                    key={filter}
                    className="px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-950/30 hover:border-cyan-400"
                  >
                    {filter}
                  </button>
                ))}
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                <ProjectCard
                  title="Comprehensive Healthcare Analytics Dashboard"
                  tools="Power BI, DAX, SQL"
                  period="Feb 2024 - Mar 2024"
                  problem="Healthcare facility needed automated reporting and data visualization to replace manual processes that took hours weekly and provided limited insights into patient outcomes and operational efficiency."
                  role="Data Analyst - Designed data models, created interactive dashboards, implemented KPI tracking systems, and established automated reporting workflows."
                  outcome="Reduced reporting time by 35% and increased operational efficiency by 12% through automated KPI tracking and enhanced data transparency."
                  achievements={[
                    "Improved patient outcome tracking efficiency by 20% through data trend visualization",
                    "Enhanced insight retrieval speed by 40% with interactive filters for departments and treatments",
                    "Reduced operational expenses by 12% through financial metrics integration"
                  ]}
                  tags={["Data Analytics", "Power BI", "Healthcare", "KPI Tracking"]}
                  icon={<Database className="h-6 w-6" />}
                  image="healthcare-dashboard.png"
                  github="#"
                  caseStudy="#"
                />

                <ProjectCard
                  title="Dynamic Sales Performance Dashboard"
                  tools="Tableau, SQL, Python"
                  period="Jan 2024 - Feb 2024"
                  problem="Sales team lacked real-time visibility into performance metrics and customer segmentation data, leading to missed opportunities and inefficient targeting strategies."
                  role="Business Intelligence Developer - Built interactive dashboards, implemented customer segmentation algorithms, and created dynamic filtering systems."
                  outcome="Boosted analytical efficiency by 25% and increased customer satisfaction by 15% through improved targeting and data accessibility."
                  achievements={[
                    "Enhanced marketing team's customer targeting capabilities by 15% satisfaction increase",
                    "Reduced data insight access time by 40% with advanced filtering options",
                    "Improved user experience and dashboard flexibility by 30% with cross-navigation features"
                  ]}
                  tags={["Data Analytics", "Tableau", "Sales", "Customer Segmentation"]}
                  icon={<Database className="h-6 w-6" />}
                  image="sales-dashboard.png"
                  liveDemo="#"
                  github="#"
                />

                <ProjectCard
                  title="IoT-Based Solar Tracking System"
                  tools="Arduino, C++, Sensors, IoT"
                  period="Sep 2023 - Nov 2023"
                  problem="Static solar panels lose significant energy efficiency due to suboptimal sun alignment throughout the day, resulting in 15-30% energy loss compared to tracking systems."
                  role="IoT Developer - Programmed Arduino controllers, designed sensor integration systems, implemented real-time tracking algorithms, and optimized energy capture mechanisms."
                  outcome="Increased solar panel energy output by 20% through automated sun tracking and reduced energy loss through precision angle adjustments."
                  achievements={[
                    "Achieved 20% increase in solar panel output through precise 90° tracking adjustments",
                    "Enhanced system reliability with real-time data processing and dynamic positioning",
                    "Optimized power generation efficiency by automating sensor-based adjustments"
                  ]}
                  tags={["IoT", "Arduino", "Renewable Energy", "Automation"]}
                  icon={<Code className="h-6 w-6" />}
                  image="solar-tracking.png"
                  github="#"
                  caseStudy="#"
                />

                <ProjectCard
                  title="Machine Learning Customer Churn Prediction"
                  tools="Python, scikit-learn, Pandas, SQL"
                  period="Nov 2022 - Feb 2023"
                  problem="Company experienced 15% annual customer churn without early warning systems, leading to reactive rather than proactive retention strategies and revenue loss."
                  role="Data Scientist - Developed ML models, performed feature engineering, implemented NLP sentiment analysis, and created prediction pipelines for customer behavior analysis."
                  outcome="Improved customer retention rates by 12% and enhanced customer satisfaction by 10% through predictive analytics and proactive intervention strategies."
                  achievements={[
                    "Reduced customer churn by 12% using predictive machine learning models",
                    "Improved customer satisfaction by 10% through NLP sentiment analysis insights",
                    "Streamlined decision-making with automated prediction pipeline implementation"
                  ]}
                  tags={["AI/ML", "Python", "Predictive Analytics", "NLP"]}
                  icon={<Database className="h-6 w-6" />}
                  image="ml-churn.png"
                  github="#"
                />
              </div>
              
              <div className="text-center mt-12">
                <p className="text-slate-400 mb-4">Want to see more of my work?</p>
                <Button
                  variant="outline"
                  className="border-cyan-500 text-cyan-400 hover:bg-cyan-950/30"
                  onClick={() => window.open('https://github.com/krishi-shah', '_blank')}
                >
                  <Code className="mr-2 h-4 w-4" />
                  View All Projects on GitHub
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Resume Section */}
        <section id="resume" className="py-20 bg-gradient-to-b from-slate-950 to-slate-900 relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/10 to-transparent"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <SectionHeader title="Resume & Credentials" subtitle="Professional Background" />
              
              {/* Resume Highlights */}
              <div className="grid md:grid-cols-3 gap-6 mb-8 max-w-4xl mx-auto">
                <div className="bg-slate-800/30 backdrop-blur-sm rounded-lg p-6 border border-slate-700/50">
                  <div className="text-2xl mb-2">🎯</div>
                  <h3 className="text-lg font-semibold text-cyan-300 mb-2">ATS-Optimized</h3>
                  <p className="text-sm text-slate-400">Keyword-optimized resume tailored for data science and software development roles</p>
                </div>
                <div className="bg-slate-800/30 backdrop-blur-sm rounded-lg p-6 border border-slate-700/50">
                  <div className="text-2xl mb-2">📊</div>
                  <h3 className="text-lg font-semibold text-cyan-300 mb-2">Quantified Impact</h3>
                  <p className="text-sm text-slate-400">Metrics-driven achievements showcasing real business value and technical excellence</p>
                </div>
                <div className="bg-slate-800/30 backdrop-blur-sm rounded-lg p-6 border border-slate-700/50">
                  <div className="text-2xl mb-2">🚀</div>
                  <h3 className="text-lg font-semibold text-cyan-300 mb-2">Always Updated</h3>
                  <p className="text-sm text-slate-400">Latest projects, skills, and certifications reflecting current expertise and growth</p>
                </div>
              </div>
              
              <p className="text-slate-300 mb-8 max-w-2xl mx-auto text-lg">
                Ready to take the next step? Download my comprehensive resume showcasing 
                <span className="text-cyan-400 font-semibold">3 internships</span>, 
                <span className="text-cyan-400 font-semibold">5+ ML projects</span>, and 
                <span className="text-cyan-400 font-semibold">quantified business impact</span> across data analytics and software development roles.
              </p>
              
              <ResumeDownload />
              
              {/* Additional Credentials */}
              <div className="mt-12 pt-8 border-t border-slate-700/50">
                <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-6">
                  🏆 Certifications & Recognition
                </h3>
                <div className="flex flex-wrap justify-center gap-4">
                  {[
                    "Microsoft Azure Fundamentals",
                    "Google Analytics Certified",
                    "Tableau Desktop Specialist",
                    "Dean's List - York University",
                    "Python Programming Certificate"
                  ].map((cert, index) => (
                    <div key={index} className="bg-slate-800/30 px-4 py-2 rounded-full border border-slate-700/50">
                      <span className="text-sm text-slate-300">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Blog/Insights Section */}
        <section id="insights" className="bg-gradient-to-b from-slate-900 to-slate-950">
          <BlogSection />
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 relative">
          <TechDecoration className="top-10 left-10" variant="5" />
          <div className="container mx-auto px-4 max-w-2xl relative z-10">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <SectionHeader title="Contact Me" subtitle="Get In Touch" />
              <p className="text-center text-slate-400 mb-8">
                Have a question or want to collaborate? Feel free to get in touch!
              </p>

              <div className="flex flex-col items-center mb-8 space-y-4">
                <div className="flex items-center p-3 bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700 w-full max-w-md">
                  <div className="p-2 bg-cyan-500/10 rounded-full mr-3">
                    <Mail className="text-cyan-400" size={20} />
                  </div>
                  <a
                    href="mailto:krishi12@my.yorku.ca"
                    className="text-slate-300 hover:text-cyan-400 transition-colors"
                  >
                    krishi12@my.yorku.ca
                  </a>
                </div>
                <div className="flex items-center p-3 bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700 w-full max-w-md">
                  <div className="p-2 bg-cyan-500/10 rounded-full mr-3">
                    <Phone className="text-cyan-400" size={20} />
                  </div>
                  <span className="text-slate-300">825-777-0303</span>
                </div>
                <div className="flex items-center p-3 bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700 w-full max-w-md">
                  <div className="p-2 bg-cyan-500/10 rounded-full mr-3">
                    <Linkedin className="text-cyan-400" size={20} />
                  </div>
                  <a
                    href="https://www.linkedin.com/in/krishi-shah312"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-300 hover:text-cyan-400 transition-colors"
                  >
                    krishi-shah312
                  </a>
                </div>
              </div>

              <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700 shadow-xl">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white text-center mb-2">Send Me a Message</h3>
                  <p className="text-slate-400 text-center mb-6">
                    Fill out the form below and I'll get back to you as soon as possible.
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your Name"
                        required
                        className="w-full px-4 py-2 bg-slate-900/80 border border-slate-700 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white placeholder:text-slate-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Your Email"
                        required
                        className="w-full px-4 py-2 bg-slate-900/80 border border-slate-700 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white placeholder:text-slate-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        placeholder="Your Message"
                        required
                        className="w-full px-4 py-2 bg-slate-900/80 border border-slate-700 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white placeholder:text-slate-500"
                      ></textarea>
                    </div>
                    <div className="text-center">
                      <Button
                        type="submit"
                        className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-0"
                      >
                        Send Message
                      </Button>
                    </div>
                  </form>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-800 bg-gradient-to-b from-slate-950 to-black relative overflow-hidden" role="contentinfo">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/5 to-blue-900/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                <Code className="h-6 w-6 text-cyan-400" />
                <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  Krishi Shah
                </span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Transforming data into insights,
                <br />building solutions that matter.
              </p>
            </div>
            
            {/* Quick Links */}
            <div className="text-center">
              <h3 className="text-slate-300 font-semibold mb-4">Quick Links</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {["About", "Projects", "Resume", "Insights", "Contact"].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Connect */}
            <div className="text-center md:text-right">
              <h3 className="text-slate-300 font-semibold mb-4">Let's Connect</h3>
              <div className="flex justify-center md:justify-end gap-4">
                <a
                  href="https://www.linkedin.com/in/krishi-shah312"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-cyan-400 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://github.com/krishi-shah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-cyan-400 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Code className="h-5 w-5" />
                </a>
                <a
                  href="mailto:krishi12@my.yorku.ca"
                  className="text-slate-400 hover:text-cyan-400 transition-colors"
                  aria-label="Send Email"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="pt-6 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              &copy; {new Date().getFullYear()} Krishi Shah. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-xs text-slate-500">
              <span>Built with Next.js & Tailwind CSS</span>
              <span>•</span>
              <span>Hosted on Vercel</span>
              <span>•</span>
              <span>Made with ❤️ in Toronto</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
