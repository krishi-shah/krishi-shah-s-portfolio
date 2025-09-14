"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState("programming")

  const skills = {
    dataanalytics: [
      { name: "Python", level: 90, icon: "🐍" },
      { name: "SQL", level: 85, icon: "🗄️" },
      { name: "R", level: 75, icon: "📊" },
      { name: "Excel", level: 90, icon: "📈" },
      { name: "Statistical Analysis", level: 80, icon: "📊" },
    ],
    machinelearning: [
      { name: "scikit-learn", level: 85, icon: "🤖" },
      { name: "TensorFlow", level: 75, icon: "🧠" },
      { name: "PyTorch", level: 70, icon: "🔥" },
      { name: "NLP", level: 75, icon: "💬" },
      { name: "Time Series", level: 75, icon: "⏱️" },
      { name: "Predictive Analytics", level: 85, icon: "🔮" },
    ],
    webdev: [
      { name: "React", level: 80, icon: "⚛️" },
      { name: "Next.js", level: 75, icon: "▲" },
      { name: "Tailwind CSS", level: 85, icon: "🎨" },
      { name: "Node.js", level: 70, icon: "🟢" },
      { name: "JavaScript", level: 80, icon: "💛" },
      { name: "TypeScript", level: 75, icon: "🔷" },
    ],
    visualization: [
      { name: "Tableau", level: 90, icon: "📊" },
      { name: "Power BI", level: 85, icon: "📈" },
      { name: "Matplotlib", level: 80, icon: "🐍" },
      { name: "Plotly", level: 75, icon: "📊" },
      { name: "D3.js", level: 65, icon: "📊" },
    ],
    cloud: [
      { name: "Azure", level: 75, icon: "☁️" },
      { name: "Spark", level: 70, icon: "⚡" },
      { name: "Hadoop", level: 70, icon: "🐘" },
      { name: "Docker", level: 65, icon: "🐳" },
    ],
  }

  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-3">
        Technical Skills
      </h3>

      <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 shadow-lg">
        <Tabs defaultValue="dataanalytics" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-6 bg-slate-900/50 p-1">
            <TabsTrigger
              value="dataanalytics"
              onClick={() => setActiveTab("dataanalytics")}
              className="data-[state=active]:bg-cyan-500/10 data-[state=active]:text-cyan-400 text-sm font-medium"
            >
              📊 Data Analytics
            </TabsTrigger>
            <TabsTrigger
              value="machinelearning"
              onClick={() => setActiveTab("machinelearning")}
              className="data-[state=active]:bg-cyan-500/10 data-[state=active]:text-cyan-400 text-sm font-medium"
            >
              🤖 Machine Learning
            </TabsTrigger>
            <TabsTrigger
              value="webdev"
              onClick={() => setActiveTab("webdev")}
              className="data-[state=active]:bg-cyan-500/10 data-[state=active]:text-cyan-400 text-sm font-medium"
            >
              💻 Web Development
            </TabsTrigger>
            <TabsTrigger
              value="visualization"
              onClick={() => setActiveTab("visualization")}
              className="data-[state=active]:bg-cyan-500/10 data-[state=active]:text-cyan-400 text-sm font-medium"
            >
              📈 Visualization
            </TabsTrigger>
            <TabsTrigger
              value="cloud"
              onClick={() => setActiveTab("cloud")}
              className="data-[state=active]:bg-cyan-500/10 data-[state=active]:text-cyan-400 text-sm font-medium"
            >
              ☁️ Cloud & Big Data
            </TabsTrigger>
          </TabsList>

          {Object.entries(skills).map(([category, skillList]) => (
            <TabsContent key={category} value={category} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {skillList.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="p-4 bg-slate-900/50 rounded-lg border border-slate-700 hover:border-cyan-500/50 transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ y: -2 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{skill.icon}</span>
                        <span className="text-sm font-medium text-slate-200">{skill.name}</span>
                      </div>
                      <span className="text-xs text-cyan-400 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-8">
          <h4 className="text-lg font-medium text-slate-300 mb-3">Additional Skills</h4>
          <div className="flex flex-wrap gap-2">
            {[
              "Data Mining",
              "Data Cleaning",
              "Data Integration",
              "Feature Engineering",
              "Data Quality Governance",
              "Code Review",
              "Conduct Testing",
              "Relational Databases",
              "Distributed Computing",
              "Flat Files",
              "Experimental Design",
              "UNIX",
              "XML",
              "Xgboost",
              "Statistical Analysis",
              "Problem-Solving",
              "Self-Learning",
              "Presentation",
              "Adaptability",
              "Leadership",
              "Ownership",
              "Coaching",
            ].map((skill) => (
              <Badge
                key={skill}
                variant="secondary"
                className="bg-slate-900/50 text-slate-300 border border-slate-800 hover:bg-slate-800 hover:text-cyan-400 transition-colors"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
