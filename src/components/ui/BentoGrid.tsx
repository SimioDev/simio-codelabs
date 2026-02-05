"use client";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface BentoItemProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  span?: 'single' | 'double' | 'tall';
}

export const BentoItem = ({ children, className = '', delay = 0, span = 'single' }: BentoItemProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        {
          opacity: 0,
          scale: 0.96,
          y: 20
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.2,
          delay,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 90%',
            toggleActions: 'play none none none',
            once: true
          }
        }
      );
    });

    return () => ctx.revert();
  }, [delay]);

  const spanClasses = {
    single: 'col-span-1',
    double: 'col-span-1 md:col-span-2',
    tall: 'row-span-1 md:row-span-2'
  };

  return (
    <div
      ref={ref}
      className={`bento-item rounded-2xl md:rounded-3xl border border-border bg-card p-5 md:p-6 ${spanClasses[span]} ${className}`}
    >
      {children}
    </div>
  );
};

interface BentoGridProps {
  children: React.ReactNode;
  className?: string;
}

export const BentoGrid = ({ children, className = '' }: BentoGridProps) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-fr ${className}`}>
      {children}
    </div>
  );
};
