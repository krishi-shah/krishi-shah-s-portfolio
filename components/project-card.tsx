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
      <Card className="overflow-hidden h-full flex flex-col bg-slate-800/50 backdrop-blur-sm border-slate-700 shadow-lg hover:shadow-cyan-900/20 transition-all duration-300">
        <CardHeader className="pb-2 relative">
          <div className="absolute top-4 right-4 p-2 bg-cyan-500/10 rounded-full">{icon}</div>
          <div className="flex justify-between items-start">
            <CardTitle className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              {title}
            </CardTitle>
          </div>
          <CardDescription className="flex flex-col gap-1 mt-1 text-slate-400">
            <span className="text-sm">
              <span className="font-medium text-cyan-400">Tools:</span> {tools}
            </span>
            <span className="text-sm">
              <span className="font-medium text-cyan-400">Period:</span> {period}
            </span>
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          {image && (
            <div className="mb-4 rounded-lg overflow-hidden bg-slate-900/50 h-32 flex items-center justify-center border border-slate-700">
              <span className="text-slate-400 text-sm">📊 Project Preview</span>
            </div>
          )}
          
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-semibold text-cyan-400 mb-1">Problem / Context</h4>
              <p className="text-slate-300 text-sm">{problem}</p>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold text-cyan-400 mb-1">My Role & Tools</h4>
              <p className="text-slate-300 text-sm">{role}</p>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold text-cyan-400 mb-1">Outcome / Impact</h4>
              <p className="text-slate-300 text-sm font-medium bg-slate-900/50 p-2 rounded border border-slate-700">{outcome}</p>
            </div>
            
            {achievements.length > 0 && (
              <div>
                <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Achievements</h4>
                <ul className="list-none space-y-1">
                  {achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start">
                      <ChevronRight className="h-3 w-3 text-cyan-400 mt-1 flex-shrink-0" />
                      <span className="text-xs text-slate-400">{achievement}</span>
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
                  className="text-xs bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-1 rounded-full hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                >
                  Live Demo
                </button>
              )}
              {github && (
                <button 
                  onClick={() => window.open(github, '_blank')}
                  className="text-xs bg-slate-700 text-slate-300 px-3 py-1 rounded-full hover:bg-slate-600 transition-all duration-300"
                >
                  GitHub
                </button>
              )}
              {caseStudy && (
                <button 
                  onClick={() => window.open(caseStudy, '_blank')}
                  className="text-xs border border-cyan-500/50 text-cyan-400 px-3 py-1 rounded-full hover:bg-cyan-950/30 transition-all duration-300"
                >
                  Case Study
                </button>
              )}
            </div>
          )}
        </CardContent>
        <CardFooter className="flex flex-wrap gap-2 pt-2 border-t border-slate-700">
          {tags.map((tag, index) => (
            <Badge
              key={index}
              variant="outline"
              className="bg-slate-900/50 text-cyan-400 border-cyan-900/50 hover:bg-slate-800"
            >
              {tag}
            </Badge>
          ))}
        </CardFooter>
      </Card>
    </motion.div>
  )
}
