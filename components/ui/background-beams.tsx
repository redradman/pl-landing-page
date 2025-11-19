"use client";
import { cn } from "@/lib/utils";
import React, { useRef } from "react";

export const BackgroundBeams = ({ className }: { className?: string }) => {
  const beams = [
    {
      initialX: 10,
      translateX: 10,
      duration: 7,
      repeatDelay: 3,
      delay: 2,
    },
    {
      initialX: 600,
      translateX: 600,
      duration: 3,
      repeatDelay: 3,
      delay: 4,
    },
    {
      initialX: 100,
      translateX: 100,
      duration: 7,
      repeatDelay: 7,
      className: "h-6",
    },
    {
      initialX: 400,
      translateX: 400,
      duration: 5,
      repeatDelay: 14,
      className: "h-20",
    },
    {
      initialX: 800,
      translateX: 800,
      duration: 11,
      repeatDelay: 2,
      className: "h-12",
    },
    {
      initialX: 1000,
      translateX: 1000,
      duration: 4,
      repeatDelay: 2,
      className: "h-6",
    },
    {
      initialX: 500,
      translateX: 500,
      duration: 6,
      repeatDelay: 4,
      delay: 3,
      className: "h-8",
    },
  ];

  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      <svg
        className="absolute w-full h-full pointer-events-none"
        width="100%"
        height="100%"
        viewBox="0 0 1440 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {beams.map((beam, idx) => (
          <path
            key={`beam-${idx}`}
            d={`M${beam.initialX} 0 Q${beam.initialX + 100} 400, ${beam.initialX} 800`}
            stroke="url(#gradient)"
            strokeWidth="2"
            className={cn("animate-beam", beam.className)}
            style={{
              animationDuration: `${beam.duration}s`,
              animationDelay: `${beam.delay || 0}s`,
            }}
          />
        ))}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#00ABC8" stopOpacity="0" />
            <stop offset="50%" stopColor="#00ABC8" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#00ABC8" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <style jsx>{`
        @keyframes beam {
          0%, 100% {
            opacity: 0;
            transform: translateY(-100%);
          }
          50% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-beam {
          animation: beam linear infinite;
        }
      `}</style>
    </div>
  );
};
