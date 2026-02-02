"use client";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface FloatingElementProps {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  yOffset?: number;
}

export const FloatingElement = ({
  children,
  className = '',
  duration = 3,
  yOffset = 10
}: FloatingElementProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    gsap.to(ref.current, {
      y: -yOffset,
      duration: duration,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut'
    });
  }, [duration, yOffset]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};
