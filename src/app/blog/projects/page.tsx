import Breadcrumb from "@/components/Common/Breadcrumb";
import ProjectCard from "@/components/Blog/ProjectCard";
import projectsData from "@/components/Blog/projectsData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projets CX réalisés | CX System",
  description:
    "Découvrez des exemples concrets de transformations CX menées par CX System : déploiements omnicanaux, copilotes IA et tableaux de bord voc.",
};

const ProjectsPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Projets réalisés"
        description="Parcourez une sélection de projets que nous avons déjà livrés pour nos clients. Chaque cas illustre notre approche centrée sur l'expérience client et l'impact mesurable."
      />

      <section className="pt-[120px] pb-[120px]">
        <div className="container">
          <div className="mb-12 max-w-3xl text-center lg:mx-auto">
            <p className="text-base leading-relaxed text-body-color">
              Chaque projet ci-dessous combine design d'expérience, technologie et
              accompagnement terrain. Inspirez-vous de ces réalisations pour imaginer
              la prochaine étape de votre feuille de route CX.
            </p>
          </div>

          <div className="-mx-4 flex flex-wrap">
            {projectsData.map((project) => (
              <div key={project.id} className="w-full px-4 md:w-1/2 xl:w-1/3">
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectsPage;


