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
              title="Main Features"
              paragraph="Discover the powerful features that make CX System the leading solution for customer experience management. From AI-powered analytics to seamless integrations, we've got everything you need."
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
