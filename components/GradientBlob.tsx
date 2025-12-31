'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface GradientBlobProps {
  className?: string;
  colors?: string[];
}

export default function GradientBlob({ 
  className = '',
  colors = ['#10b981', '#06b6d4', '#8b5cf6']
}: GradientBlobProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render on server to avoid hydration mismatch
  if (!mounted) return null;

  return (
    <div className={`absolute pointer-events-none ${className}`}>
      {/* Primary blob */}
      <motion.div
        className="absolute w-96 h-96 rounded-full opacity-30 blur-3xl"
        style={{
          background: `linear-gradient(135deg, ${colors[0]} 0%, ${colors[1]} 100%)`,
        }}
        animate={{
          x: [0, 50, 0, -50, 0],
          y: [0, -30, 50, -30, 0],
          scale: [1, 1.1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Secondary blob */}
      <motion.div
        className="absolute w-72 h-72 rounded-full opacity-20 blur-3xl"
        style={{
          background: `linear-gradient(135deg, ${colors[1]} 0%, ${colors[2]} 100%)`,
          top: '20%',
          left: '30%',
        }}
        animate={{
          x: [0, -40, 0, 40, 0],
          y: [0, 40, -20, 40, 0],
          scale: [1, 0.9, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      />

      {/* Tertiary blob */}
      <motion.div
        className="absolute w-64 h-64 rounded-full opacity-25 blur-3xl"
        style={{
          background: `linear-gradient(135deg, ${colors[2]} 0%, ${colors[0]} 100%)`,
          top: '40%',
          left: '60%',
        }}
        animate={{
          x: [0, 30, -30, 30, 0],
          y: [0, -40, 30, -40, 0],
          scale: [1, 1.2, 0.8, 1.2, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 4,
        }}
      />
    </div>
  );
}
