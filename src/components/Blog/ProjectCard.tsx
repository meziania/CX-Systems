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

  // Déterminer le badge de statut basé sur le client
  const getStatusBadge = () => {
    if (project.client === "Projet interne" || project.client === "Projet de fin d'études") {
      return { text: "Projet personnel", color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200" };
    }
    return { text: "En production", color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" };
  };

  const statusBadge = getStatusBadge();

  return (
    <div className="group mb-10 overflow-hidden rounded-lg bg-white shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 dark:bg-[#1D2144] dark:hover:shadow-primary/20">
      <div className="relative h-[220px] w-full overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
        <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${statusBadge.color}`}>
            {statusBadge.text}
          </span>
        </div>
      </div>

      <div className="p-8">
        <div className="mb-3 flex flex-wrap items-center gap-3 text-sm font-medium text-primary">
          <span>{project.category}</span>
          <span className="text-body-color">• {project.year}</span>
          <span className={`ml-auto rounded-full px-2 py-1 text-xs font-semibold ${statusBadge.color}`}>
            {statusBadge.text}
          </span>
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

        <div className="mb-4 flex flex-wrap items-center justify-between gap-4 text-sm">
          <p className="font-semibold text-dark dark:text-white">
            Client : <span className="font-normal text-body-color">{project.client}</span>
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="cursor-pointer rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary transition-all duration-200 hover:bg-primary hover:text-white"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Bouton Demo */}
        {project.demoUrl && (
          <div className="flex flex-wrap gap-3">
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-primary to-purple-600 px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Voir la Démo
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;



