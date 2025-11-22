"use client";

import { useState } from "react";
import ScrollReveal from "@/components/Common/ScrollReveal";
import ProjectCard from "@/components/Blog/ProjectCard";
import ProjectFilters from "@/components/Blog/ProjectFilters";
import projectsData from "@/components/Blog/projectsData";
import { Project } from "@/types/project";

const BlogContent = () => {
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projectsData);

  return (
    <section className="pt-[120px] pb-[120px]">
      <div className="container">
        <ScrollReveal direction="up" delay={0}>
          <div className="mb-12 max-w-3xl text-center lg:mx-auto">
            <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl">
              Projets Réalisés par CX Systems
            </h2>
            <p className="text-base leading-relaxed text-body-color">
              Découvrez nos réalisations concrètes. Chaque projet combine design d&apos;expérience,
              technologie et accompagnement terrain pour créer des solutions innovantes qui
              transforment l&apos;expérience client.
            </p>
          </div>
        </ScrollReveal>

        {/* Filtres */}
        <ProjectFilters projects={projectsData} onFilterChange={setFilteredProjects} />

        {/* Liste des projets */}
        {filteredProjects.length > 0 ? (
          <div className="-mx-4 flex flex-wrap items-stretch">
            {filteredProjects.map((project, index) => (
              <ScrollReveal
                key={project.id}
                direction="up"
                delay={index * 100}
                className="w-full px-4 md:w-1/2 xl:w-1/3 flex"
              >
                <ProjectCard project={project} />
              </ScrollReveal>
            ))}
          </div>
        ) : (
          <div className="py-16 text-center">
            <p className="text-lg text-body-color dark:text-body-color-dark">
              Aucun projet ne correspond à vos critères de recherche.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogContent;

