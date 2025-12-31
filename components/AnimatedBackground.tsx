'use client';

import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function AnimatedBackground() {
  const [mounted, setMounted] = useState(false);
  const { scrollYProgress } = useScroll();
  
  // All transforms at top level - unconditionally
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 0.9]);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Always render the same structure
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Transparent Background - particles show through */}
      <div className="absolute inset-0 bg-transparent" />
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(16, 185, 129, 0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(16, 185, 129, 0.4) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {mounted && (
        <>
          {/* Orb 1 - Top Left */}
          <motion.div
            className="absolute -top-20 -left-20 w-[400px] h-[400px] rounded-full opacity-30"
            style={{
              background: 'radial-gradient(circle, rgba(16, 185, 129, 0.3) 0%, transparent 70%)',
              y: y1,
              scale,
            }}
          />

          {/* Orb 2 - Top Right */}
          <motion.div
            className="absolute top-1/4 -right-32 w-[350px] h-[350px] rounded-full opacity-20"
            style={{
              background: 'radial-gradient(circle, rgba(6, 182, 212, 0.3) 0%, transparent 70%)',
              y: y2,
            }}
          />

          {/* Orb 3 - Bottom */}
          <motion.div
            className="absolute bottom-0 left-1/3 w-[300px] h-[300px] rounded-full opacity-20"
            style={{
              background: 'radial-gradient(circle, rgba(139, 92, 246, 0.25) 0%, transparent 70%)',
              y: y3,
            }}
          />

          {/* Rotating Shape */}
          <motion.div
            className="absolute top-[30%] right-[20%] w-20 h-20 border border-emerald-500/20"
            style={{
              rotate,
              borderRadius: '10px',
            }}
          />

          {/* Floating Particles */}
          <motion.div
            className="absolute top-[20%] left-[15%] w-2 h-2 rounded-full bg-emerald-500/50"
            animate={{ y: [-10, 10, -10], opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute top-[50%] right-[25%] w-3 h-3 rounded-full bg-cyan-500/40"
            animate={{ y: [10, -10, 10], opacity: [0.2, 0.6, 0.2] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          />
          <motion.div
            className="absolute top-[70%] left-[30%] w-2 h-2 rounded-full bg-violet-500/40"
            animate={{ y: [-15, 15, -15], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          />
          <motion.div
            className="absolute top-[40%] left-[60%] w-1.5 h-1.5 rounded-full bg-teal-400/50"
            animate={{ y: [5, -15, 5], opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          />

          {/* Animated Lines */}
          <motion.div
            className="absolute top-0 left-[25%] w-px h-40 bg-gradient-to-b from-transparent via-emerald-500/30 to-transparent"
            style={{ y: y1 }}
          />
          <motion.div
            className="absolute top-0 right-[30%] w-px h-32 bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent"
            style={{ y: y2 }}
          />
        </>
      )}

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] opacity-40" />
    </div>
  );
}
