import Image from "next/image";
import { Project } from "@/types/project";

type ProjectCardProps = {
  project: Project;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="mb-10 overflow-hidden rounded-lg bg-white shadow-xl dark:bg-[#1D2144]">
      <div className="relative h-[220px] w-full overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      <div className="p-8">
        <div className="mb-3 flex flex-wrap gap-3 text-sm font-medium text-primary">
          <span>{project.category}</span>
          <span className="text-body-color">• {project.year}</span>
        </div>

        <h3 className="mb-3 text-2xl font-semibold text-dark dark:text-white">
          {project.title}
        </h3>

        <p className="mb-6 text-base leading-relaxed text-body-color">
          {project.description}
        </p>

        <div className="flex flex-wrap items-center justify-between text-sm">
          <p className="font-semibold text-dark dark:text-white">
            Client : <span className="font-normal text-body-color">{project.client}</span>
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-primary/10 px-3 py-1 text-primary"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;



