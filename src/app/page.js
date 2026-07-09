import { HeroSection } from "@/features/chanting-engine";
import ChallengeSection from "@/components/ChallengeSection";
import DownloadAppCTA from "@/components/DownloadAppCTA";
import FAQSection from "@/components/FAQSection";
import FeaturesSection from "@/components/FeaturesSection";

export const metadata = {
  title: "Radha Naam Japa Counter — Free Online Japa Mala Tracker",
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
    "online mala counter",
    "free japa tracker",
    "digital mala",
    "devotional app",
  ],
  alternates: { canonical: "https://radhanaamjapa.com/" },
  openGraph: {
    title: "Radha Naam Japa Counter — Free Online Japa Mala Tracker",
    description:
      "Count your Radhe Radhe japa, track your streak, and join thousands of bhakts on the community leaderboard.",
    url: "https://radhanaamjapa.com/",
    type: "website",
    siteName: "Radha Naam Japa Counter",
    images: [
      {
        url: "/images/radha.jpg",
        width: 1200,
        height: 630,
        alt: "Radha Naam Japa Counter — Free Online Japa Mala Tracker",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@radhanaamjapa",
    creator: "@radhanaamjapa",
    title: "Radha Naam Japa Counter",
    description:
      "Free online japa counter for devotees. Track Radhe Radhe, Hare Krishna, Om Namah Shivaya & more.",
    images: ["/images/radha.jpg"],
  },
};

const homeFAQs = [
  {
    q: "What is a Japa Counter?",
    a: "A Japa Counter is a digital version of a japa mala (prayer beads). Each tap on the screen counts one repetition of your mantra, just like moving a bead on a physical mala.",
  },
  {
    q: "How do I start chanting?",
    a: "Simply open the app on the home page and tap anywhere on the screen to count each mantra repetition. One full mala = 108 taps. Confetti appears after every completed mala!",
  },
  {
    q: "What is the Japa Points System?",
    a: "The Japa Points System rewards genuine, consistent chanting. Points are calculated based on mala count, session duration, your chanting streak, and tap authenticity. Auto-clickers and bots receive 0 points.",
  },
  {
    q: "How does the Streak work?",
    a: "Your streak increases by 1 each day you chant at least once. If you miss a day, your streak resets to 0. Longer streaks earn more points through a streak multiplier (up to 2x for 30+ day streaks).",
  },
  {
    q: "Is this app free?",
    a: "Yes! Radha Naam Japa Counter is completely free. No registration required to use the counter — sign in only if you want to appear on the community leaderboard.",
  },
  {
    q: "Can I use this for mantras other than Radhe Radhe?",
    a: "Absolutely! We support Hare Krishna, Om Namah Shivaya, Om Gam Ganapataye Namah, Om Ham Hanumate Namah, Jai Shri Ram, and Radhe Radhe. More mantras coming soon!",
  },
  {
    q: "What is the End Session button?",
    a: "When you press 'End Session', the app calculates your Japa Points for that session based on your chanting quality and saves it to your history. You can see all sessions in the Statistics page.",
  },
];

export default function Home() {
  return (
    <main className="flex-1">
      {/* Structured Data — HowTo + WebSite */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebSite",
                "@id": "https://radhanaamjapa.com/#website",
                url: "https://radhanaamjapa.com/",
                name: "Radha Naam Japa Counter",
                description:
                  "Free online japa counter for devotees. Track Radhe Radhe, Hare Krishna, Om Namah Shivaya & more.",
                inLanguage: "en",
                publisher: { "@id": "https://radhanaamjapa.com/#organization" },
              },
              {
                "@type": "WebPage",
                "@id": "https://radhanaamjapa.com/#webpage",
                url: "https://radhanaamjapa.com/",
                name: "Radha Naam Japa Counter — Free Online Japa Mala Tracker",
                isPartOf: { "@id": "https://radhanaamjapa.com/#website" },
                about: { "@id": "https://radhanaamjapa.com/#organization" },
                description:
                  "Track your daily Radhe Radhe japa with our free online counter. Build chanting streaks, earn points, and join thousands of devotees on the community leaderboard.",
                inLanguage: "en",
                breadcrumb: { "@id": "https://radhanaamjapa.com/#breadcrumb" },
              },
              {
                "@type": "BreadcrumbList",
                "@id": "https://radhanaamjapa.com/#breadcrumb",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://radhanaamjapa.com/",
                  },
                ],
              },
              {
                "@type": "HowTo",
                name: "How to Count Japa with Radha Naam Japa Counter",
                description:
                  "A step-by-step guide to using the digital japa mala counter.",
                step: [
                  {
                    "@type": "HowToStep",
                    text: "Open the Radha Naam Japa Counter on your device.",
                  },
                  {
                    "@type": "HowToStep",
                    text: "Select your mantra from the dropdown (e.g. Radhe Radhe).",
                  },
                  {
                    "@type": "HowToStep",
                    text: "Tap anywhere on the screen to count each japa repetition.",
                  },
                  {
                    "@type": "HowToStep",
                    text: "Complete 108 taps to finish one mala. Confetti will celebrate your achievement!",
                  },
                  {
                    "@type": "HowToStep",
                    text: "Press 'End Session' to save your Japa Points and session history.",
                  },
                ],
              },
              {
                "@type": "FAQPage",
                mainEntity: homeFAQs.map((f) => ({
                  "@type": "Question",
                  name: f.q,
                  acceptedAnswer: { "@type": "Answer", text: f.a },
                })),
              },
            ],
          }),
        }}
      />

      {/* Hero Section  */}
      <HeroSection
        title="Radhe Radhe"
        imageSrc="/images/radha.jpg"
        altDescription="Lord Radha Ji"
      />
      {/* Radha Jap Streak Challenge 2026 section  */}
      <ChallengeSection />

      {/* ===== OUR FEATURES SECTION ===== */}
      <FeaturesSection />

      {/* App Download CTA Section  */}
      <DownloadAppCTA />

      {/* FAQ Section */}
      <div className="bg-[#FFF8E7]">
        <FAQSection faqs={homeFAQs} headingId="home-faq" />
      </div>
    </main>
  );
}
