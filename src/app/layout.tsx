import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "msg2ai — AI Guest Messaging for Hotels, Vacation Rentals & Events",
    template: "%s | msg2ai",
  },
  description:
    "AI-powered guest messaging on SMS and WhatsApp. No app download required. 126 languages. Built for hotels, vacation rentals, and event organizers. Starting at $9.99/month.",
  metadataBase: new URL("https://msg2ai.xyz"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "msg2ai",
    title: "msg2ai — AI Guest Messaging for Hotels, Vacation Rentals & Events",
    description:
      "AI-powered guest messaging on native SMS and WhatsApp. No app download. 126 languages. From $9.99/month.",
  },
  twitter: {
    card: "summary_large_image",
    title: "msg2ai — AI Guest Messaging",
    description:
      "AI-powered guest messaging on SMS & WhatsApp. No app download. 126 languages.",
  },
  alternates: {
    canonical: "https://msg2ai.xyz",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "msg2ai",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, SMS, WhatsApp",
    description:
      "AI-powered guest messaging platform for hotels, vacation rentals, and events. Supports 126 languages via native SMS and WhatsApp with no app download required.",
    url: "https://msg2ai.xyz",
    offers: {
      "@type": "AggregateOffer",
      lowPrice: "9.99",
      highPrice: "50.00",
      priceCurrency: "USD",
      offerCount: 3,
    },
    provider: {
      "@type": "Organization",
      name: "msg2ai",
      url: "https://msg2ai.xyz",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Charlotte",
        addressRegion: "NC",
        addressCountry: "US",
      },
    },
    featureList: [
      "AI-powered guest messaging",
      "126 language support",
      "No app download required",
      "Native SMS and WhatsApp",
      "24/7 automated responses",
      "Sentiment analysis",
      "Multi-property support",
      "Real-time analytics",
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <GoogleAnalytics gaId="G-B58SC743SB" />
      </body>
    </html>
  );
}
