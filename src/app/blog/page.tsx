import Breadcrumb from "@/components/Common/Breadcrumb";
import ProjectCard from "@/components/Blog/ProjectCard";
import projectsData from "@/components/Blog/projectsData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projets | CX System - Nos Réalisations",
  description: "Découvrez nos projets réalisés pour nos clients. Chaque cas illustre notre approche centrée sur l'expérience client et l'impact mesurable.",
  // other metadata
};

const Blog = () => {
  return (
    <>
      <Breadcrumb
        pageName="Nos Projets"
        description="Parcourez une sélection de projets que nous avons déjà livrés pour nos clients. Chaque cas illustre notre approche centrée sur l'expérience client et l'impact mesurable."
      />

      <section className="pt-[120px] pb-[120px]">
        <div className="container">
          <div className="mb-12 max-w-3xl text-center lg:mx-auto">
            <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl">
              Projets Réalisés par CX Systems
            </h2>
            <p className="text-base leading-relaxed text-body-color">
              Découvrez nos réalisations concrètes. Chaque projet combine design d'expérience, 
              technologie et accompagnement terrain pour créer des solutions innovantes qui 
              transforment l'expérience client.
            </p>
          </div>

          <div className="-mx-4 flex flex-wrap items-stretch">
            {projectsData.map((project) => (
              <div
                key={project.id}
                className="w-full px-4 md:w-1/2 xl:w-1/3 flex"
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
