"use client";

import { useEffect, useRef } from "react";

type AnimatedPathProps = {
  d: string;
  className?: string;
  strokeColor?: string;
  strokeWidth?: number;
  duration?: number;
  delay?: number;
  fill?: string;
  strokeLinecap?: "butt" | "round" | "square";
  strokeLinejoin?: "miter" | "round" | "bevel";
};

const AnimatedPath = ({
  d,
  className = "",
  strokeColor = "#4A6CF7",
  strokeWidth = 2,
  duration = 2,
  delay = 0,
  fill = "none",
  strokeLinecap = "round",
  strokeLinejoin = "round",
}: AnimatedPathProps) => {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;

    const length = path.getTotalLength();
    
    // Initialiser le path comme invisible
    path.style.strokeDasharray = `${length}`;
    path.style.strokeDashoffset = `${length}`;
    path.style.transition = `stroke-dashoffset ${duration}s ease-in-out ${delay}s`;
    
    // Déclencher l'animation
    setTimeout(() => {
      path.style.strokeDashoffset = "0";
    }, 100);
  }, [duration, delay]);

  return (
    <path
      ref={pathRef}
      d={d}
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      fill={fill}
      strokeLinecap={strokeLinecap}
      strokeLinejoin={strokeLinejoin}
      className={className}
    />
  );
};

export default AnimatedPath;

