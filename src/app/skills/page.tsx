import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Compétences | Customer Experience Systems",
  description: "Découvrez mes compétences techniques et mon expertise en développement full-stack, architecture logicielle et solutions CX.",
};

const SkillsPage = () => {
  const skills = [
    {
      category: "Frontend",
      technologies: [
        { name: "React", level: "Expert" },
        { name: "Next.js", level: "Expert" },
        { name: "TypeScript", level: "Avancé" },
        { name: "Tailwind CSS", level: "Expert" },
        { name: "HTML/CSS", level: "Expert" },
      ],
    },
    {
      category: "Backend",
      technologies: [
        { name: "Node.js", level: "Avancé" },
        { name: "NestJS", level: "Avancé" },
        { name: "Django", level: "Avancé" },
        { name: "Python", level: "Expert" },
        { name: "REST APIs", level: "Expert" },
      ],
    },
    {
      category: "Base de données",
      technologies: [
        { name: "PostgreSQL", level: "Avancé" },
        { name: "SQLite", level: "Expert" },
        { name: "Prisma", level: "Avancé" },
        { name: "SQLAlchemy", level: "Avancé" },
      ],
    },
    {
      category: "DevOps & Outils",
      technologies: [
        { name: "Docker", level: "Avancé" },
        { name: "Git", level: "Expert" },
        { name: "CI/CD", level: "Intermédiaire" },
        { name: "Vercel", level: "Expert" },
      ],
    },
    {
      category: "Desktop",
      technologies: [
        { name: "PyQt5", level: "Expert" },
        { name: "Python", level: "Expert" },
      ],
    },
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Expert":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "Avancé":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      case "Intermédiaire":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300";
    }
  };

  return (
    <>
      <Breadcrumb
        pageName="Compétences"
        description="Découvrez mon expertise technique et les technologies que je maîtrise pour créer des solutions digitales performantes."
      />

      <section className="pt-[120px] pb-[120px]">
        <div className="container">
          <div className="mb-12 max-w-3xl text-center lg:mx-auto">
            <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl">
              Mes Compétences Techniques
            </h2>
            <p className="text-base leading-relaxed text-body-color">
              Une expertise diversifiée couvrant le développement full-stack, de la conception
              à la mise en production, avec une attention particulière à l&apos;expérience utilisateur.
            </p>
          </div>

          <div className="-mx-4 flex flex-wrap">
            {skills.map((skillCategory, index) => (
              <div key={index} className="w-full px-4 md:w-1/2 lg:w-1/3 mb-8">
                <div className="h-full rounded-lg bg-white p-8 shadow-xl dark:bg-[#1D2144]">
                  <h3 className="mb-6 text-2xl font-semibold text-dark dark:text-white">
                    {skillCategory.category}
                  </h3>
                  <div className="space-y-4">
                    {skillCategory.technologies.map((tech, techIndex) => (
                      <div key={techIndex} className="flex items-center justify-between">
                        <span className="text-base font-medium text-body-color dark:text-body-color-dark">
                          {tech.name}
                        </span>
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-semibold ${getLevelColor(tech.level)}`}
                        >
                          {tech.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SkillsPage;

