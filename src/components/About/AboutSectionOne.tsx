import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import ScrollReveal from "../Common/ScrollReveal";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const List = ({ text }) => (
    <p className="text-body-color mb-4 flex items-center text-base font-medium">
      <span className="bg-primary/10 text-primary mr-3 flex h-[32px] w-[32px] flex-shrink-0 items-center justify-center rounded-lg">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <ScrollReveal direction="right" delay={0}>
                <SectionTitle
                  title="Excellence en Expérience Client depuis 2025"
                  paragraph="CX System se concentre sur la transformation digitale de l'expérience client, offrant des solutions innovantes qui permettent aux entreprises de créer des relations durables avec leurs clients grâce à la technologie et à l'intelligence artificielle."
                  mb="44px"
                />
              </ScrollReveal>

              <ScrollReveal direction="right" delay={200}>
                <div className="mb-12 max-w-[570px] lg:mb-0">
                  <div className="mx-[-12px] flex flex-wrap">
                    <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                      <List text="Solutions Sur Mesure" />
                      <List text="Intelligence Artificielle" />
                      <List text="Support 24/7" />
                    </div>

                    <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                      <List text="Intégration Rapide" />
                      <List text="ROI Mesurable" />
                      <List text="Sécurité Garantie" />
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <ScrollReveal direction="left" delay={300}>
                <div className="relative mx-auto max-w-[500px] lg:mr-0">
                <div className="relative w-full" style={{ paddingBottom: '96%' }}>
                  <Image
                    src="/images/about/about-image.svg"
                    alt="about-image"
                    fill
                    className="object-contain drop-shadow-three dark:hidden"
                    sizes="(max-width: 768px) 100vw, 500px"
                    unoptimized
                  />
                  <Image
                    src="/images/about/about-image-dark.svg"
                    alt="about-image"
                    fill
                    className="hidden object-contain drop-shadow-three dark:block"
                    sizes="(max-width: 768px) 100vw, 500px"
                    unoptimized
                  />
                </div>
              </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
