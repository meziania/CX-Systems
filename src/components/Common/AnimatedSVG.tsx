"use client";

import { useEffect, useRef } from "react";

type AnimatedSVGProps = {
  paths: string[];
  viewBox?: string;
  className?: string;
  strokeColor?: string;
  strokeWidth?: number;
  duration?: number;
  delay?: number;
};

const AnimatedSVG = ({
  paths,
  viewBox = "0 0 400 200",
  className = "",
  strokeColor = "#4A6CF7",
  strokeWidth = 2,
  duration = 2,
  delay = 0,
}: AnimatedSVGProps) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const pathElements = svg.querySelectorAll("path");
    
    pathElements.forEach((path, index) => {
      const pathElement = path as SVGPathElement;
      const length = pathElement.getTotalLength();
      
      // Initialiser le path comme invisible
      pathElement.style.strokeDasharray = `${length}`;
      pathElement.style.strokeDashoffset = `${length}`;
      pathElement.style.transition = `stroke-dashoffset ${duration}s ease-in-out ${delay + index * 0.2}s`;
      
      // Déclencher l'animation
      setTimeout(() => {
        pathElement.style.strokeDashoffset = "0";
      }, 100);
    });
  }, [duration, delay]);

  return (
    <svg
      ref={svgRef}
      viewBox={viewBox}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {paths.map((path, index) => (
        <path
          key={index}
          d={path}
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ))}
    </svg>
  );
};

export default AnimatedSVG;

