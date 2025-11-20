"use client";

import Image from "next/image";
import { useState } from "react";
import { Project } from "@/types/project";

type ProjectCardProps = {
  project: Project;
};

const MAX_DESCRIPTION_LENGTH = 150;

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const description = project.description;
  const isLongDescription = description.length > MAX_DESCRIPTION_LENGTH;
  const truncatedDescription = isLongDescription
    ? description.substring(0, MAX_DESCRIPTION_LENGTH) + "..."
    : description;
  const displayDescription = isExpanded ? description : truncatedDescription;

  return (
    <div className="mb-10 overflow-hidden rounded-lg bg-white shadow-xl dark:bg-[#1D2144]">
      <div className="relative h-[220px] w-full overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      <div className="p-8">
        <div className="mb-3 flex flex-wrap gap-3 text-sm font-medium text-primary">
          <span>{project.category}</span>
          <span className="text-body-color">• {project.year}</span>
        </div>

        <h3 className="mb-3 text-2xl font-semibold text-dark dark:text-white">
          {project.title}
        </h3>

        <div className="mb-6">
          <p className="text-base leading-relaxed text-body-color">
            {displayDescription}
          </p>
          {isLongDescription && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-2 text-sm font-medium text-primary hover:underline"
            >
              {isExpanded ? "Afficher moins" : "Afficher plus"}
            </button>
          )}
        </div>

        <div className="flex flex-wrap items-center justify-between text-sm">
          <p className="font-semibold text-dark dark:text-white">
            Client : <span className="font-normal text-body-color">{project.client}</span>
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-primary/10 px-3 py-1 text-primary"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;



