"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollProgress from "@/components/Common/ScrollProgress";
import ScrollToTop from "@/components/ScrollToTop";
import GoogleAnalytics from "@/components/Common/GoogleAnalytics";
import { Providers } from "./providers";
import "../styles/index.css";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <GoogleAnalytics />
      <ScrollProgress />
      <Header />
      {children}
      <Footer />
      <ScrollToTop />
    </Providers>
  );
}

