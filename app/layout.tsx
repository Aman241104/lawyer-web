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
  title: "Advocate Name | Independent Legal Practitioner | Mumbai High Court",
  description: "Official professional profile of Advocate Name, LL.M. Providing independent legal advocacy and strategic counsel in Mumbai. Enrolled with the Bar Council of India.",
  keywords: ["Advocate", "Lawyer", "Mumbai High Court", "Legal Services", "Constitutional Law", "Civil Litigation"],
  openGraph: {
    title: "Advocate Name | Independent Legal Practitioner",
    description: "Official professional profile of Advocate Name, LL.M. Dedicated to the highest standards of legal precision and professional conduct.",
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
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LegalService",
              "name": "Advocate Name, LL.M.",
              "description": "Independent legal practitioner providing personalized advocacy and strategic counsel.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Legal Avenue, High Court Premises",
                "addressLocality": "Mumbai",
                "addressRegion": "Maharashtra",
                "postalCode": "400001",
                "addressCountry": "IN"
              },
              "telephone": "+91-9XXXX-XXXXX",
              "email": "info@advocatename.in",
              "url": "https://advocatename.in",
              "knowsAbout": ["Constitutional Law", "Civil Litigation", "Corporate Law", "Intellectual Property"]
            })
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-inter bg-white selection:bg-accent/30 selection:text-primary">
        <Preloader />
        <DisclaimerGate />
        <SmoothScroll>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
