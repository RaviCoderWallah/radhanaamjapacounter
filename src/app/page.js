import { HeroSection } from "@/features/chanting-engine";
import ChallengeSection from "@/components/ChallengeSection";
import DownloadAppCTA from "@/components/DownloadAppCTA";
import FAQSection from "@/components/FAQSection";
import { motion } from "framer-motion";


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
    description: "Free online japa counter for devotees. Track Radhe Radhe, Hare Krishna, Om Namah Shivaya & more.",
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
                description: "Free online japa counter for devotees. Track Radhe Radhe, Hare Krishna, Om Namah Shivaya & more.",
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
                description: "A step-by-step guide to using the digital japa mala counter.",
                step: [
                  { "@type": "HowToStep", text: "Open the Radha Naam Japa Counter on your device." },
                  { "@type": "HowToStep", text: "Select your mantra from the dropdown (e.g. Radhe Radhe)." },
                  { "@type": "HowToStep", text: "Tap anywhere on the screen to count each japa repetition." },
                  { "@type": "HowToStep", text: "Complete 108 taps to finish one mala. Confetti will celebrate your achievement!" },
                  { "@type": "HowToStep", text: "Press 'End Session' to save your Japa Points and session history." },
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
      <section className="w-full bg-[#FFF8E7] py-16 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="text-center mb-12"
          >
            <p className="text-[#F37420] font-semibold text-sm uppercase tracking-widest mb-2">
              Everything You Need
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#4A1C00]">
              Features Built for Bhakts
            </h2>
            <div className="w-16 h-1 bg-[#F37420] rounded-full mx-auto mt-3" />
          </motion.div>

          {/* Features Grid */}
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              { icon: "📊", title: "Weekly Progress", desc: "Visualize your chanting journey with beautiful weekly bar charts. See which days you chanted the most and stay consistent." },
              { icon: "🏆", title: "Community Leaderboard", desc: "Compete with devotees worldwide. Climb the ranks, earn your place on the podium, and inspire others with your dedication." },
              { icon: "🪔", title: "Personal Dashboard", desc: "Your own sadhana space \u2014 today's japa, lifetime count, total time spent chanting, all in one beautiful instant view." },
              { icon: "📅", title: "Monthly Heatmap", desc: "Track every single day of the month with a color-coded heatmap. Never miss a day and build an unbreakable chanting habit." },
              { icon: "🔥", title: "Streak Tracker", desc: "Build your daily chanting streak and protect it. See your current and longest streak \u2014 consistency is the true sadhana." },
              { icon: "📿", title: "Multiple Mantras", desc: "Choose from sacred mantras \u2014 Radhe Radhe, Hare Krishna, Om Namah Shivaya and more. Each chant tracked separately with love." },
            ].map(({ icon, title, desc }) => (
              <motion.div
                key={title}
                variants={{
                  hidden: { opacity: 0, y: 28 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
                }}
                whileHover={{ y: -6, boxShadow: "0 12px 28px rgba(243,116,32,0.15)" }}
                className="group bg-white rounded-2xl p-6 border border-[#FDE68A] hover:border-[#F37420] transition-all duration-300 cursor-pointer"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#F37420] to-[#F9BB4D] rounded-2xl flex items-center justify-center mb-5 group-hover:-translate-y-1 transition-transform duration-300">
                  <span className="text-2xl">{icon}</span>
                </div>
                <h3 className="text-lg font-bold text-[#4A1C00] mb-2">{title}</h3>
                <p className="text-[#78350F] text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* App Download CTA Section  */}
      <DownloadAppCTA />

      {/* FAQ Section */}
      <div className="bg-[#FFF8E7]">
        <FAQSection faqs={homeFAQs} headingId="home-faq" />
      </div>
    </main>
  );
}
