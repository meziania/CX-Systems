import SectionTitle from "../Common/SectionTitle";
import ScrollReveal from "../Common/ScrollReveal";
import { Feature } from "@/types/feature";
import servicesData from "./servicesData";

// Composant SingleService inline pour éviter les problèmes d'importation
const SingleService = ({ service }: { service: Feature }) => {
  const { icon, title, paragraph } = service;
  return (
    <div className="w-full transition-transform duration-300 hover:scale-105">
      <div className="group">
        <div className="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
          {icon}
        </div>
        <h3 className="mb-5 text-xl font-bold text-black transition-colors duration-300 dark:text-white sm:text-2xl lg:text-xl xl:text-2xl group-hover:text-primary">
          {title}
        </h3>
        <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <>
      <section id="services" className="bg-gray-light py-16 dark:bg-bg-color-dark md:py-20 lg:py-28">
        <div className="container">
          <ScrollReveal direction="up" delay={0}>
            <SectionTitle
              title="Services Proposés"
              paragraph="Découvrez les services que je propose pour transformer vos idées en solutions digitales performantes. Du développement web aux applications desktop, je vous accompagne dans tous vos projets."
              center
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-2 lg:grid-cols-2">
            {servicesData.map((service, index) => (
              <ScrollReveal
                key={service.id}
                direction={index % 2 === 0 ? "left" : "right"}
                delay={index * 150}
              >
                <SingleService service={service} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
