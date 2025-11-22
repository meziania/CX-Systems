import Breadcrumb from "@/components/Common/Breadcrumb";
import BlogContent from "./BlogContent";
import { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://cxsystems.vercel.app';

export const metadata: Metadata = {
  title: "Projets | CX System - Nos Réalisations",
  description: "Découvrez nos projets réalisés pour nos clients. Chaque cas illustre notre approche centrée sur l'expérience client et l'impact mesurable.",
  openGraph: {
    title: "Projets | CX System - Nos Réalisations",
    description: "Découvrez nos projets réalisés pour nos clients. Chaque cas illustre notre approche centrée sur l'expérience client et l'impact mesurable.",
    url: `${siteUrl}/blog`,
    type: "website",
    images: [
      {
        url: `${siteUrl}/images/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Projets CX Systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projets | CX System - Nos Réalisations",
    description: "Découvrez nos projets réalisés pour nos clients.",
    images: [`${siteUrl}/images/og-image.png`],
  },
};

const Blog = () => {
  return (
    <>
      <Breadcrumb
        pageName="Nos Projets"
        description="Parcourez une sélection de projets que nous avons déjà livrés pour nos clients. Chaque cas illustre notre approche centrée sur l'expérience client et l'impact mesurable."
      />
      <BlogContent />
    </>
  );
};

export default Blog;
