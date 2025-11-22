import SectionTitle from "../Common/SectionTitle";
import ScrollReveal from "../Common/ScrollReveal";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <ScrollReveal direction="up" delay={0}>
            <SectionTitle
              title="Mes Compétences Techniques"
              paragraph="Découvrez les technologies et compétences que je maîtrise pour développer des solutions digitales performantes et innovantes. De la conception à la mise en production, je couvre l'ensemble du cycle de développement."
              center
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature, index) => (
              <ScrollReveal
                key={feature.id}
                direction="up"
                delay={index * 100}
              >
                <SingleFeature feature={feature} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
