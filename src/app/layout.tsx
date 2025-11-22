import { Metadata } from "next";
import { Inter } from "next/font/google";
import ClientLayout from "./layout-client";
import "../styles/index.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Customer Experience Systems",
  description: "CX System offers innovative solutions to optimize your company's customer experience. Transform your customer interactions with our advanced tools.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="fr">
      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}

