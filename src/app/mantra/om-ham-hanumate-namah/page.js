import { HeroSection } from "@/features/chanting-engine";
import FAQSection from "@/components/FAQSection";
import AnimatedSection from "@/components/shared/AnimatedSection";

export const metadata = {
  title: "Om Ham Hanumate Namah Jap Counter — Hanuman Mantra Tracker",
  description:
    "Count your Om Ham Hanumate Namah japa online. Learn the benefits of Hanuman mantra chanting for strength, courage, and protection. Free digital mala counter.",
  keywords: [
    "om ham hanumate namah counter",
    "hanuman mantra japa",
    "hanuman jap counter",
    "bajrang bali mantra",
    "hanuman mantra benefits",
    "strength mantra counter",
    "digital mala hanuman",
  ],
  alternates: { canonical: "https://radhanaamjapa.com/mantra/om-ham-hanumate-namah" },
  openGraph: {
    title: "Om Ham Hanumate Namah Jap Counter — Hanuman Mantra Tracker",
    description:
      "Count your Hanuman mantra japa and track your sadhana. Free online counter for Om Ham Hanumate Namah.",
    url: "https://radhanaamjapa.com/mantra/om-ham-hanumate-namah",
    type: "website",
    siteName: "Radha Naam Japa Counter",
    images: [
      {
        url: "/images/hanuman.jpg",
        width: 1200,
        height: 630,
        alt: "Om Ham Hanumate Namah — Hanuman Mantra Japa Counter",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@radhanaamjapa",
    creator: "@radhanaamjapa",
    title: "Om Ham Hanumate Namah Jap Counter",
    description: "Count your Hanuman mantra japa and track your daily sadhana for free.",
    images: ["/images/hanuman.jpg"],
  },
};

const faqs = [
  {
    q: "What does 'Om Ham Hanumate Namah' mean?",
    a: "Om Ham Hanumate Namah means 'I bow to Lord Hanuman'. 'Ham' is the seed syllable (beeja mantra) of Hanuman. This mantra invokes Hanuman's divine energy of strength, courage, and fearlessness.",
  },
  {
    q: "When is the best time to chant the Hanuman mantra?",
    a: "Tuesday and Saturday are traditionally dedicated to Lord Hanuman. The mantra is most powerful when chanted at sunrise (Brahma Muhurta) or at sunset. Chanting during Hanuman Jayanti is especially auspicious.",
  },
  {
    q: "How many times should I chant Om Ham Hanumate Namah?",
    a: "Chanting 108 times (one mala) daily is the standard practice. For powerful results, some practitioners chant 1008 times on Tuesdays or Saturdays.",
  },
  {
    q: "Can this mantra protect against negative energies?",
    a: "Devotees believe Lord Hanuman's mantra acts as a powerful shield against negative forces, evil eye (nazar), and malicious energies. Regular chanting builds a protective spiritual armor around the devotee.",
  },
];

export default function OmHamHanumateyNamah() {
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
                  { "@type": "ListItem", position: 3, name: "Om Ham Hanumate Namah", item: "https://radhanaamjapa.com/mantra/om-ham-hanumate-namah" },
                ],
              },
              {
                "@type": "Article",
                headline: "Om Ham Hanumate Namah — Benefits of Hanuman Mantra",
                description: "Learn the benefits of the Hanuman mantra Om Ham Hanumate Namah and track your japa with our free online counter.",
                url: "https://radhanaamjapa.com/mantra/om-ham-hanumate-namah",
                inLanguage: "en",
                about: { "@type": "Thing", name: "Om Ham Hanumate Namah Hanuman Mantra" },
                publisher: { "@id": "https://radhanaamjapa.com/#organization" },
              },
              {
                "@type": "HowTo",
                name: "How to Chant Om Ham Hanumate Namah",
                step: [
                  { "@type": "HowToStep", text: "Face East or a Hanuman idol/image. Sit in a clean place." },
                  { "@type": "HowToStep", text: "Close your eyes and focus on Lord Hanuman's form, feeling his strength." },
                  { "@type": "HowToStep", text: "Begin chanting 'Om Ham Hanumate Namah' with devotion and clarity." },
                  { "@type": "HowToStep", text: "Tap the counter for each repetition to track your japa count." },
                  { "@type": "HowToStep", text: "Complete 108 repetitions for one mala. Press End Session to save your progress." },
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
        title="Om Ham Hanumate Namah"
        imageSrc="/images/hanuman.jpg"
        altDescription="Lord Hanuman"
        audioSrc="/audio/om-ham-hanumate-namah.mp3"
      />
      {/* ===== MANTRA BENEFITS SECTION ===== */}
      <section className="w-full bg-[#FAE3A0] py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <div className="bg-gradient-to-b from-[#FFF8E7] to-[#FFF0D6] rounded-3xl border border-[#FDE68A] p-6 sm:p-12 shadow-sm">
              {/* Title */}
              <h2 className="text-xl sm:text-3xl font-bold text-[#4A1C00] text-center mb-3">
                Om Ham Hanumate Namah Jap Benefits
              </h2>
              <p className="text-[#78350F] text-xs sm:text-sm text-center leading-relaxed mb-8">
                Chanting the Hanuman Mantra (ॐ हं हनुमते नमः) invokes the divine presence of Lord Hanuman, the embodiment of selfless service, supreme strength, fearlessness, and devotion.
              </p>
   
              {/* Divider */}
              <div className="w-full h-px bg-[#FDE68A] mb-8" />
   
              {/* Why do we chant it */}
              <h3 className="text-base sm:text-lg font-bold text-[#4A1C00] mb-3">
                Why do we chant it?
              </h3>
              <p className="text-[#78350F] text-xs sm:text-sm leading-relaxed mb-8">
                Devotees chant this mantra to overcome weaknesses, eliminate fears, and seek protection from negative forces. Lord Hanuman represents the power of unbreakable devotion (Bhakti), spiritual discipline, and protective energy.
              </p>
   
              {/* Divider */}
              <div className="w-full h-px bg-[#FDE68A] mb-8" />
   
              {/* Benefits */}
              <h3 className="text-base sm:text-lg font-bold text-[#4A1C00] mb-5">Benefits</h3>
              <ul className="space-y-3">
                {[
                  "Eliminates fear, panic, anxiety, and depression from the mind",
                  "Grants immense physical strength, stamina, and vital energy",
                  "Shields the chanter from external negative energies and dark forces",
                  "Cultivates noble qualities of loyalty, service, and humility",
                  "Reduces the negative astrological effects of Saturn (Shani Dev)",
                  "Enhances willpower, focus, and self-discipline to face challenges",
                  "Purifies the mind and heart, aligning them with selfless love",
                  "Grants protection and triggers quick resolution to life's obstacles",
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
        <FAQSection faqs={faqs} headingId="hanuman-faq" />
      </div>
    </main>
  );
}
