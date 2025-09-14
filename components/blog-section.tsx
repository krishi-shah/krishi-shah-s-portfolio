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
    title: "Lessons from Building a Solar Tracking System",
    excerpt: "Key insights from developing an IoT-based solar tracking system using Arduino, including hardware challenges, sensor integration, and energy optimization strategies.",
    date: "2024-02-15",
    readTime: "5 min",
    category: "IoT & Hardware",
    tags: ["Arduino", "IoT", "Renewable Energy", "Hardware"],
    slug: "solar-tracking-system-lessons"
  },
  {
    title: "Optimizing SQL Queries for Large-Scale Analytics",
    excerpt: "Performance optimization techniques that reduced query execution time by 65% in healthcare analytics dashboards, with practical examples and benchmarks.",
    date: "2024-01-28",
    readTime: "7 min",
    category: "Data Engineering",
    tags: ["SQL", "Performance", "Data Analytics", "Optimization"],
    slug: "optimizing-sql-queries-analytics"
  },
  {
    title: "Building Healthcare Dashboards in Power BI",
    excerpt: "Complete walkthrough of designing and implementing healthcare analytics dashboards, from data modeling to user interface design and automated reporting.",
    date: "2024-01-10",
    readTime: "6 min",
    category: "Business Intelligence",
    tags: ["Power BI", "Healthcare", "Data Visualization", "Dashboards"],
    slug: "healthcare-dashboards-power-bi"
  },
  {
    title: "Machine Learning for Customer Churn Prediction",
    excerpt: "Step-by-step guide to building customer churn prediction models using Python and scikit-learn, with feature engineering and model evaluation techniques.",
    date: "2023-12-20",
    readTime: "8 min",
    category: "Machine Learning",
    tags: ["Python", "Machine Learning", "Customer Analytics", "Predictive Modeling"],
    slug: "ml-customer-churn-prediction"
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
                      onClick={() => {
                        // For now, this will just show a coming soon message
                        // In a real implementation, you'd navigate to the blog post
                        alert('Blog post coming soon! This is a preview of the blog structure.')
                      }}
                    >
                      Read Full Article
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-slate-400 mb-6">
              Want to dive deeper into technical topics and project case studies?
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                variant="outline"
                className="border-cyan-500 text-cyan-400 hover:bg-cyan-950/30"
                onClick={() => {
                  alert('Full blog coming soon! Stay tuned for in-depth technical articles and case studies.')
                }}
              >
                View All Articles
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                className="border-slate-600 text-slate-300 hover:bg-slate-800/30"
                onClick={() => window.open('https://medium.com/@krishi-shah', '_blank')}
              >
                Follow on Medium
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}