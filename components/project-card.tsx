"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronRight } from "lucide-react"
import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface ProjectCardProps {
  title: string
  tools: string
  period: string
  problem: string
  role: string
  outcome: string
  achievements: string[]
  tags: string[]
  icon?: ReactNode
  liveDemo?: string
  github?: string
  caseStudy?: string
  image?: string
}

export default function ProjectCard({ title, tools, period, problem, role, outcome, achievements, tags, icon, liveDemo, github, caseStudy, image }: ProjectCardProps) {
  return (
    <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
      <Card className="overflow-hidden h-full flex flex-col bg-zinc-900/80 backdrop-blur-sm border-zinc-800 shadow-lg hover:shadow-lime-900/20 transition-all duration-300 hover:border-lime-500/30">
        <CardHeader className="pb-2 relative">
          <div className="absolute top-4 right-4 p-2 bg-lime-500/10 rounded-full text-lime-400">{icon}</div>
          <div className="flex justify-between items-start">
            <CardTitle className="text-xl font-semibold text-lime-400">
              {title}
            </CardTitle>
          </div>
          <CardDescription className="flex flex-col gap-1 mt-1 text-zinc-500">
            <span className="text-sm font-mono">
              <span className="font-medium text-pink-400">Tools:</span> {tools}
            </span>
            <span className="text-sm font-mono">
              <span className="font-medium text-pink-400">Period:</span> {period}
            </span>
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          {image && (
            <div className="mb-4 rounded-lg overflow-hidden bg-black/50 h-32 flex items-center justify-center border border-zinc-800">
              <span className="text-zinc-500 text-sm font-mono">📊 Project Preview</span>
            </div>
          )}
          
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-semibold text-lime-400 mb-1 font-mono">{'>'} Problem / Context</h4>
              <p className="text-zinc-400 text-sm">{problem}</p>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold text-pink-400 mb-1 font-mono">{'>'} My Role & Tools</h4>
              <p className="text-zinc-400 text-sm">{role}</p>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold text-lime-400 mb-1 font-mono">{'>'} Outcome / Impact</h4>
              <p className="text-zinc-300 text-sm font-medium bg-lime-500/5 p-2 rounded border border-lime-500/20">{outcome}</p>
            </div>
            
            {achievements.length > 0 && (
              <div>
                <h4 className="text-sm font-semibold text-pink-400 mb-2 font-mono">{'>'} Key Achievements</h4>
                <ul className="list-none space-y-1">
                  {achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start">
                      <ChevronRight className="h-3 w-3 text-lime-400 mt-1 flex-shrink-0" />
                      <span className="text-xs text-zinc-500">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          
          {/* Action Buttons */}
          {(liveDemo || github || caseStudy) && (
            <div className="mt-4 flex flex-wrap gap-2">
              {liveDemo && (
                <button 
                  onClick={() => window.open(liveDemo, '_blank')}
                  className="text-xs bg-lime-500 text-black font-bold px-3 py-1 rounded-full hover:bg-lime-400 transition-all duration-300 transform hover:scale-105"
                >
                  Live Demo
                </button>
              )}
              {github && (
                <button 
                  onClick={() => window.open(github, '_blank')}
                  className="text-xs bg-zinc-800 text-zinc-300 px-3 py-1 rounded-full hover:bg-zinc-700 hover:text-lime-400 transition-all duration-300 font-mono"
                >
                  GitHub
                </button>
              )}
              {caseStudy && (
                <button 
                  onClick={() => window.open(caseStudy, '_blank')}
                  className="text-xs border border-pink-500/50 text-pink-400 px-3 py-1 rounded-full hover:bg-pink-500/10 transition-all duration-300 font-mono"
                >
                  Case Study
                </button>
              )}
            </div>
          )}
        </CardContent>
        <CardFooter className="flex flex-wrap gap-2 pt-2 border-t border-zinc-800">
          {tags.map((tag, index) => (
            <Badge
              key={index}
              variant="outline"
              className="bg-black/50 text-lime-400 border-lime-500/30 hover:bg-lime-500/10 font-mono text-xs"
            >
              {tag}
            </Badge>
          ))}
        </CardFooter>
      </Card>
    </motion.div>
  )
}
