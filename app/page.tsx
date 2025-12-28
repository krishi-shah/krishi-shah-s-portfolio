"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { 
  ArrowRight, 
  ArrowUpRight, 
  Download, 
  Mail, 
  Linkedin, 
  Github,
  Menu, 
  X, 
  ChevronDown,
  Sparkles,
  Code2,
  Database,
  Brain,
  BarChart3,
  Cloud,
  Terminal,
  Quote,
  Calendar,
  MapPin,
  ExternalLink,
  Check,
  Send
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import ThemeToggle from "@/components/theme-toggle"

/* ============================================
   ANIMATION VARIANTS
   ============================================ */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
}

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.5 }
  }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  }
}

/* ============================================
   ANIMATED SECTION COMPONENT
   ============================================ */
function AnimatedSection({ children, className = "", delay = 0 }: { 
  children: React.ReactNode
  className?: string
  delay?: number 
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeUp}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/* ============================================
   DATA
   ============================================ */
const skills = {
  "Languages": [
    { name: "Python", level: 95 },
    { name: "SQL", level: 90 },
    { name: "JavaScript/TypeScript", level: 85 },
    { name: "R", level: 75 },
  ],
  "ML & Data Science": [
    { name: "TensorFlow/Keras", level: 85 },
    { name: "PyTorch", level: 80 },
    { name: "Scikit-learn", level: 90 },
    { name: "Pandas/NumPy", level: 95 },
  ],
  "Visualization": [
    { name: "Tableau", level: 90 },
    { name: "Power BI", level: 85 },
    { name: "Matplotlib/Seaborn", level: 90 },
    { name: "D3.js", level: 70 },
  ],
  "Cloud & Tools": [
    { name: "Azure", level: 80 },
    { name: "Docker", level: 75 },
    { name: "Git", level: 90 },
    { name: "Spark", level: 75 },
  ],
}

const experiences = [
  {
    title: "Software Developer Co-op",
    company: "Government of Ontario",
    location: "Toronto, ON",
    period: "2024 - Present",
    description: "Building data-driven solutions for government operations, collaborating with cross-functional teams to develop scalable software systems.",
    highlights: [
      "Developing Python-based automation tools improving workflow efficiency",
      "Contributing to data analytics pipelines for policy decision support",
      "Implementing best practices in code quality and documentation"
    ],
    tech: ["Python", "SQL", "Azure", "Power BI"]
  },
  {
    title: "Data Science Intern",
    company: "NFOX Pvt. Ltd",
    location: "Gujarat, India",
    period: "Nov 2022 - Feb 2023",
    description: "Led machine learning initiatives to predict customer behavior and improve business outcomes through data-driven insights.",
    highlights: [
      "Built ML models reducing customer churn by 12%",
      "Implemented NLP pipeline improving customer satisfaction by 10%",
      "Created executive dashboards visualizing $2M+ in revenue metrics"
    ],
    tech: ["Python", "NLP", "Tableau", "Machine Learning"]
  },
  {
    title: "Data Analyst Intern",
    company: "CODE CLAUSE Pvt. Ltd",
    location: "Pune, India",
    period: "Mar 2022 - Jul 2022",
    description: "Drove data analytics initiatives resulting in significant cost savings and improved forecasting accuracy.",
    highlights: [
      "Reduced excess inventory by 15% through predictive analytics",
      "Improved sales forecast accuracy by 20% using time series models",
      "Designed Power BI dashboards for C-suite financial reporting"
    ],
    tech: ["SQL", "Python", "Power BI", "Time Series"]
  }
]

const projects = [
  {
    id: 1,
    title: "Healthcare Analytics Dashboard",
    category: "Data Analytics",
    description: "Comprehensive Power BI solution for healthcare facility management, enabling data-driven decisions for patient care optimization.",
    problem: "Healthcare facility struggled with manual reporting processes taking 20+ hours weekly, limiting insight into patient outcomes and operational efficiency.",
    solution: "Designed and implemented an automated analytics dashboard with real-time KPI tracking, department-level drill-downs, and predictive patient flow modeling.",
    impact: [
      "35% reduction in reporting time",
      "12% improvement in operational efficiency",
      "20% faster patient outcome tracking"
    ],
    tech: ["Power BI", "DAX", "SQL", "Python"],
    image: "/projects/healthcare.png",
    featured: true
  },
  {
    id: 2,
    title: "ML Customer Churn Prediction",
    category: "Machine Learning",
    description: "End-to-end machine learning pipeline predicting customer churn with 87% accuracy, enabling proactive retention strategies.",
    problem: "Company experienced 15% annual churn with no early warning system, resulting in significant revenue loss and reactive retention efforts.",
    solution: "Developed ensemble ML models with feature engineering, implemented NLP sentiment analysis on feedback data, and built automated prediction pipeline.",
    impact: [
      "12% reduction in customer churn",
      "10% improvement in satisfaction scores",
      "$500K+ in prevented revenue loss"
    ],
    tech: ["Python", "Scikit-learn", "NLP", "Pandas"],
    image: "/projects/churn.png",
    featured: true
  },
  {
    id: 3,
    title: "IoT Solar Tracking System",
    category: "IoT",
    description: "Arduino-based intelligent solar panel tracking system maximizing energy capture through real-time sun position optimization.",
    problem: "Static solar panels lose 15-30% potential energy due to suboptimal sun alignment throughout the day.",
    solution: "Engineered IoT solution with light-dependent resistors, servo motors, and microcontroller programming for dynamic panel positioning.",
    impact: [
      "20% increase in energy output",
      "Real-time position optimization",
      "Automated maintenance alerts"
    ],
    tech: ["Arduino", "C++", "IoT Sensors", "Python"],
    image: "/projects/solar.png",
    featured: true
  },
  {
    id: 4,
    title: "Sales Performance Dashboard",
    category: "Data Analytics",
    description: "Interactive Tableau dashboard providing real-time visibility into sales metrics with advanced customer segmentation.",
    problem: "Sales team lacked unified view of performance metrics, leading to missed opportunities and inefficient targeting.",
    solution: "Built multi-dimensional dashboard with customer segmentation algorithms, trend analysis, and cross-functional filtering capabilities.",
    impact: [
      "25% boost in analytical efficiency",
      "15% improvement in targeting accuracy",
      "40% faster insight access"
    ],
    tech: ["Tableau", "SQL", "Python", "Statistics"],
    image: "/projects/sales.png",
    featured: false
  }
]

const testimonials = [
  {
    quote: "Krishi demonstrates exceptional ability to translate complex data into actionable business insights. His work on our analytics platform significantly improved our decision-making process.",
    author: "Senior Manager",
    role: "Government of Ontario",
    avatar: "/testimonials/avatar1.png"
  },
  {
    quote: "Outstanding technical skills combined with strong communication abilities. Krishi's ML models directly contributed to our customer retention improvements.",
    author: "Data Science Lead",
    role: "NFOX Pvt. Ltd",
    avatar: "/testimonials/avatar2.png"
  }
]

const blogPosts = [
  {
    title: "5 Steps to Become a Data Scientist",
    excerpt: "A comprehensive roadmap from foundational skills to landing your first role.",
    date: "May 2024",
    readTime: "6 min",
    category: "Career"
  },
  {
    title: "Building Production ML Pipelines",
    excerpt: "Best practices for deploying machine learning models at scale.",
    date: "Apr 2024",
    readTime: "8 min",
    category: "ML Engineering"
  },
  {
    title: "The Future of AI in Healthcare",
    excerpt: "Exploring how machine learning is transforming patient care.",
    date: "Mar 2024",
    readTime: "5 min",
    category: "AI Trends"
  }
]

/* ============================================
   MAIN COMPONENT
   ============================================ */
export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [mounted, setMounted] = useState(false)
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95])

  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      const sections = ["home", "about", "experience", "projects", "skills", "contact"]
      for (const section of sections) {
        const element = document.getElementById(section)
        if (!element) continue
        const rect = element.getBoundingClientRect()
        if (rect.top <= 150 && rect.bottom >= 150) {
          setActiveSection(section)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus('sending')
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    setFormStatus('sent')
    setTimeout(() => setFormStatus('idle'), 3000)
  }

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === selectedCategory)

  const categories = ["All", ...new Set(projects.map(p => p.category))]

  if (!mounted) return null

  return (
    <div className="relative">
      {/* ============================================
          NAVIGATION
          ============================================ */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="glass-strong mt-4 rounded-2xl px-6 py-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link 
                href="#home" 
                onClick={() => scrollToSection("home")}
                className="text-xl font-semibold tracking-tight focus-ring rounded-lg"
              >
                <span className="text-gradient">KS</span>
              </Link>

              {/* Desktop Navigation */}
              <ul className="hidden md:flex items-center gap-1">
                {["home", "about", "experience", "projects", "skills", "contact"].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => scrollToSection(item)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium capitalize transition-all duration-200 focus-ring ${
                        activeSection === item
                          ? "bg-primary/10 text-primary"
                          : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                      }`}
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>

              {/* Actions */}
              <div className="flex items-center gap-3">
                <ThemeToggle />
                <Button 
                  size="sm" 
                  className="hidden sm:flex btn-primary"
                  onClick={() => scrollToSection("contact")}
                >
                  Let's Talk
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                
                {/* Mobile Menu */}
                <button 
                  className="md:hidden p-2 hover:bg-secondary rounded-lg focus-ring"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  aria-label="Toggle menu"
                >
                  {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
              </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden pt-4 pb-2 border-t border-border mt-4"
              >
                <ul className="space-y-1">
                  {["home", "about", "experience", "projects", "skills", "contact"].map((item) => (
                    <li key={item}>
                      <button
                        onClick={() => scrollToSection(item)}
                        className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium capitalize transition-colors ${
                          activeSection === item
                            ? "bg-primary/10 text-primary"
                            : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                        }`}
                      >
                        {item}
                      </button>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </div>
        </nav>
      </header>

      <main id="main-content">
        {/* ============================================
            HERO SECTION
            ============================================ */}
        <section 
          id="home" 
          ref={heroRef}
          className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
          {/* Background Effects */}
          <div className="absolute inset-0 bg-hero-pattern dark:bg-hero-pattern-dark" />
          <div className="absolute inset-0 bg-dot-pattern bg-dot-md opacity-[0.02]" />
          
          {/* Animated gradient orbs */}
          <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />

          <motion.div 
            style={{ opacity: heroOpacity, scale: heroScale }}
            className="container-wide relative z-10 pt-32 pb-20"
          >
            <div className="max-w-4xl mx-auto text-center">
              {/* Status Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <span className="text-sm font-medium text-primary">Open to opportunities</span>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
              >
                Hi, I'm{" "}
                <span className="text-gradient">Krishi Shah</span>
              </motion.h1>

              {/* Role */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-medium mb-6"
              >
                Data Scientist & ML Engineer
              </motion.p>

              {/* Value Proposition */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
              >
                I build intelligent systems that transform raw data into{" "}
                <span className="text-foreground font-medium">actionable insights</span> and{" "}
                <span className="text-foreground font-medium">measurable business impact</span>.
                Currently at Government of Ontario.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="flex flex-wrap items-center justify-center gap-4"
              >
                <Button 
                  size="lg" 
                  className="btn-primary text-base px-8"
                  onClick={() => scrollToSection("projects")}
                >
                  View Projects
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="text-base px-8"
                  onClick={() => window.open('/resume/Krishi_Shah_Resume.pdf', '_blank')}
                >
                  <Download className="mr-2 h-5 w-5" />
                  Resume
                </Button>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 mt-16 pt-8 border-t border-border"
              >
                {[
                  { value: "3+", label: "Internships" },
                  { value: "5+", label: "ML Projects" },
                  { value: "100K+", label: "Data Points" },
                  { value: "4+", label: "Years Coding" },
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-gradient">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
              <button 
                onClick={() => scrollToSection("about")}
                className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors focus-ring rounded-lg p-2"
              >
                <span className="text-xs font-medium uppercase tracking-wider">Scroll</span>
                <ChevronDown className="h-5 w-5 animate-bounce" />
              </button>
            </motion.div>
          </motion.div>
        </section>

        {/* ============================================
            ABOUT SECTION
            ============================================ */}
        <section id="about" className="section-padding bg-secondary/30">
          <div className="container-wide">
            <AnimatedSection className="max-w-4xl mx-auto">
              {/* Section Header */}
              <div className="text-center mb-16">
                <Badge variant="outline" className="mb-4">About Me</Badge>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                  Passionate about turning data into impact
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Computer Science student at York University with a mission to build 
                  intelligent systems that solve real-world problems.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Image */}
                <div className="relative">
                  <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 p-1">
                    <div className="w-full h-full rounded-[calc(1.5rem-4px)] overflow-hidden bg-card">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1744211827596-V1wEYgvZ0Vp94xpO3oOlMrgJeH8vs0.jpeg"
                        alt="Krishi Shah"
                        width={500}
                        height={500}
                        className="w-full h-full object-cover"
                        priority
                      />
                    </div>
                  </div>
                  {/* Floating badges */}
                  <div className="absolute -top-4 -right-4 bg-card border border-border rounded-2xl px-4 py-2 shadow-soft">
                    <span className="text-sm font-medium">🎓 York University</span>
                  </div>
                  <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-2xl px-4 py-2 shadow-soft">
                    <span className="text-sm font-medium">📍 Toronto, Canada</span>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">My Journey</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      From building my first predictive model to deploying production ML systems, 
                      I've been driven by the power of data to create meaningful change. My journey 
                      spans healthcare analytics, customer intelligence, and sustainable technology.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">What I Do</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      I specialize in the intersection of data science, machine learning, and software 
                      engineering. Whether it's building predictive models, designing analytics dashboards, 
                      or developing full-stack applications, I focus on creating solutions that deliver 
                      measurable business value.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">Beyond Code</h3>
                    <div className="flex flex-wrap gap-2">
                      {["🌱 Sustainability", "📚 Continuous Learning", "🏃‍♂️ Fitness", "✈️ Travel", "🤝 Mentoring"].map((interest) => (
                        <Badge key={interest} variant="secondary" className="text-sm">
                          {interest}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ============================================
            EXPERIENCE SECTION
            ============================================ */}
        <section id="experience" className="section-padding">
          <div className="container-wide">
            <AnimatedSection>
              <div className="text-center mb-16">
                <Badge variant="outline" className="mb-4">Experience</Badge>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                  Where I've made an impact
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Building data-driven solutions across industries
                </p>
              </div>
            </AnimatedSection>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />
                
                {experiences.map((exp, index) => (
                  <AnimatedSection key={index} delay={index * 0.1}>
                    <div className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                      index % 2 === 0 ? 'md:flex-row-reverse' : ''
                    }`}>
                      {/* Timeline dot */}
                      <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background -translate-x-1/2 md:-translate-x-1/2 z-10" />
                      
                      {/* Content */}
                      <div className={`flex-1 ml-8 md:ml-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                        <div className="bg-card border border-border rounded-2xl p-6 card-hover">
                          <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                            <div>
                              <h3 className="text-xl font-semibold">{exp.title}</h3>
                              <p className="text-primary font-medium">{exp.company}</p>
                            </div>
                            <div className="text-right text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                {exp.period}
                              </div>
                              <div className="flex items-center gap-1 mt-1">
                                <MapPin className="h-4 w-4" />
                                {exp.location}
                              </div>
                            </div>
                          </div>
                          
                          <p className="text-muted-foreground mb-4">{exp.description}</p>
                          
                          <ul className="space-y-2 mb-4">
                            {exp.highlights.map((highlight, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm">
                                <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                <span>{highlight}</span>
                              </li>
                            ))}
                          </ul>
                          
                          <div className="flex flex-wrap gap-2">
                            {exp.tech.map((tech) => (
                              <Badge key={tech} variant="secondary" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      {/* Spacer for timeline */}
                      <div className="hidden md:block flex-1" />
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
            PROJECTS SECTION
            ============================================ */}
        <section id="projects" className="section-padding bg-secondary/30">
          <div className="container-wide">
            <AnimatedSection>
              <div className="text-center mb-12">
                <Badge variant="outline" className="mb-4">Projects</Badge>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                  Featured Work
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Real-world projects demonstrating impact through data and code
                </p>
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap justify-center gap-2 mb-12">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 focus-ring ${
                      selectedCategory === category
                        ? "bg-primary text-primary-foreground"
                        : "bg-card border border-border hover:border-primary/50"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </AnimatedSection>

            {/* Projects Grid */}
            <motion.div 
              layout
              className="grid md:grid-cols-2 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <AnimatedSection key={project.id} delay={index * 0.1}>
                  <motion.div
                    layout
                    className="group bg-card border border-border rounded-2xl overflow-hidden card-hover h-full"
                  >
                    {/* Project Header */}
                    <div className="p-6 pb-4">
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <Badge variant="outline">{project.category}</Badge>
                        {project.featured && (
                          <Badge className="bg-primary/10 text-primary border-0">
                            <Sparkles className="h-3 w-3 mr-1" />
                            Featured
                          </Badge>
                        )}
                      </div>
                      
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Problem & Solution */}
                    <div className="px-6 pb-4 space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold text-primary mb-1">The Challenge</h4>
                        <p className="text-sm text-muted-foreground">{project.problem}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-primary mb-1">The Solution</h4>
                        <p className="text-sm text-muted-foreground">{project.solution}</p>
                      </div>
                    </div>

                    {/* Impact */}
                    <div className="px-6 pb-4">
                      <h4 className="text-sm font-semibold mb-2">Key Results</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.impact.map((result, i) => (
                          <Badge key={i} variant="secondary" className="text-xs bg-primary/5">
                            {result}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="px-6 py-4 border-t border-border bg-secondary/30 flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.slice(0, 3).map((tech) => (
                          <span key={tech} className="text-xs text-muted-foreground font-mono">
                            {tech}
                          </span>
                        ))}
                        {project.tech.length > 3 && (
                          <span className="text-xs text-muted-foreground">
                            +{project.tech.length - 3}
                          </span>
                        )}
                      </div>
                      <Button variant="ghost" size="sm" className="group/btn">
                        View Details
                        <ArrowUpRight className="ml-1 h-4 w-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </Button>
                    </div>
                  </motion.div>
                </AnimatedSection>
              ))}
            </motion.div>

            {/* View More */}
            <AnimatedSection className="text-center mt-12">
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.open('https://github.com/krishi-shah', '_blank')}
              >
                <Github className="mr-2 h-5 w-5" />
                View All on GitHub
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
            </AnimatedSection>
          </div>
        </section>

        {/* ============================================
            SKILLS SECTION
            ============================================ */}
        <section id="skills" className="section-padding">
          <div className="container-wide">
            <AnimatedSection>
              <div className="text-center mb-16">
                <Badge variant="outline" className="mb-4">Skills</Badge>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                  Technical Expertise
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Technologies and tools I use to bring ideas to life
                </p>
              </div>
            </AnimatedSection>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {Object.entries(skills).map(([category, items], categoryIndex) => (
                <AnimatedSection key={category} delay={categoryIndex * 0.1}>
                  <div className="bg-card border border-border rounded-2xl p-6 h-full">
                    <div className="flex items-center gap-3 mb-6">
                      {categoryIndex === 0 && <Terminal className="h-5 w-5 text-primary" />}
                      {categoryIndex === 1 && <Brain className="h-5 w-5 text-primary" />}
                      {categoryIndex === 2 && <BarChart3 className="h-5 w-5 text-primary" />}
                      {categoryIndex === 3 && <Cloud className="h-5 w-5 text-primary" />}
                      <h3 className="font-semibold">{category}</h3>
                    </div>
                    
                    <div className="space-y-4">
                      {items.map((skill) => (
                        <div key={skill.name}>
                          <div className="flex justify-between text-sm mb-1">
                            <span>{skill.name}</span>
                            <span className="text-muted-foreground">{skill.level}%</span>
                          </div>
                          <div className="h-2 bg-secondary rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                              className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================
            TESTIMONIALS SECTION
            ============================================ */}
        <section className="section-padding bg-secondary/30">
          <div className="container-wide">
            <AnimatedSection>
              <div className="text-center mb-16">
                <Badge variant="outline" className="mb-4">Testimonials</Badge>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                  What People Say
                </h2>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <div className="bg-card border border-border rounded-2xl p-8 relative">
                    <Quote className="absolute top-6 right-6 h-8 w-8 text-primary/20" />
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-semibold">
                        {testimonial.author.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold">{testimonial.author}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================
            CONTACT SECTION
            ============================================ */}
        <section id="contact" className="section-padding">
          <div className="container-wide">
            <AnimatedSection>
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <Badge variant="outline" className="mb-4">Contact</Badge>
                  <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                    Let's Work Together
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    I'm currently open to new opportunities. Let's discuss how I can contribute to your team.
                  </p>
                </div>

                <div className="grid lg:grid-cols-5 gap-12">
                  {/* Contact Info */}
                  <div className="lg:col-span-2 space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
                      <p className="text-muted-foreground mb-6">
                        Whether you have a project in mind, a job opportunity, or just want to say hi, 
                        I'd love to hear from you.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <a 
                        href="mailto:krishi12@my.yorku.ca"
                        className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors group"
                      >
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <Mail className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">Email</p>
                          <p className="text-sm text-muted-foreground">krishi12@my.yorku.ca</p>
                        </div>
                      </a>

                      <a 
                        href="https://linkedin.com/in/krishi-shah312"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors group"
                      >
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <Linkedin className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">LinkedIn</p>
                          <p className="text-sm text-muted-foreground">krishi-shah312</p>
                        </div>
                        <ArrowUpRight className="ml-auto h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      </a>

                      <a 
                        href="https://github.com/krishi-shah"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors group"
                      >
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <Github className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">GitHub</p>
                          <p className="text-sm text-muted-foreground">krishi-shah</p>
                        </div>
                        <ArrowUpRight className="ml-auto h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      </a>
                    </div>
                  </div>

                  {/* Contact Form */}
                  <div className="lg:col-span-3">
                    <form onSubmit={handleSubmit} className="bg-card border border-border rounded-2xl p-8">
                      <div className="grid sm:grid-cols-2 gap-6 mb-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium mb-2">
                            Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                            placeholder="John Doe"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium mb-2">
                            Email
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <label htmlFor="subject" className="block text-sm font-medium mb-2">
                          Subject
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          required
                          className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                          placeholder="Project Collaboration"
                        />
                      </div>
                      
                      <div className="mb-6">
                        <label htmlFor="message" className="block text-sm font-medium mb-2">
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={5}
                          required
                          className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                          placeholder="Tell me about your project or opportunity..."
                        />
                      </div>
                      
                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full btn-primary"
                        disabled={formStatus === 'sending' || formStatus === 'sent'}
                      >
                        {formStatus === 'idle' && (
                          <>
                            Send Message
                            <Send className="ml-2 h-5 w-5" />
                          </>
                        )}
                        {formStatus === 'sending' && "Sending..."}
                        {formStatus === 'sent' && (
                          <>
                            <Check className="mr-2 h-5 w-5" />
                            Message Sent!
                          </>
                        )}
                      </Button>
                    </form>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>

      {/* ============================================
          FOOTER
          ============================================ */}
      <footer className="py-12 border-t border-border">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <span className="text-xl font-semibold text-gradient">KS</span>
              <span className="text-muted-foreground">
                © {new Date().getFullYear()} Krishi Shah. All rights reserved.
              </span>
            </div>
            
            <div className="flex items-center gap-4">
              <a 
                href="https://linkedin.com/in/krishi-shah312"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-secondary rounded-lg transition-colors focus-ring"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://github.com/krishi-shah"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-secondary rounded-lg transition-colors focus-ring"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="mailto:krishi12@my.yorku.ca"
                className="p-2 hover:bg-secondary rounded-lg transition-colors focus-ring"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
