import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://armanali.dev"),
  title: "Arman Ali | AI Developer Portfolio",
  description:
    "Personal portfolio of Arman Ali, an aspiring AI Developer passionate about Generative AI, Data Analytics, Python, Machine Learning, and modern web applications.",
  keywords: [
    "Arman Ali",
    "AI Developer",
    "Generative AI",
    "Data Analytics",
    "Python",
    "Machine Learning",
    "Power BI",
    "Next.js",
    "Portfolio",
  ],
  authors: [{ name: "Arman Ali", url: "https://github.com/armaali5566-ctrl" }],
  creator: "Arman Ali",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://armanali.dev",
    title: "Arman Ali | AI Developer",
    description:
      "Aspiring AI Developer building practical applications using AI, data analytics, and modern web technologies.",
    siteName: "Arman Ali Portfolio",
    images: [
      {
        url: "/images/arman-portrait.jpg",
        width: 800,
        height: 800,
        alt: "Arman Ali — AI Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arman Ali | AI Developer",
    description:
      "Aspiring AI Developer building practical applications using AI, data analytics, and modern web technologies.",
    images: ["/images/arman-portrait.jpg"],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#0B1020",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} scroll-smooth`}>
      <body className="bg-beige text-charcoal antialiased min-h-screen flex flex-col font-sans selection:bg-terracotta selection:text-white">
        {children}
      </body>
    </html>
  );
}
