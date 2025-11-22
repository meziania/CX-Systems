import { Project } from "@/types/project";

const siteDescription = "Développeur Full-Stack spécialisé en solutions CX. Transformez vos idées en solutions digitales performantes.";

type StructuredDataProps = {
  type: "Person" | "WebSite" | "Organization" | "Project";
  data?: any;
};

const StructuredData = ({ type, data }: StructuredDataProps) => {
  const getStructuredData = () => {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://cxsystems.vercel.app';

    switch (type) {
      case "Person":
        return {
          "@context": "https://schema.org",
          "@type": "Person",
          name: "CX Systems",
          jobTitle: "Développeur Full-Stack",
          description: "Développeur Full-Stack spécialisé en solutions Customer Experience",
          url: baseUrl,
          sameAs: [
            "https://github.com/cxsystems",
            "https://linkedin.com/in/cxsystems",
          ],
          knowsAbout: [
            "React",
            "Next.js",
            "TypeScript",
            "Node.js",
            "Django",
            "Python",
            "PostgreSQL",
            "Docker",
          ],
        };

      case "WebSite":
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Customer Experience Systems",
          url: baseUrl,
          description: siteDescription,
          publisher: {
            "@type": "Person",
            name: "CX Systems",
          },
        };

      case "Organization":
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Customer Experience Systems",
          url: baseUrl,
          logo: `${baseUrl}/images/logo/logo-2.png`,
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+212-699-254-247",
            contactType: "customer service",
            email: "contact@cxsystems.com",
            areaServed: "MA",
            availableLanguage: ["French", "English", "Arabic"],
          },
        };

      case "Project":
        if (!data) return null;
        return {
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: data.title,
          description: data.description,
          applicationCategory: "WebApplication",
          operatingSystem: "Web",
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "EUR",
          },
          creator: {
            "@type": "Person",
            name: "CX Systems",
          },
        };

      default:
        return null;
    }
  };

  const structuredData = getStructuredData();

  if (!structuredData) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export default StructuredData;

