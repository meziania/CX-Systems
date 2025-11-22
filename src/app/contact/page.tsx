import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://cxsystems.vercel.app';

export const metadata: Metadata = {
  title: "Contact | CX System - Contactez-nous",
  description: "Contactez CX System pour discuter de votre projet. Développeur Full-Stack disponible pour missions freelance. Réponse rapide garantie.",
  openGraph: {
    title: "Contact | CX System - Contactez-nous",
    description: "Contactez CX System pour discuter de votre projet. Développeur Full-Stack disponible pour missions freelance.",
    url: `${siteUrl}/contact`,
    type: "website",
    images: [
      {
        url: `${siteUrl}/images/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Contact CX Systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | CX System",
    description: "Contactez CX System pour discuter de votre projet.",
    images: [`${siteUrl}/images/og-image.png`],
  },
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact"
        description="Contactez-nous pour discuter de votre projet. Nous sommes disponibles pour répondre à toutes vos questions et vous accompagner dans la réalisation de vos solutions digitales."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
