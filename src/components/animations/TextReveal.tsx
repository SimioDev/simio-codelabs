"use client";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface TextRevealProps {
  children: string;
  className?: string;
  delay?: number;
  stagger?: number;
}

export const TextReveal = ({
  children,
  className = '',
  delay = 0,
  stagger = 0.05
}: TextRevealProps) => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    // Split into words and wrap each in span
    const words = children.split(' ');
    const wordsHTML = words.map((word, i) =>
      `<span class="inline-block overflow-hidden"><span class="inline-block" style="transform: translateY(100%); opacity: 0;">${word}${i < words.length - 1 ? '&nbsp;' : ''}</span></span>`
    ).join('');

    textRef.current.innerHTML = wordsHTML;

    const wordElements = textRef.current.querySelectorAll('span > span');

    gsap.to(wordElements, {
      y: 0,
      opacity: 1,
      duration: 0.6,
      stagger: stagger,
      delay: delay,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: textRef.current,
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      }
    });
  }, [children, delay, stagger]);

  return <div ref={textRef} className={className} />;
};
