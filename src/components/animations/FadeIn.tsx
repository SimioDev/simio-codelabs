import { useEffect, useRef } from 'react';
import { fadeInUp } from '@/utils/animations';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export function FadeIn({
  children,
  delay = 0,
  className = '',
  direction = 'up'
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      const animations: Record<string, any> = {
        up: { y: 60, opacity: 0 },
        down: { y: -60, opacity: 0 },
        left: { x: 60, opacity: 0 },
        right: { x: -60, opacity: 0 }
      };

      const from = animations[direction];
      const to = { x: 0, y: 0, opacity: 1, duration: 0.8, delay, ease: 'power3.out' };

      fadeInUp(ref.current, { delay });
    }
  }, [delay, direction]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
