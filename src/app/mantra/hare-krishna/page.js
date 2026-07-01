import { HeroSection } from "@/features/chanting-engine";
import FAQSection from "@/components/FAQSection";
import AnimatedSection from "@/components/shared/AnimatedSection";

export const metadata = {
  title: "Hare Krishna Maha Mantra Jap Counter — Chant & Track Online",
  description:
    "Count your Hare Krishna Maha Mantra japa online. Learn the benefits of chanting Hare Krishna Hare Krishna Krishna Krishna Hare Hare and track your daily sadhana.",
  keywords: [
    "hare krishna mantra counter",
    "hare krishna japa",
    "maha mantra jap",
    "krishna japa counter",
    "hare krishna benefits",
    "online mantra counter",
    "digital mala hare krishna",
  ],
  alternates: { canonical: "https://radhanaamjapa.com/mantra/hare-krishna" },
  openGraph: {
    title: "Hare Krishna Maha Mantra Jap Counter — Chant & Track Online",
    description:
      "Count your Hare Krishna Maha Mantra japa and track your sadhana. Free online japa counter.",
    url: "https://radhanaamjapa.com/mantra/hare-krishna",
    type: "website",
    siteName: "Radha Naam Japa Counter",
    images: [
      {
        url: "/images/krishna.jfif",
        width: 1200,
        height: 630,
        alt: "Hare Krishna Mantra Japa Counter",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@radhanaamjapa",
    creator: "@radhanaamjapa",
    title: "Hare Krishna Maha Mantra Jap Counter",
    description: "Count your Hare Krishna Maha Mantra japa and track your sadhana for free.",
    images: ["/images/krishna.jfif"],
  },
};

const faqs = [
  {
    q: "What is the Hare Krishna Maha Mantra?",
    a: "The Hare Krishna Maha Mantra is: Hare Krishna Hare Krishna, Krishna Krishna Hare Hare, Hare Rama Hare Rama, Rama Rama Hare Hare. It is considered the most powerful mantra for Kali Yuga.",
  },
  {
    q: "How many times should I chant the Hare Krishna Maha Mantra?",
    a: "Traditional practice is to chant 108 times (one mala) or 16 rounds (1,728 repetitions) daily. Begin with one mala and gradually increase your practice.",
  },
  {
    q: "What are the benefits of chanting Hare Krishna?",
    a: "Chanting Hare Krishna cleanses the heart, awakens love for God, reduces anxiety, removes bad effects of Kali Yuga, and leads toward spiritual liberation (moksha).",
  },
  {
    q: "Can beginners chant the Hare Krishna Maha Mantra?",
    a: "Yes! The Maha Mantra is suitable for everyone regardless of age, caste, or spiritual background. Simply chant with sincerity and focus.",
  },
];

export default function HareKrishna() {
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
                  { "@type": "ListItem", position: 3, name: "Hare Krishna", item: "https://radhanaamjapa.com/mantra/hare-krishna" },
                ],
              },
              {
                "@type": "Article",
                headline: "Hare Krishna Maha Mantra — Benefits and How to Chant",
                description: "Learn the benefits of the Hare Krishna Maha Mantra and how to count your japa with our free digital mala counter.",
                url: "https://radhanaamjapa.com/mantra/hare-krishna",
                inLanguage: "en",
                about: { "@type": "Thing", name: "Hare Krishna Maha Mantra" },
                publisher: { "@id": "https://radhanaamjapa.com/#organization" },
              },
              {
                "@type": "HowTo",
                name: "How to Chant the Hare Krishna Maha Mantra",
                step: [
                  { "@type": "HowToStep", text: "Sit in a comfortable posture with your back straight." },
                  { "@type": "HowToStep", text: "Take a mala (108 beads) or use this digital counter." },
                  { "@type": "HowToStep", text: "Begin chanting: Hare Krishna Hare Krishna, Krishna Krishna Hare Hare..." },
                  { "@type": "HowToStep", text: "Tap the counter for each mantra repetition to track your japa." },
                  { "@type": "HowToStep", text: "Complete 108 repetitions (one mala) and press End Session to save your points." },
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
        title="Hare Krishna Hare Krishna"
        imageSrc="/images/krishna.jfif"
        altDescription="Lord Krishna"
        audioSrc="/audio/hare-krishna.mp3"
      />
      {/* ===== MANTRA BENEFITS SECTION ===== */}
      <section className="w-full bg-[#FAE3A0] py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <div className="bg-gradient-to-b from-[#FFF8E7] to-[#FFF0D6] rounded-3xl border border-[#FDE68A] p-8 sm:p-12 shadow-sm">
              {/* Title */}
              <h2 className="text-2xl sm:text-3xl font-bold text-[#4A1C00] text-center mb-3">
                Hare Krishna Maha Mantra Jap Benefits
              </h2>
              <p className="text-[#78350F] text-sm text-center leading-relaxed mb-8">
                The Hare Krishna Maha Mantra (हरे कृष्ण...) is the great chanting
                prayer for deliverance. It is praised in scriptures as the most
                effective mantra for Kali Yuga.
              </p>

              {/* Divider */}
              <div className="w-full h-px bg-[#FDE68A] mb-8" />

              {/* Why do we chant it */}
              <h3 className="text-lg font-bold text-[#4A1C00] mb-3">
                Why do we chant it?
              </h3>
              <p className="text-[#78350F] text-sm leading-relaxed mb-8">
                Devotees chant this mantra to cleanse consciousness, awaken love
                for Krishna, and seek liberation. It is recommended for daily japa
                because it directly connects the soul with the Supreme Lord.
              </p>

              {/* Divider */}
              <div className="w-full h-px bg-[#FDE68A] mb-8" />

              {/* Benefits */}
              <h3 className="text-lg font-bold text-[#4A1C00] mb-5">Benefits</h3>
              <ul className="space-y-3">
                {[
                  "Cleanses the heart and consciousness (ceto-darpana-marjanam)",
                  "Awakens love and devotion for Lord Krishna",
                  "Reduces anxiety, stress, and restlessness",
                  "Removes the bad effects of Kali Yuga",
                  "Brings spiritual happiness and inner bliss",
                  "Helps one remember Krishna throughout the day",
                  "Purifies past karma through nama-sankirtan",
                  "Leads toward liberation (moksha) through bhakti",
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-[#F37420] font-bold mt-0.5">·</span>
                    <span className="text-[#78350F] text-sm leading-relaxed">
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
      <div className="bg-[#FFF8E7] pb-12">
        <FAQSection faqs={faqs} headingId="hare-krishna-faq" />
      </div>
    </main>
  );
}
