import type { Metadata } from "next";
import { Lilita_One } from "next/font/google";

import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const lilitaone = Lilita_One({
  variable: "--font-lilita-one",
  subsets: ["latin"],
  weight: "400"
});


export const metadata: Metadata = {
  title: "GitHub README Generator",
  description:
    "Easily generate professional README.md files for your GitHub repositories with our GitHub README Generator. Simplify your project documentation with this intuitive tool.",
  keywords: [
    "gitreadme",
    "github",
    "readme",
    "readme generator",
    "ausafulislam",
    "ausaf ul islam",
    "readme.md",
    "readme file",
    "documentation",
    "project documentation",
    "github project documentation",
    "github readme",
    "github readme generator",
    "github readme file",
    "github project readme",
    "developer tools",
    "automated readme creation",
    "open source",
    "open source readme generator",
    "open source readme file",
    "open source readme",
    "open source project documentation",
    "open source readme generator",
    "open source readme file",
    "open source readme",
    "open source project readme",
    "git readme generator",
    "git readme file",
    "git readme",
    "git project documentation",
  ],
  authors: [
    { name: "Ausaf ul Islam", url: "https://github.com/ausafulislam" },
  ], openGraph: {
    title: "GitHub README Generator",
    description:
      "Easily generate professional README.md files for your GitHub repositories with our GitHub README Generator. Simplify your project documentation with this intuitive tool.",
    url: "https://gitreadme-maker.vercel.app", 
    siteName: "GitReadMe",
    type: "website",
    images: [
      {
        url: "/og-image.jpg", // Add an image URL relevant to your site
        width: 1200,
        height: 630,
        alt: "GitHub README Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@ausafulislam_h", // Replace with your Twitter handle
    title: "GitHub README Generator",
    description:
      "Easily generate professional README.md files for your GitHub repositories with our GitHub README Generator.",
    images: "/og-image.jpg", // Add an image URL relevant to your site
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="NaUf690lfIuTZBJkyF-I68rIiX-t0HiZe5xWgUQwNm0" />
      </head>
      <body
        className={`${lilitaone.variable} antialiased`}
      >

        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
