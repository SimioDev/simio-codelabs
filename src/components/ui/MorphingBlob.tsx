"use client";
import { useEffect, useRef } from 'react';

interface MorphingBlobProps {
  className?: string;
  color?: string;
  size?: number;
}

export const MorphingBlob = ({
  className = '',
  color = '#818CF8',
  size = 400
}: MorphingBlobProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = size;
    canvas.height = size;

    let time = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = size * 0.3;

      // Create organic blob shape using bezier curves
      ctx.beginPath();

      for (let i = 0; i <= 360; i += 60) {
        const angle = (i * Math.PI) / 180;
        const nextAngle = ((i + 60) * Math.PI) / 180;

        // Add organic variation with sine waves
        const r1 = radius + Math.sin(time + i * 0.05) * 30;
        const r2 = radius + Math.sin(time + (i + 60) * 0.05) * 30;

        const x1 = centerX + Math.cos(angle) * r1;
        const y1 = centerY + Math.sin(angle) * r1;
        const x2 = centerX + Math.cos(nextAngle) * r2;
        const y2 = centerY + Math.sin(nextAngle) * r2;

        // Control points for smooth curves
        const cpAngle = ((i + 30) * Math.PI) / 180;
        const cpRadius = radius + Math.sin(time + (i + 30) * 0.05) * 35;
        const cpX = centerX + Math.cos(cpAngle) * cpRadius;
        const cpY = centerY + Math.sin(cpAngle) * cpRadius;

        if (i === 0) {
          ctx.moveTo(x1, y1);
        }

        ctx.quadraticCurveTo(cpX, cpY, x2, y2);
      }

      ctx.closePath();

      // Gradient fill
      const gradient = ctx.createRadialGradient(
        centerX,
        centerY,
        0,
        centerX,
        centerY,
        radius * 1.5
      );

      gradient.addColorStop(0, color + '40');
      gradient.addColorStop(1, color + '00');

      ctx.fillStyle = gradient;
      ctx.fill();

      time += 0.01;
      requestAnimationFrame(animate);
    };

    animate();
  }, [color, size]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute ${className}`}
      style={{ filter: 'blur(40px)' }}
    />
  );
};
