"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export const BackgroundBeams = () => {
  const beamsRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={beamsRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
    >
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-transparent" />

      {/* Animated beams */}
      <svg className="absolute inset-0 h-full w-full">
        <defs>
          <linearGradient id="beam-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[...Array(6)].map((_, i) => (
          <motion.rect
            key={i}
            x={`${(i * 16.66)}%`}
            y="0"
            width="2"
            height="100%"
            fill="url(#beam-gradient)"
            initial={{ opacity: 0, y: "-100%" }}
            animate={{
              opacity: [0, 0.5, 0],
              y: ["0%", "200%"],
            }}
            transition={{
              duration: 2,
              delay: i * 0.3,
              repeat: Infinity,
              repeatDelay: 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>
    </div>
  );
};
