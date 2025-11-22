import { Metadata } from "next";
import { Inter } from "next/font/google";
import ClientLayout from "./layout-client";
import StructuredData from "@/components/Common/StructuredData";
import "../styles/index.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-inter",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://cxsystems.vercel.app';
const siteName = 'Customer Experience Systems';
const siteDescription = 'Développeur Full-Stack spécialisé en solutions CX. Transformez vos idées en solutions digitales performantes avec une approche centrée sur l\'expérience utilisateur.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    'développeur full-stack',
    'développeur React',
    'développeur Next.js',
    'développeur freelance',
    'customer experience',
    'CX solutions',
    'développement web',
    'développement mobile',
    'Maroc',
  ],
  authors: [{ name: 'CX Systems' }],
  creator: 'CX Systems',
  publisher: 'CX Systems',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: siteUrl,
    siteName: siteName,
    title: siteName,
    description: siteDescription,
    images: [
      {
        url: `${siteUrl}/images/og-image.png`,
        width: 1200,
        height: 630,
        alt: siteName,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteName,
    description: siteDescription,
    images: [`${siteUrl}/images/og-image.png`],
    creator: '@cxsystems',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="fr" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      </head>
      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <StructuredData type="Person" />
        <StructuredData type="WebSite" />
        <StructuredData type="Organization" />
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}

