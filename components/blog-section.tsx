"use client"

import { motion } from "framer-motion"
import { ExternalLink, Calendar, Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface BlogPost {
  title: string
  excerpt: string
  date: string
  readTime: string
  category: string
  tags: string[]
  slug: string
}

const blogPosts: BlogPost[] = [
  {
    title: "5 Steps to become a data scientist",
    excerpt: "A comprehensive guide outlining the essential steps and skills needed to transition into a data science career, from foundational knowledge to practical experience.",
    date: "2024-05-21",
    readTime: "6 min",
    category: "Data Science",
    tags: ["Data Science", "Career", "Learning Path", "Skills"],
    slug: "5-steps-to-become-data-scientist"
  },
  {
    title: "Mid-journey is dead? How this tool will kill AI for better",
    excerpt: "Exploring the evolution of AI tools and how emerging technologies are reshaping the artificial intelligence landscape for more practical applications.",
    date: "2024-07-05",
    readTime: "5 min",
    category: "Artificial Intelligence",
    tags: ["AI Tools", "Technology Trends", "Innovation", "Future Tech"],
    slug: "midjourney-dead-ai-tools-evolution"
  },
  {
    title: "200 programming terms every programmer must know",
    excerpt: "An extensive compilation of essential programming terminology that every developer should understand, from beginner concepts to advanced technical jargon.",
    date: "2024-06-23",
    readTime: "12 min",
    category: "Programming",
    tags: ["Programming", "Terminology", "Learning", "Reference"],
    slug: "200-programming-terms-every-programmer"
  },
  {
    title: "NFT Nightmares: Scams That destroyed the bubble",
    excerpt: "An in-depth analysis of the NFT market collapse, examining the scams and fraudulent practices that contributed to the bursting of the digital ownership bubble.",
    date: "2024-05-28",
    readTime: "7 min",
    category: "Blockchain & Web3",
    tags: ["NFT", "Blockchain", "Scams", "Digital Assets"],
    slug: "nft-nightmares-scams-bubble"
  },
  {
    title: "IS JAVA DEAD? (RIP 😢 JAVA) WILL JAVA BE REPLACED BY KOTLIN?",
    excerpt: "A thorough examination of Java's current state in modern development and whether Kotlin poses a real threat to Java's dominance in enterprise applications.",
    date: "2022-06-17",
    readTime: "8 min",
    category: "Programming Languages",
    tags: ["Java", "Kotlin", "Programming Languages", "Enterprise Development"],
    slug: "java-dead-kotlin-replacement"
  },
  {
    title: "Will Web 4.0 be the Next Big Thing?",
    excerpt: "Exploring the potential of Web 4.0 and what this next evolution of the internet might look like, from decentralized systems to AI integration.",
    date: "2022-07-11",
    readTime: "6 min",
    category: "Web Development",
    tags: ["Web 4.0", "Future Web", "Technology Trends", "Internet Evolution"],
    slug: "web-4-next-big-thing"
  }
]

export default function BlogSection() {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4">
              📝 Insights & Learning
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-2">
              Sharing knowledge from real projects and technical challenges
            </p>
            <p className="text-slate-400 max-w-2xl mx-auto">
              From data engineering best practices to machine learning model deployment, 
              I document lessons learned and practical insights from building data-driven solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full bg-slate-800/50 backdrop-blur-sm border-slate-700 shadow-lg hover:shadow-cyan-900/20 transition-all duration-300 hover:border-cyan-500/50">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="bg-cyan-500/10 text-cyan-400 border-cyan-500/30">
                        {post.category}
                      </Badge>
                      <div className="flex items-center text-slate-400 text-sm gap-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>{formatDate(post.date)}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>{post.readTime} read</span>
                        </div>
                      </div>
                    </div>
                    <CardTitle className="text-xl font-semibold text-slate-200 hover:text-cyan-300 transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-slate-400 leading-relaxed">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="bg-slate-900/50 text-slate-300 text-xs hover:bg-slate-800 hover:text-cyan-400 transition-colors"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  
                  <CardFooter className="pt-4 border-t border-slate-700">
                    <Button 
                      variant="outline" 
                      className="w-full border-cyan-500/50 text-cyan-400 hover:bg-cyan-950/30 hover:border-cyan-400 transition-all duration-300 group"
                      onClick={() => window.open('https://medium.com/@krishishah2021', '_blank')}
                    >
                      Read on Medium
                      <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 max-w-2xl mx-auto">
              <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-3">
                📚 More Technical Writing
              </h3>
              <p className="text-slate-300 mb-6">
                Explore my complete collection of articles on Medium, covering data science, programming, AI, and emerging technologies.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-0 px-6 py-2 font-medium transition-all duration-300 transform hover:scale-105"
                  onClick={() => window.open('https://medium.com/@krishishah2021', '_blank')}
                >
                  View All Articles on Medium
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  className="border-slate-600 text-slate-300 hover:bg-slate-800/30 hover:border-slate-500 px-6 py-2"
                  onClick={() => window.open('https://medium.com/@krishishah2021', '_blank')}
                >
                  Follow on Medium
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="mt-4 flex items-center justify-center gap-2 text-slate-500 text-sm">
                <span>📈 113 followers</span>
                <span>•</span>
                <span>🎯 Published in Level Up Coding, CodeX, and more</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}