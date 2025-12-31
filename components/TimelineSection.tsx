'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const experiences = [
  {
    year: '2024',
    title: 'Machine Learning Engineer',
    company: 'Tech Startup',
    description: 'Developing AI/ML solutions for data analytics and predictive modeling',
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'AWS'],
    type: 'work',
  },
  {
    year: '2023',
    title: 'Data Analyst Intern',
    company: 'Analytics Firm',
    description: 'Built dashboards and automated reporting pipelines for business insights',
    technologies: ['Power BI', 'SQL', 'Python', 'Excel'],
    type: 'work',
  },
  {
    year: '2022',
    title: 'Computer Science Degree',
    company: 'University',
    description: 'Graduated with honors, focusing on AI, ML, and software engineering',
    technologies: ['Algorithms', 'Data Structures', 'ML', 'Web Dev'],
    type: 'education',
  },
];

export default function TimelineSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className="py-16 sm:py-20 md:py-24 relative bg-black overflow-hidden">
      {/* Background decoration */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-emerald-500/30 to-transparent hidden md:block" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="text-emerald-400 text-sm font-medium tracking-wider uppercase mb-4 block">
            Journey
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Experience</span>
          </h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.year + exp.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative flex flex-col md:flex-row items-start md:items-center mb-8 sm:mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Content */}
              <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8 lg:pr-12 md:text-right' : 'md:pl-8 lg:pl-12'}`}>
                <div className="liquid-glass-card p-4 sm:p-6 group hover:border-emerald-500/30 transition-all duration-300">
                  {/* Year badge */}
                  <div className={`inline-flex items-center gap-2 px-2 sm:px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs sm:text-sm font-medium mb-3 sm:mb-4 ${index % 2 === 0 ? 'md:float-right md:ml-3' : ''}`}>
                    <span>{exp.type === 'education' ? '🎓' : '💼'}</span>
                    {exp.year}
                  </div>
                  <div className="clear-both"></div>

                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-1">{exp.title}</h3>
                  <p className="text-emerald-400 text-xs sm:text-sm mb-2 sm:mb-3">{exp.company}</p>
                  <p className="text-white/60 text-xs sm:text-sm mb-3 sm:mb-4">{exp.description}</p>

                  {/* Tech tags */}
                  <div className={`flex flex-wrap gap-1.5 sm:gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-1.5 sm:px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs rounded-md bg-white/5 text-white/50 border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Center dot */}
              <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-3 sm:w-4 h-3 sm:h-4">
                <div className="w-3 sm:w-4 h-3 sm:h-4 rounded-full bg-emerald-500 border-2 sm:border-4 border-black" />
                <div className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-20" />
              </div>

              {/* Empty space for opposite side */}
              <div className="hidden md:block w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
