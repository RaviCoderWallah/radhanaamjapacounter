import { HeroSection } from "@/features/chanting-engine";
import FAQSection from "@/components/FAQSection";
import AnimatedSection from "@/components/shared/AnimatedSection";

export const metadata = {
  title: "Jai Shri Ram Jap Counter — Chant Lord Ram's Name & Track Japa",
  description:
    "Count your Jai Shri Ram japa online. Learn the benefits of chanting Lord Ram's name and track your daily sadhana with our free digital mala counter.",
  keywords: [
    "jai shri ram counter",
    "ram naam jap",
    "lord ram japa",
    "ram mantra counter",
    "jai shri ram benefits",
    "online ram mantra tracker",
    "digital japa mala ram",
  ],
  alternates: { canonical: "https://radhanaamjapa.com/mantra/jai-shri-ram" },
  openGraph: {
    title: "Jai Shri Ram Jap Counter — Chant Lord Ram's Name & Track Japa",
    description:
      "Count your Jai Shri Ram japa and track your sadhana. Free online digital mala counter for Lord Ram's naam.",
    url: "https://radhanaamjapa.com/mantra/jai-shri-ram",
    type: "website",
    siteName: "Radha Naam Japa Counter",
    images: [
      {
        url: "/images/ram.jfif",
        width: 1200,
        height: 630,
        alt: "Jai Shri Ram Mantra Japa Counter",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@radhanaamjapa",
    creator: "@radhanaamjapa",
    title: "Jai Shri Ram Jap Counter",
    description: "Count your Jai Shri Ram japa and track your daily sadhana for free.",
    images: ["/images/ram.jfif"],
  },
};

const faqs = [
  {
    q: "What does 'Jai Shri Ram' mean?",
    a: "Jai Shri Ram means 'Victory to Lord Ram'. It is a salutation to Lord Ram, the seventh avatar of Vishnu, who represents righteousness (dharma), truth, and ideal conduct.",
  },
  {
    q: "How many times should I chant Jai Shri Ram daily?",
    a: "Chanting 108 times (one mala) is considered one complete round. Many devotees chant 3-5 malas (324-540 times) daily. Even a few sincere repetitions are spiritually powerful.",
  },
  {
    q: "What are the benefits of chanting Ram naam?",
    a: "Chanting Ram naam brings peace of mind, courage, removes fear, purifies karma, builds positive virtues, and is said to be equal to reciting the entire Vishnu Sahasranama.",
  },
  {
    q: "Can I use this counter for Ram naam japa?",
    a: "Yes! Simply open the Jai Shri Ram page, tap the screen for each repetition, and the counter automatically tracks your japa count and awards points.",
  },
];

export default function JaiShriRam() {
  return (
    <main className="flex-1">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Home", item: "https://radhanaamjapa.com/" },
                  { "@type": "ListItem", position: 2, name: "Mantras", item: "https://radhanaamjapa.com/mantra" },
                  { "@type": "ListItem", position: 3, name: "Jai Shri Ram", item: "https://radhanaamjapa.com/mantra/jai-shri-ram" },
                ],
              },
              {
                "@type": "Article",
                headline: "Jai Shri Ram — Benefits of Chanting Lord Ram's Name",
                description: "Learn the spiritual benefits of chanting Jai Shri Ram and track your japa with our free online counter.",
                url: "https://radhanaamjapa.com/mantra/jai-shri-ram",
                inLanguage: "en",
                about: { "@type": "Thing", name: "Jai Shri Ram Mantra" },
                publisher: { "@id": "https://radhanaamjapa.com/#organization" },
              },
              {
                "@type": "HowTo",
                name: "How to Chant Jai Shri Ram",
                step: [
                  { "@type": "HowToStep", text: "Find a quiet, clean place to sit comfortably." },
                  { "@type": "HowToStep", text: "Light a diya or incense if possible, and focus your mind on Lord Ram." },
                  { "@type": "HowToStep", text: "Begin chanting 'Jai Shri Ram' with devotion." },
                  { "@type": "HowToStep", text: "Tap this counter for each repetition to track your japa count." },
                  { "@type": "HowToStep", text: "Complete 108 repetitions for one mala. Press End Session to save." },
                ],
              },
              {
                "@type": "FAQPage",
                mainEntity: faqs.map((f) => ({
                  "@type": "Question",
                  name: f.q,
                  acceptedAnswer: { "@type": "Answer", text: f.a },
                })),
              },
            ],
          }),
        }}
      />
      <HeroSection
        title="Jai Shri Ram"
        imageSrc="/images/ram.jfif"
        altDescription="Lord Ram"
        audioSrc="/audio/jai-shri-ram.mp3"
      />
      {/* ===== MANTRA BENEFITS SECTION ===== */}
      <section className="w-full bg-[#FAE3A0] py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <div className="bg-gradient-to-b from-[#FFF8E7] to-[#FFF0D6] rounded-3xl border border-[#FDE68A] p-6 sm:p-12 shadow-sm">
              {/* Title */}
              <h2 className="text-xl sm:text-3xl font-bold text-[#4A1C00] text-center mb-3">
                Jai Shri Ram Jap Benefits
              </h2>
              <p className="text-[#78350F] text-xs sm:text-sm text-center leading-relaxed mb-8">
                Chanting the name of Lord Ram (जय श्री राम) fills the heart with righteousness, peace, and spiritual strength. It is a powerful practice to connect with Maryada Purushottam Lord Ram.
              </p>
   
              {/* Divider */}
              <div className="w-full h-px bg-[#FDE68A] mb-8" />
   
              {/* Why do we chant it */}
              <h3 className="text-base sm:text-lg font-bold text-[#4A1C00] mb-3">
                Why do we chant it?
              </h3>
              <p className="text-[#78350F] text-xs sm:text-sm leading-relaxed mb-8">
                Devotees chant the name of Lord Ram to cultivate noble virtues like truth, duty, humility, and courage. Chanting &quot;Ram&quot; is considered equal to chanting the entire Vishnu Sahasranama, instantly purifying the chanter&apos;s mind and consciousness.
              </p>
   
              {/* Divider */}
              <div className="w-full h-px bg-[#FDE68A] mb-8" />
   
              {/* Benefits */}
              <h3 className="text-base sm:text-lg font-bold text-[#4A1C00] mb-5">Benefits</h3>
              <ul className="space-y-3">
                {[
                  "Brings absolute peace of mind, calmness, and mental clarity",
                  "Instills courage, inner strength, and shields against negativity",
                  "Purifies past karmic blockages and promotes righteousness (dharma)",
                  "Brings harmony, joy, and peace to household and relationships",
                  "Dissolves fear, stress, and anxiety, building confidence",
                  "Connects the devotee with the supreme divine qualities of Lord Ram",
                  "Purifies speech, mind, and body through sacred sound vibrations",
                  "Grants steady spiritual growth, devotion, and liberation",
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-[#F37420] font-bold mt-0.5">·</span>
                    <span className="text-[#78350F] text-xs sm:text-sm leading-relaxed">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ Section */}
      <div className="bg-[#FAE3A0] pb-12">
        <FAQSection faqs={faqs} headingId="jai-shri-ram-faq" />
      </div>
    </main>
  );
}
