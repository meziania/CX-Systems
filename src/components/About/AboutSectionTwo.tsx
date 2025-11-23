import ScrollReveal from "../Common/ScrollReveal";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <ScrollReveal direction="left" delay={0}>
              <div className="relative mx-auto mb-12 max-w-[500px] text-center lg:m-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/about/about-image-2.svg?v=2"
                  alt="Illustration à propos de CX Systems"
                  width={500}
                  height={480}
                  className="w-full h-auto object-contain drop-shadow-three dark:hidden"
                  loading="lazy"
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/about/about-image-2-dark.svg?v=2"
                  alt="Illustration à propos de CX Systems"
                  width={500}
                  height={480}
                  className="hidden w-full h-auto object-contain drop-shadow-three dark:block"
                  loading="lazy"
                />
              </div>
            </ScrollReveal>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <ScrollReveal direction="right" delay={200}>
              <div className="max-w-[470px]">
                <div className="mb-8 transition-all duration-300 hover:translate-x-2">
                  <h3 className="mb-3 text-xl font-bold text-black transition-colors duration-300 dark:text-white sm:text-2xl lg:text-xl xl:text-2xl hover:text-primary">
                    Technologie de Niveau Entreprise
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    Construit avec des technologies de pointe et les meilleures pratiques, notre plateforme assure fiabilité, scalabilité et performance pour les entreprises de toutes tailles.
                  </p>
                </div>
                <div className="mb-8 transition-all duration-300 hover:translate-x-2">
                  <h3 className="mb-3 text-xl font-bold text-black transition-colors duration-300 dark:text-white sm:text-2xl lg:text-xl xl:text-2xl hover:text-primary">
                    Support Premium
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    Notre équipe de support dédiée est disponible 24/7 pour vous aider à maximiser la valeur de CX System et assurer votre succès.
                  </p>
                </div>
                <div className="mb-0 transition-all duration-300 hover:translate-x-2">
                  <h3 className="mb-3 text-xl font-bold text-black transition-colors duration-300 dark:text-white sm:text-2xl lg:text-xl xl:text-2xl hover:text-primary">
                    Innovation Continue
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    Nous faisons évoluer continuellement notre plateforme avec de nouvelles fonctionnalités et améliorations basées sur les retours clients et les tendances du secteur.
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
