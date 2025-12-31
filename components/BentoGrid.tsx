'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface BentoItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  gradient?: string;
}

const bentoItems: BentoItem[] = [
  {
    title: "Machine Learning",
    description: "Building predictive models and intelligent systems that transform data into decisions",
    icon: (
      <svg className="w-6 sm:w-8 h-6 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    className: "md:col-span-2 md:row-span-2",
    gradient: "from-emerald-500/20 to-cyan-500/20",
  },
  {
    title: "Data Analytics",
    description: "Turning raw data into actionable insights",
    icon: (
      <svg className="w-6 sm:w-8 h-6 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    className: "md:col-span-1",
    gradient: "from-violet-500/20 to-purple-500/20",
  },
  {
    title: "Full-Stack Dev",
    description: "End-to-end web solutions",
    icon: (
      <svg className="w-6 sm:w-8 h-6 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    className: "md:col-span-1",
    gradient: "from-orange-500/20 to-red-500/20",
  },
  {
    title: "Cloud & DevOps",
    description: "Scalable infrastructure and deployment pipelines",
    icon: (
      <svg className="w-6 sm:w-8 h-6 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    className: "md:col-span-1",
    gradient: "from-blue-500/20 to-indigo-500/20",
  },
  {
    title: "AI Solutions",
    description: "NLP, Computer Vision, and Generative AI applications",
    icon: (
      <svg className="w-6 sm:w-8 h-6 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    className: "md:col-span-1",
    gradient: "from-pink-500/20 to-rose-500/20",
  },
];

export default function BentoGrid() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className="py-16 sm:py-20 md:py-24 relative bg-black">
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
            What I Do
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Expertise</span>
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
          {bentoItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 ${item.className}`}
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Shine Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              </div>

              <div className="relative z-10">
                <div className="w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14 rounded-xl sm:rounded-2xl bg-white/10 flex items-center justify-center text-emerald-400 mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/60 text-xs sm:text-sm md:text-base">{item.description}</p>
              </div>

              {/* Corner Decoration */}
              <div className="absolute bottom-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-tl from-emerald-500/10 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
