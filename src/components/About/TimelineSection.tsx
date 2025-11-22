import ScrollReveal from "../Common/ScrollReveal";
import SectionTitle from "../Common/SectionTitle";
import Timeline from "../Common/Timeline";

const TimelineSection = () => {
  const timelineData = [
    {
      year: "2025",
      title: "Développeur Full-Stack Freelance",
      description:
        "Spécialisation en développement d'applications web et desktop. Création de solutions sur mesure pour clients avec focus sur l'expérience utilisateur et les performances.",
      icon: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
          <path
            fillRule="evenodd"
            d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      year: "2024",
      title: "Projets de Fin d'Études",
      description:
        "Développement de systèmes de gestion complets : plateforme hôtelière avec intégration de paiements, application desktop pour gestion commerciale avec POS intégré.",
    },
    {
      year: "2023",
      title: "Formation en Développement",
      description:
        "Apprentissage approfondi des technologies modernes : React, Next.js, Django, Python, bases de données, et architecture logicielle.",
    },
    {
      year: "2020",
      title: "Début du Parcours",
      description:
        "Début de l'aventure dans le développement web et la programmation. Premiers projets et découverte de la passion pour créer des solutions digitales.",
    },
  ];

  return (
    <section className="bg-gray-light py-16 dark:bg-bg-color-dark md:py-20 lg:py-28">
      <div className="container">
        <ScrollReveal direction="up" delay={0}>
          <SectionTitle
            title="Mon Parcours"
            paragraph="Découvrez mon évolution professionnelle et les étapes clés qui ont façonné mon expertise en développement full-stack."
            center
          />
        </ScrollReveal>

        <div className="mt-12 md:mt-16">
          <Timeline items={timelineData} />
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;

