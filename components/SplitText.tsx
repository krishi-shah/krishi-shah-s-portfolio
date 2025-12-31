'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  type?: 'chars' | 'words';
}

export default function SplitText({ 
  text, 
  className = '', 
  delay = 0,
  type = 'chars' 
}: SplitTextProps) {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const items = type === 'chars' ? text.split('') : text.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: delay * i },
    }),
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 50,
      rotateX: -90,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 200,
      },
    },
  };

  return (
    <motion.span
      ref={ref}
      className={`inline-flex flex-wrap ${className}`}
      variants={container}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      style={{ perspective: 500 }}
    >
      {items.map((item, index) => (
        <motion.span
          key={index}
          variants={child}
          className="inline-block"
          style={{ transformOrigin: 'bottom' }}
        >
          {item === ' ' ? '\u00A0' : item}
          {type === 'words' && index < items.length - 1 && '\u00A0'}
        </motion.span>
      ))}
    </motion.span>
  );
}

