'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface Card {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const cards: Card[] = [
  {
    id: 1,
    title: 'Discovery',
    description: 'Understanding the problem space, analyzing requirements, and defining project scope.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    color: 'from-emerald-500/20 to-cyan-500/20',
  },
  {
    id: 2,
    title: 'Design',
    description: 'Creating data architectures, ML pipelines, and system designs that scale.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
    color: 'from-violet-500/20 to-purple-500/20',
  },
  {
    id: 3,
    title: 'Develop',
    description: 'Building robust solutions with clean code, thorough testing, and best practices.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    color: 'from-orange-500/20 to-red-500/20',
  },
  {
    id: 4,
    title: 'Deploy',
    description: 'Shipping to production with CI/CD pipelines, monitoring, and continuous optimization.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    color: 'from-blue-500/20 to-indigo-500/20',
  },
];

interface StackCardProps {
  card: Card;
  index: number;
  scrollYProgress: MotionValue<number>;
  totalCards: number;
}

function StackCard({ card, index, scrollYProgress, totalCards }: StackCardProps) {
  const start = index / totalCards;
  const end = (index + 1) / totalCards;
  
  const scale = useTransform(scrollYProgress, [start, end], [1, 0.9]);
  const opacity = useTransform(scrollYProgress, [start, end - 0.1, end], [1, 1, index === totalCards - 1 ? 1 : 0]);
  const y = useTransform(scrollYProgress, [start, end], [0, -50]);

  return (
    <motion.div
      style={{
        scale,
        opacity,
        y,
        zIndex: totalCards - index,
      }}
      className="absolute inset-0 liquid-glass-card p-6 sm:p-8 md:p-12"
    >
      {/* Background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${card.color} rounded-2xl`} />
      
      <div className="relative z-10">
        {/* Step number */}
        <div className="absolute -top-2 -right-2 w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold text-sm sm:text-lg">
          {String(card.id).padStart(2, '0')}
        </div>

        {/* Icon */}
        <div className="w-12 sm:w-16 h-12 sm:h-16 rounded-xl sm:rounded-2xl bg-white/10 flex items-center justify-center text-emerald-400 mb-4 sm:mb-6">
          {card.icon}
        </div>

        {/* Content */}
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 sm:mb-4">{card.title}</h3>
        <p className="text-white/60 text-sm sm:text-base md:text-lg">{card.description}</p>
      </div>
    </motion.div>
  );
}

export default function StackingCards() {
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-[300vh] bg-black">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-10 sm:mb-16">
            <span className="text-emerald-400 text-sm font-medium tracking-wider uppercase mb-4 block">
              My Process
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              How I <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Work</span>
            </h2>
          </div>

          {/* Stacking Cards */}
          <div className="relative h-[350px] sm:h-[400px] max-w-2xl mx-auto">
            {mounted && cards.map((card, index) => (
              <StackCard
                key={card.id}
                card={card}
                index={index}
                scrollYProgress={scrollYProgress}
                totalCards={cards.length}
              />
            ))}
            {/* Placeholder for SSR */}
            {!mounted && (
              <div className="absolute inset-0 liquid-glass-card p-6 sm:p-8 md:p-12">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-2xl" />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
