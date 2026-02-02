"use client";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export const ScrollReveal = ({
  children,
  className = '',
  delay = 0,
  direction = 'up'
}: ScrollRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const directions = {
      up: { y: 100, x: 0 },
      down: { y: -100, x: 0 },
      left: { y: 0, x: 100 },
      right: { y: 0, x: -100 }
    };

    const { x, y } = directions[direction];

    gsap.fromTo(
      ref.current,
      {
        opacity: 0,
        y,
        x
      },
      {
        opacity: 1,
        y: 0,
        x: 0,
        duration: 1,
        delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 85%',
          end: 'top 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }, [delay, direction]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};
