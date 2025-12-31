'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { type Project } from '@/lib/content';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  project: Project;
  index: number;
  onOpen: (project: Project) => void;
}

export default function ProjectCard({ project, index, onOpen }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={() => onOpen(project)}
      className="group relative cursor-pointer"
    >
      <div
        className={cn(
          'relative overflow-hidden rounded-2xl',
          'transition-all duration-500',
          'hover:border-emerald-500/30'
        )}
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid rgba(255,255,255,0.1)',
          boxShadow: isHovered 
            ? '0 8px 40px rgba(16, 185, 129, 0.15), 0 2px 8px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1)'
            : '0 4px 24px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.08)',
        }}
      >
        {/* Image Container */}
        <div className="relative aspect-[16/10] overflow-hidden bg-muted">
          {!imageError ? (
            <Image
              src={project.coverImage}
              alt={project.title}
              fill
              className={cn(
                'object-cover transition-transform duration-700',
                isHovered && 'scale-110'
              )}
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5">
              <span className="text-4xl font-bold text-primary/30">
                {project.title.charAt(0)}
              </span>
            </div>
          )}

          {/* Overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent"
            initial={{ opacity: 0.4 }}
            animate={{ opacity: isHovered ? 0.8 : 0.4 }}
            transition={{ duration: 0.3 }}
          />

          {/* Featured Badge */}
          {project.featured && (
            <div className="absolute top-4 left-4">
              <span className="inline-flex items-center gap-1 px-3 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                Featured
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-3">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="tag"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 3 && (
              <span className="tag">+{project.tags.length - 3}</span>
            )}
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
            {project.shortDescription}
          </p>

          {/* Metrics Preview */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="flex items-center gap-4 pt-4 border-t border-border">
              {project.metrics.slice(0, 2).map((metric) => (
                <div key={metric.label} className="text-center">
                  <div className="text-lg font-bold text-primary">{metric.value}</div>
                  <div className="text-xs text-muted-foreground">{metric.label}</div>
                </div>
              ))}
            </div>
          )}

          {/* View Project CTA */}
          <motion.div
            className="mt-4 flex items-center gap-2 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity"
            initial={{ x: -10 }}
            animate={{ x: isHovered ? 0 : -10 }}
          >
            <span>View Project</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.div>
        </div>
      </div>
    </motion.article>
  );
}

