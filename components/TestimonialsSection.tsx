'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Product Manager at TechCorp",
    content: "Krishi's ability to translate complex data problems into actionable insights is remarkable. His ML models improved our prediction accuracy by 40%.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Roberts",
    role: "CTO at DataFlow",
    content: "Working with Krishi was a game-changer for our analytics pipeline. He delivered a solution that exceeded our expectations in both performance and scalability.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Zhang",
    role: "Director of Engineering",
    content: "Exceptional technical skills combined with great communication. Krishi understood our requirements perfectly and delivered ahead of schedule.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 relative bg-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[400px] md:w-[600px] h-[300px] sm:h-[400px] md:h-[600px] rounded-full bg-emerald-500/5 blur-3xl" />
      
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="text-emerald-400 text-sm font-medium tracking-wider uppercase mb-4 block">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            What People <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Say</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl lg:max-w-4xl mx-auto">
          <div className="relative">
            {/* Quote Icon */}
            <div className="absolute -top-4 sm:-top-8 left-0 text-emerald-500/20">
              <svg className="w-12 sm:w-16 md:w-24 h-12 sm:h-16 md:h-24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="liquid-glass-card p-5 sm:p-8 md:p-12"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4 sm:mb-6">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <svg key={i} className="w-4 sm:w-5 h-4 sm:h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Content */}
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 leading-relaxed mb-6 sm:mb-8">
                  "{testimonials[activeIndex].content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14 rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center text-white font-bold text-base sm:text-lg md:text-xl">
                    {testimonials[activeIndex].name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm sm:text-base">{testimonials[activeIndex].name}</div>
                    <div className="text-white/50 text-xs sm:text-sm">{testimonials[activeIndex].role}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
              <button
                onClick={prevTestimonial}
                className="p-2 sm:p-3 rounded-full bg-white/5 border border-white/10 hover:bg-emerald-500/20 hover:border-emerald-500/30 transition-all duration-300"
                aria-label="Previous testimonial"
              >
                <svg className="w-4 sm:w-5 h-4 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Dots */}
              <div className="flex gap-1.5 sm:gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                      index === activeIndex
                        ? 'w-6 sm:w-8 bg-emerald-500'
                        : 'w-1.5 sm:w-2 bg-white/30 hover:bg-white/50'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="p-2 sm:p-3 rounded-full bg-white/5 border border-white/10 hover:bg-emerald-500/20 hover:border-emerald-500/30 transition-all duration-300"
                aria-label="Next testimonial"
              >
                <svg className="w-4 sm:w-5 h-4 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
