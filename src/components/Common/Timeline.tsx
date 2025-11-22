"use client";

import ScrollReveal from "./ScrollReveal";

type TimelineItem = {
  year: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
};

type TimelineProps = {
  items: TimelineItem[];
  className?: string;
};

const Timeline = ({ items, className = "" }: TimelineProps) => {
  return (
    <div className={`relative ${className}`}>
      {/* Ligne verticale */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent hidden md:block"></div>

      <div className="space-y-12">
        {items.map((item, index) => (
          <ScrollReveal key={index} direction="right" delay={index * 150}>
            <div className="relative flex items-start gap-6">
              {/* Point sur la timeline */}
              <div className="relative z-10 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 hover:scale-110 hover:bg-primary hover:text-white dark:bg-primary/20">
                {item.icon || (
                  <div className="h-3 w-3 rounded-full bg-primary"></div>
                )}
              </div>

              {/* Contenu */}
              <div className="flex-1 pb-12">
                <div className="mb-2 text-sm font-semibold text-primary">
                  {item.year}
                </div>
                <h3 className="mb-2 text-xl font-bold text-dark dark:text-white">
                  {item.title}
                </h3>
                <p className="text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  {item.description}
                </p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
};

export default Timeline;

