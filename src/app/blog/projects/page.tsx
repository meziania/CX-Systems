import Breadcrumb from "@/components/Common/Breadcrumb";
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

    </>
  );
};

export default ProjectsPage;



