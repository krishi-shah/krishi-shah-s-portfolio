"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, Building } from "lucide-react"
import { motion } from "framer-motion"

interface ExperienceCardProps {
  title: string
  company: string
  period: string
  location: string
  description: string[]
  skills: string[]
}

export default function ExperienceCard({ title, company, period, location, description, skills }: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg bg-zinc-900/80 backdrop-blur-sm border-zinc-800 shadow-lg hover:shadow-lime-900/20 hover:border-lime-500/30">
        <CardHeader className="pb-2 border-b border-zinc-800">
          <div className="flex justify-between items-start flex-wrap gap-2">
            <div>
              <CardTitle className="text-xl font-semibold text-lime-400">
                {title}
              </CardTitle>
              <CardDescription className="text-lg font-medium text-zinc-300 flex items-center gap-1">
                <Building className="h-4 w-4 text-pink-400" />
                {company}
              </CardDescription>
            </div>
            <div className="text-right">
              <div className="flex items-center justify-end text-zinc-500 text-sm mb-1">
                <Calendar className="h-4 w-4 mr-1 text-lime-400" />
                <span className="font-mono">{period}</span>
              </div>
              <div className="flex items-center justify-end text-zinc-500 text-sm">
                <MapPin className="h-4 w-4 mr-1 text-pink-400" />
                <span className="font-mono">{location}</span>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-4">
          <ul className="list-disc pl-5 space-y-2 text-zinc-400 marker:text-lime-400">
            {description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </CardContent>
        <CardFooter className="flex flex-wrap gap-2 pt-2 border-t border-zinc-800">
          {skills.map((skill, index) => (
            <Badge
              key={index}
              variant="outline"
              className="bg-black/50 text-lime-400 border-lime-500/30 hover:bg-lime-500/10 hover:border-lime-500/50 font-mono text-xs"
            >
              {skill}
            </Badge>
          ))}
        </CardFooter>
      </Card>
    </motion.div>
  )
}
