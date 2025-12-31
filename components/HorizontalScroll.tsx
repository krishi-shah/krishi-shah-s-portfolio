'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  category: string;
  color: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'ML Pipeline Automation',
    category: 'Machine Learning',
    color: 'from-emerald-500 to-cyan-500',
  },
  {
    id: 2,
    title: 'Real-time Analytics Dashboard',
    category: 'Data Visualization',
    color: 'from-violet-500 to-purple-500',
  },
  {
    id: 3,
    title: 'Predictive Maintenance System',
    category: 'AI/IoT',
    color: 'from-orange-500 to-red-500',
  },
  {
    id: 4,
    title: 'NLP Sentiment Analyzer',
    category: 'Natural Language Processing',
    color: 'from-blue-500 to-indigo-500',
  },
];

export default function HorizontalScroll() {
  const [mounted, setMounted] = useState(false);
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-75%']);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-black">
      {/* Section Title */}
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="absolute top-20 sm:top-24 left-0 right-0 z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-emerald-400 text-xs sm:text-sm font-medium tracking-wider uppercase mb-2 sm:mb-4 block">
            Featured Work
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Projects</span>
          </h2>
        </div>

        {mounted ? (
          <motion.div style={{ x }} className="flex gap-4 sm:gap-6 md:gap-8 pl-4 sm:pl-[5vw] md:pl-[10vw]">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group relative w-[85vw] sm:w-[70vw] md:w-[50vw] lg:w-[45vw] h-[50vh] sm:h-[55vh] md:h-[60vh] flex-shrink-0"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Card Background */}
                <div className="absolute inset-0 rounded-2xl sm:rounded-3xl overflow-hidden liquid-glass-card">
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
                  
                  {/* Pattern overlay */}
                  <div className="absolute inset-0 opacity-10">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <defs>
                        <pattern id={`grid-${project.id}`} width="10" height="10" patternUnits="userSpaceOnUse">
                          <circle cx="5" cy="5" r="0.5" fill="currentColor" />
                        </pattern>
                      </defs>
                      <rect width="100" height="100" fill={`url(#grid-${project.id})`} />
                    </svg>
                  </div>
                </div>

                {/* Content */}
                <div className="relative h-full flex flex-col justify-end p-5 sm:p-8 md:p-12">
                  {/* Project Number */}
                  <div className="absolute top-4 sm:top-8 right-4 sm:right-8 text-4xl sm:text-6xl md:text-8xl font-bold text-white/10">
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  {/* Category */}
                  <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-white/10 text-white/70 text-xs sm:text-sm font-medium mb-3 sm:mb-4 w-fit">
                    {project.category}
                  </span>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 group-hover:translate-x-2 transition-transform duration-300">
                    {project.title}
                  </h3>

                  {/* View Project Button */}
                  <div className="flex items-center gap-2 text-emerald-400 font-medium text-sm sm:text-base group-hover:gap-3 sm:group-hover:gap-4 transition-all duration-300">
                    <span>View Project</span>
                    <svg className="w-4 sm:w-5 h-4 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>

                {/* Hover glow effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${project.color} rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500 -z-10`} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="flex gap-4 sm:gap-6 md:gap-8 pl-4 sm:pl-[5vw] md:pl-[10vw]">
            <div className="w-[85vw] sm:w-[70vw] md:w-[50vw] lg:w-[45vw] h-[50vh] sm:h-[55vh] md:h-[60vh] flex-shrink-0 rounded-2xl sm:rounded-3xl liquid-glass-card" />
          </div>
        )}
      </div>
    </section>
  );
}
