import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import { JapaStateProvider } from "@/context/JapaStateContext";
import Footer from "@/components/layout/Footer";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  preload: true,
});

export const metadata = {
  metadataBase: new URL("https://radhanaamjapa.com"),
  applicationName: "Radha Naam Japa Counter",
  title: {
    default: "Radha Naam Japa Counter — Free Online Japa Mala Tracker",
    template: "%s | Radha Naam Japa Counter",
  },
  description:
    "Track your daily Radhe Radhe japa with our free online counter. Build chanting streaks, earn points, and join thousands of devotees on the community leaderboard.",
  keywords: [
    "japa counter",
    "radhe radhe",
    "japa mala",
    "chanting tracker",
    "bhakti",
    "radha krishna",
    "mantra counter",
    "japa sadhana",
    "hare krishna",
    "om namah shivaya",
    "online mala counter",
    "free japa tracker",
  ],
  authors: [{ name: "Radha Naam Japa" }],
  creator: "Radha Naam Japa",
  publisher: "Radha Naam Japa",
  alternates: {
    canonical: "https://radhanaamjapa.com",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://radhanaamjapa.com",
    siteName: "Radha Naam Japa Counter",
    title: "Radha Naam Japa Counter — Free Online Japa Mala Tracker",
    description:
      "Track your daily Radhe Radhe japa with our free online counter. Build chanting streaks, earn points, and join thousands of devotees on the community leaderboard.",
    images: [
      {
        url: "/images/radha.jpg",
        width: 1200,
        height: 630,
        alt: "Radha Naam Japa Counter — Free Japa Mala Tracker",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@radhanaamjapa",
    creator: "@radhanaamjapa",
    title: "Radha Naam Japa Counter — Free Online Japa Mala Tracker",
    description:
      "Track your daily Radhe Radhe japa with our free online counter. Build chanting streaks, earn points, and join thousands of devotees on the community leaderboard.",
    images: ["/images/radha.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "spirituality",
};

const organizationLD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://radhanaamjapa.com/#organization",
      name: "Radha Naam Japa Counter",
      url: "https://radhanaamjapa.com",
      logo: {
        "@type": "ImageObject",
        url: "https://radhanaamjapa.com/favicon.ico",
      },
      sameAs: [],
      description:
        "A free devotional platform for tracking japa sadhana — Radhe Radhe, Hare Krishna, Om Namah Shivaya and more.",
      contactPoint: {
        "@type": "ContactPoint",
        email: "support@radhanaamjapa.com",
        contactType: "customer support",
        availableLanguage: ["English", "Hindi"],
      },
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://radhanaamjapa.com/#app",
      name: "Radha Naam Japa Counter",
      url: "https://radhanaamjapa.com",
      applicationCategory: "LifestyleApplication",
      operatingSystem: "Web",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "INR",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "1200",
        bestRating: "5",
        worstRating: "1",
      },
      description:
        "Free online japa counter for devotees. Track Radhe Radhe, Hare Krishna, Om Namah Shivaya & more mantras with streak tracking and community leaderboard.",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLD) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-(--color-lighter-yellow)">
        <Navbar />
        <JapaStateProvider>{children}</JapaStateProvider>
        <Footer />
        <Toaster
          position="bottom-center"
          toastOptions={{
            style: {
              background: "#FFFDF9",
              color: "#4A1C00",
              border: "1px solid #FDE68A",
              fontFamily: "var(--font-poppins)",
              fontWeight: "600",
            },
          }}
        />
      </body>
    </html>
  );
}
