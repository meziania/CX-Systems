import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://cxsystems.vercel.app';

export const metadata: Metadata = {
  title: "À Propos | CX System - Votre Partenaire CX",
  description: "Découvrez CX System, votre partenaire pour transformer l'expérience client avec des solutions innovantes et personnalisées. Développeur Full-Stack spécialisé en solutions CX.",
  openGraph: {
    title: "À Propos | CX System - Votre Partenaire CX",
    description: "Découvrez CX System, votre partenaire pour transformer l'expérience client avec des solutions innovantes et personnalisées.",
    url: `${siteUrl}/about`,
    type: "website",
    images: [
      {
        url: `${siteUrl}/images/og-image.png`,
        width: 1200,
        height: 630,
        alt: "À Propos CX Systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "À Propos | CX System",
    description: "Découvrez CX System, votre partenaire pour transformer l'expérience client.",
    images: [`${siteUrl}/images/og-image.png`],
  },
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About CX System"
        description="We are a passionate team dedicated to revolutionizing customer experience through innovative technologies and personalized solutions."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
