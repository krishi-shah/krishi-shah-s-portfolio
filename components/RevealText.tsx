'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface RevealTextProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export default function RevealText({ 
  children, 
  className = '', 
  delay = 0,
  direction = 'up' 
}: RevealTextProps) {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const getInitialPosition = () => {
    switch (direction) {
      case 'up': return { y: 75, x: 0 };
      case 'down': return { y: -75, x: 0 };
      case 'left': return { y: 0, x: 75 };
      case 'right': return { y: 0, x: -75 };
      default: return { y: 75, x: 0 };
    }
  };

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ opacity: 0, ...getInitialPosition() }}
        animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
        transition={{
          duration: 0.8,
          delay,
          ease: [0.25, 0.4, 0.25, 1],
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

