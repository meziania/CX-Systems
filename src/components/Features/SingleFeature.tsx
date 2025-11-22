import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="w-full">
      <div className="group rounded-xl bg-white p-8 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 dark:bg-gray-dark">
        <div className="bg-primary/10 text-primary mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-primary group-hover:text-white group-hover:shadow-lg">
          {icon}
        </div>
        <h3 className="mb-4 text-xl font-bold text-black transition-colors duration-300 sm:text-2xl lg:text-xl xl:text-2xl dark:text-white group-hover:text-primary">
          {title}
        </h3>
        <p className="text-body-color text-base leading-relaxed font-medium">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;
