import Image from "next/image";
import ScrollReveal from "../Common/ScrollReveal";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <ScrollReveal direction="left" delay={0}>
              <div className="relative mx-auto mb-12 max-w-[500px] text-center lg:m-0">
              <div className="relative w-full" style={{ paddingBottom: '96%' }}>
                <Image
                  src="/images/about/about-image-2.svg"
                  alt="about image"
                  fill
                  className="object-contain drop-shadow-three dark:hidden"
                  sizes="(max-width: 768px) 100vw, 500px"
                  unoptimized
                />
                <Image
                  src="/images/about/about-image-2-dark.svg"
                  alt="about image"
                  fill
                  className="hidden object-contain drop-shadow-three dark:block"
                  sizes="(max-width: 768px) 100vw, 500px"
                  unoptimized
                />
              </div>
              </div>
            </ScrollReveal>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <ScrollReveal direction="right" delay={200}>
              <div className="max-w-[470px]">
                <div className="mb-8 transition-all duration-300 hover:translate-x-2">
                  <h3 className="mb-3 text-xl font-bold text-black transition-colors duration-300 dark:text-white sm:text-2xl lg:text-xl xl:text-2xl hover:text-primary">
                    Enterprise-Grade Technology
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    Built with cutting-edge technology and best practices, our platform ensures reliability, scalability, and performance for businesses of all sizes.
                  </p>
                </div>
                <div className="mb-8 transition-all duration-300 hover:translate-x-2">
                  <h3 className="mb-3 text-xl font-bold text-black transition-colors duration-300 dark:text-white sm:text-2xl lg:text-xl xl:text-2xl hover:text-primary">
                    Premium Support
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    Our dedicated support team is available 24/7 to help you maximize the value of CX System and ensure your success.
                  </p>
                </div>
                <div className="mb-0 transition-all duration-300 hover:translate-x-2">
                  <h3 className="mb-3 text-xl font-bold text-black transition-colors duration-300 dark:text-white sm:text-2xl lg:text-xl xl:text-2xl hover:text-primary">
                    Continuous Innovation
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    We continuously evolve our platform with new features and improvements based on customer feedback and industry trends.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
