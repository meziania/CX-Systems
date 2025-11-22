import { Testimonial } from "@/types/testimonial";
import Image from "next/image";
const starIcon = (
  <svg width="18" height="16" viewBox="0 0 18 16" className="fill-current">
    <path d="M9.09815 0.361679L11.1054 6.06601H17.601L12.3459 9.59149L14.3532 15.2958L9.09815 11.7703L3.84309 15.2958L5.85035 9.59149L0.595291 6.06601H7.0909L9.09815 0.361679Z" />
  </svg>
);

const SingleTestimonial = ({ testimonial }: { testimonial: Testimonial }) => {
  const { star, name, image, content, designation } = testimonial;

  let ratingIcons = [];
  for (let index = 0; index < star; index++) {
    ratingIcons.push(
      <span key={index} className="text-yellow">
        {starIcon}
      </span>,
    );
  }

  return (
    <div className="w-full">
      <div className="group shadow-two hover:shadow-xl dark:bg-dark dark:shadow-three dark:hover:shadow-gray-dark rounded-xl bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] lg:px-6 xl:px-8">
        <div className="mb-5 flex items-center space-x-1 transition-transform duration-300 group-hover:scale-110">{ratingIcons}</div>
        <p className="border-body-color/10 text-body-color mb-8 border-b pb-8 text-base leading-relaxed transition-colors duration-300 dark:border-white/10 dark:text-white group-hover:text-primary dark:group-hover:text-primary">
          "{content}
        </p>
        <div className="flex items-center">
          <div className="relative mr-4 h-[50px] w-full max-w-[50px] overflow-hidden rounded-full transition-transform duration-300 group-hover:scale-110 group-hover:ring-2 group-hover:ring-primary">
            <Image src={image} alt={name} fill />
          </div>
          <div className="w-full">
            <h3 className="text-dark mb-1 text-lg font-semibold transition-colors duration-300 lg:text-base xl:text-lg dark:text-white group-hover:text-primary">
              {name}
            </h3>
            <p className="text-body-color text-sm">{designation}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTestimonial;
