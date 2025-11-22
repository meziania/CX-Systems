"use client";

import { useEffect, useRef } from "react";

type AnimatedSVGLineProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

const AnimatedSVGLine = ({ children, className = "", delay = 0 }: AnimatedSVGLineProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const paths = container.querySelectorAll<SVGPathElement>("path");
    const circles = container.querySelectorAll<SVGCircleElement>("circle[stroke]");

    const animateElement = (element: SVGPathElement | SVGCircleElement, index: number) => {
      const length = element.getTotalLength ? element.getTotalLength() : 
        (element as SVGCircleElement).r?.baseVal?.value ? 
        Math.PI * 2 * (element as SVGCircleElement).r.baseVal.value : 1000;
      
      element.style.strokeDasharray = `${length}`;
      element.style.strokeDashoffset = `${length}`;
      element.style.transition = `stroke-dashoffset 2s ease-in-out ${delay + index * 0.2}s`;
      
      setTimeout(() => {
        element.style.strokeDashoffset = "0";
      }, 100);
    };

    paths.forEach((path, index) => animateElement(path, index));
    circles.forEach((circle, index) => animateElement(circle, paths.length + index));
  }, [delay]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
};

export default AnimatedSVGLine;

