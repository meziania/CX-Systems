import SectionTitle from "../Common/SectionTitle";
import { Feature } from "@/types/feature";
import servicesData from "./servicesData";

// Composant SingleService inline pour éviter les problèmes d'importation
const SingleService = ({ service }: { service: Feature }) => {
  const { icon, title, paragraph } = service;
  return (
    <div className="w-full">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <div className="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
          {icon}
        </div>
        <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
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
          <SectionTitle
            title="Our CX Services"
            paragraph="Discover our complete range of services dedicated to improving your customer experience. From strategic consulting to technical implementation, we support you at every step."
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-2 lg:grid-cols-2">
            {servicesData.map((service) => (
              <SingleService key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;