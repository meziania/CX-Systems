import { Feature } from "@/types/feature";

const SingleService = ({ service }: { service: Feature }) => {
  const { icon, title, paragraph } = service;
  return (
    <div className="w-full">
      <div className="wow fadeInUp group rounded-xl bg-white p-8 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 dark:bg-gray-dark" data-wow-delay=".15s">
        <div className="mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-xl bg-primary bg-opacity-10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20 group-hover:shadow-lg">
          {icon}
        </div>
        <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
          {title}
        </h3>
        <p className="text-base font-medium leading-relaxed text-body-color">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleService;