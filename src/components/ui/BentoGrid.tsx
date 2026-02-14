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
  const spanClasses = {
    single: 'col-span-1',
    double: 'col-span-1 md:col-span-2',
    tall: 'row-span-1 md:row-span-2'
  };

  return (
    <div
      className={`bento-item rounded-2xl md:rounded-3xl border border-border bg-card p-5 md:p-6 ${spanClasses[span]} ${className}`}
      style={{
        animationDelay: `${delay * 150}ms`,
      }}
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
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const items = ref.current.querySelectorAll('.bento-item');

    const ctx = gsap.context(() => {
      gsap.set(items, { opacity: 0, y: 40 });

      ScrollTrigger.create({
        trigger: ref.current,
        start: 'top 80%',
        once: true,
        onEnter: () => {
          gsap.to(items, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'expo.out',
          });
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref} className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-fr ${className}`}>
      {children}
    </div>
  );
};
