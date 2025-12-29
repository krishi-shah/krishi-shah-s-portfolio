'use client';

import { useEffect, useState, useCallback } from 'react';

interface UseScrollSpyOptions {
  sectionIds: string[];
  offset?: number;
  throttleMs?: number;
}

export function useScrollSpy({ 
  sectionIds, 
  offset = 100,
  throttleMs = 100 
}: UseScrollSpyOptions) {
  const [activeId, setActiveId] = useState<string>('');
  const [isAtTop, setIsAtTop] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    
    // Check if scrolled past threshold
    setIsAtTop(scrollY < 10);
    setIsScrolled(scrollY > 50);
    
    // Find active section
    let currentSection = '';
    
    for (const id of sectionIds) {
      const element = document.getElementById(id);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= offset) {
          currentSection = id;
        }
      }
    }
    
    setActiveId(currentSection);
  }, [sectionIds, offset]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    // Throttle scroll handler
    let ticking = false;
    
    const throttledHandler = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };
    
    // Initial check
    handleScroll();
    
    window.addEventListener('scroll', throttledHandler, { passive: true });
    return () => window.removeEventListener('scroll', throttledHandler);
  }, [handleScroll, throttleMs]);

  return { activeId, isAtTop, isScrolled };
}

