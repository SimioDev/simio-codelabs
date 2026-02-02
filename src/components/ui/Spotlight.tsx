"use client";
import { useEffect, useRef } from 'react';

export const Spotlight = () => {
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!spotlightRef.current) return;

      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      const x = (clientX / innerWidth) * 100;
      const y = (clientY / innerHeight) * 100;

      spotlightRef.current.style.background = `
        radial-gradient(
          600px circle at ${x}% ${y}%,
          rgba(129, 140, 248, 0.15),
          transparent 40%
        )
      `;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={spotlightRef}
      className="pointer-events-none fixed inset-0 z-30 transition-all duration-300 dark:opacity-100 opacity-0"
    />
  );
};
