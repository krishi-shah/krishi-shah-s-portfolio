'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface MarqueeTextProps {
  text: string;
  direction?: 'left' | 'right';
  speed?: number;
  className?: string;
}

export default function MarqueeText({ 
  text, 
  direction = 'left', 
  speed = 20,
  className = '' 
}: MarqueeTextProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const marqueeVariants = {
    animate: {
      x: direction === 'left' ? [0, -1000] : [-1000, 0],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop" as const,
          duration: speed,
          ease: "linear",
        },
      },
    },
  };

  if (!mounted) {
    return (
      <div className={`overflow-hidden whitespace-nowrap ${className}`}>
        <div className="inline-flex">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="mx-8 text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter opacity-50">
              {text}
              <span className="text-emerald-500 mx-4">•</span>
            </span>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <motion.div
        className="inline-flex"
        variants={marqueeVariants}
        animate="animate"
      >
        {[...Array(4)].map((_, i) => (
          <span key={i} className="mx-8 text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter">
            {text}
            <span className="text-emerald-500 mx-4">•</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
