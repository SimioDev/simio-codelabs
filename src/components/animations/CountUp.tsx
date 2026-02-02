"use client";
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface CountUpProps {
  end: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

export const CountUp = ({
  end,
  suffix = '',
  duration = 2,
  className = ''
}: CountUpProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!ref.current || hasAnimated) return;

    const element = ref.current;
    const obj = { val: 0 };

    ScrollTrigger.create({
      trigger: element,
      start: 'top 85%',
      onEnter: () => {
        gsap.to(obj, {
          val: end,
          duration,
          ease: 'power2.out',
          onUpdate: () => {
            element.textContent = Math.round(obj.val) + suffix;
          },
          onComplete: () => {
            setHasAnimated(true);
          }
        });
      }
    });
  }, [end, suffix, duration, hasAnimated]);

  return <span ref={ref} className={className}>0{suffix}</span>;
};
