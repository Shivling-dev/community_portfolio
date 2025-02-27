import type { Metadata } from "next";
import { Syne } from "next/font/google";
import { Kumbh_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Header from "./components/header-section/Header";
import { ViewProvider } from "@/contexts/ViewContext";

const kumbhSans = Kumbh_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anurag— Aspiring Cloud & DevOps Engineer",
  description:
    "A DevOps Engineer passionate about crafting next-gen software. I drive growth by crafting user experiences that blend aesthetics with functionality through my design and development skills. I thrive on turning ideas into seamless digital solutions.",
  keywords: [
    "devops",
    "frontend",
    "react",
    "tech",
    "creative developer",
    "UI development",
    "frontend engineer",
    "developer portfolio",
    "creative development",
    "nigeria",
    "software",
    "software developer",
    "software engineer",
    "portfolio",
  ],
  openGraph: {
    title: "Anurag— Aspiring Cloud & DevOps Engineer",
    description:
      "DevOps Engineer at Bluechip Technologies, passionate about crafting next-gen software. I drive growth by crafting user experiences that blend aesthetics with functionality through my design and development skills. I thrive on turning ideas into seamless digital solutions.",
    url: "https://www.your_name.me",
    siteName: "www.your_name.me",
    images: [
      {
        url: "https://i.ibb.co/FKMqc28/adeola-badero.png",
        width: 1200,
        height: 630,
        alt: "Anurag— Aspiring Cloud & DevOps Engineer",
      },
      {
        url: "https://i.ibb.co/Y8hBTR4/ade-800.png",
        width: 800,
        height: 800,
        alt: "Anurag— Aspiring Cloud & DevOps Engineer",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anurag— Aspiring Cloud & DevOps Engineer",
    description:
      "DevOps Engineer at Bluechip Technologies, passionate about crafting next-gen software. I drive growth by crafting user experiences that blend aesthetics with functionality through my design and development skills. I thrive on turning ideas into seamless digital solutions.",
    creator: "@iemafzalhassan",
    images: ["https://i.ibb.co/FKMqc28/adeola-badero.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      "max-image-preview": "large",
    },
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${kumbhSans.className} max-w-[90%] xl:max-w-[1223px] w-full mx-auto overflow-x-hidden`}
      >
        <>
          <ViewProvider>
            <Header />
            {children}
          </ViewProvider>
          <Analytics />
          <SpeedInsights />
        </>
      </body>
    </html>
  );
}
