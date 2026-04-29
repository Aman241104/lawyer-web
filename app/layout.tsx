import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import DisclaimerGate from "@/components/DisclaimerGate";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import Preloader from "@/components/Preloader";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jay G Patel | Advocate | Ahmedabad High Court",
  description: "Official professional profile of Jay G Patel, Advocate. Providing independent legal advocacy and strategic counsel in Ahmedabad. Enrolled with the Bar Council of India.",
  keywords: ["Jay G Patel", "Advocate", "Ahmedabad High Court", "Legal Services", "Constitutional Law", "Civil Litigation"],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/icon.png", type: "image/png", sizes: "192x192" },
      { url: "/apple-icon.png", type: "image/png", sizes: "180x180" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Jay G Patel | Advocate",
    description: "Official professional profile of Jay G Patel, Advocate. Dedicated to the highest standards of legal precision and professional conduct.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LegalService",
              "name": "Jay G Patel, Advocate",
              "description": "Independent legal practitioner providing personalized advocacy and strategic counsel.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "FF-13, Omkar Lotus, Opp. SMVS Swaminarayan Temple, Chandkheda To Motera Road, Chandkheda",
                "addressLocality": "Ahmedabad",
                "addressRegion": "Gujarat",
                "postalCode": "382424",
                "addressCountry": "IN"
              },
              "telephone": "+91-99987-14891",
              "email": "jay1802@gmail.com",
              "url": "https://jaygpatel.in",
              "knowsAbout": ["Criminal Law", "Land Revenue", "Family Law", "Corporate Law"]
            })
          }}
        />
      </head>
      <body className="flex flex-col font-inter bg-white selection:bg-accent/30 selection:text-primary">
        <Preloader />
        <DisclaimerGate />
        <SmoothScroll>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
        </SmoothScroll>
      </body>
    </html>
  );
}
