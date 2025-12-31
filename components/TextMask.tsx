'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface TextMaskProps {
  phrase: string;
  className?: string;
}

export default function TextMask({ phrase, className = '' }: TextMaskProps) {
  const container = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start 0.9', 'start 0.25'],
  });

  const words = phrase.split(' ');

  return (
    <p ref={container} className={`flex flex-wrap ${className}`}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </p>
  );
}

interface WordProps {
  children: string;
  progress: ReturnType<typeof useScroll>['scrollYProgress'];
  range: [number, number];
}

function Word({ children, progress, range }: WordProps) {
  const opacity = useTransform(progress, range, [0.2, 1]);
  const y = useTransform(progress, range, [10, 0]);

  return (
    <span className="relative mr-3 mt-3">
      <span className="absolute opacity-20">{children}</span>
      <motion.span style={{ opacity, y }} className="relative">
        {children}
      </motion.span>
    </span>
  );
}

