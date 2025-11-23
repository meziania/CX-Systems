"use client";

import { useEffect, useRef, useState } from "react";

type ScrollRevealProps = {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right" | "scale";
  className?: string;
};

const ScrollReveal = ({
  children,
  delay = 0,
  direction = "up",
  className = "",
}: ScrollRevealProps) => {
  const [isRevealed, setIsRevealed] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsRevealed(true);
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [delay]);

  const getRevealClass = () => {
    switch (direction) {
      case "left":
        return "scroll-reveal-left";
      case "right":
        return "scroll-reveal-right";
      case "scale":
        return "scroll-reveal-scale";
      default:
        return "scroll-reveal";
    }
  };

  return (
    <div
      ref={ref}
      className={`${getRevealClass()} ${isRevealed ? "revealed" : ""} ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;

