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
      <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg bg-slate-800/50 backdrop-blur-sm border-slate-700 shadow-lg hover:shadow-cyan-900/20">
        <CardHeader className="pb-2 border-b border-slate-700">
          <div className="flex justify-between items-start flex-wrap gap-2">
            <div>
              <CardTitle className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                {title}
              </CardTitle>
              <CardDescription className="text-lg font-medium text-slate-300 flex items-center gap-1">
                <Building className="h-4 w-4 text-cyan-400" />
                {company}
              </CardDescription>
            </div>
            <div className="text-right">
              <div className="flex items-center justify-end text-slate-400 text-sm mb-1">
                <Calendar className="h-4 w-4 mr-1 text-cyan-400" />
                <span>{period}</span>
              </div>
              <div className="flex items-center justify-end text-slate-400 text-sm">
                <MapPin className="h-4 w-4 mr-1 text-cyan-400" />
                <span>{location}</span>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-4">
          <ul className="list-disc pl-5 space-y-2 text-slate-300 marker:text-cyan-400">
            {description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </CardContent>
        <CardFooter className="flex flex-wrap gap-2 pt-2 border-t border-slate-700">
          {skills.map((skill, index) => (
            <Badge
              key={index}
              variant="outline"
              className="bg-slate-900/50 text-cyan-400 border-cyan-900/50 hover:bg-slate-800"
            >
              {skill}
            </Badge>
          ))}
        </CardFooter>
      </Card>
    </motion.div>
  )
}
