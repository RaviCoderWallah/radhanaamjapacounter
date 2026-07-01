import { HeroSection } from "@/features/chanting-engine";
import FAQSection from "@/components/FAQSection";
import AnimatedSection from "@/components/shared/AnimatedSection";

export const metadata = {
  title: "Om Namah Shivaya Jap Counter — Shiva Mantra Tracker Online",
  description:
    "Count your Om Namah Shivaya japa online. Learn the benefits of the Shiva Panchakshara mantra and track your daily sadhana with our free digital mala counter.",
  keywords: [
    "om namah shivaya counter",
    "shiva mantra japa",
    "panchakshara mantra counter",
    "shiv mantra tracker",
    "om namah shivaya benefits",
    "lord shiva japa counter",
    "digital mala shiva",
  ],
  alternates: { canonical: "https://radhanaamjapa.com/mantra/om-namah-shivaya" },
  openGraph: {
    title: "Om Namah Shivaya Jap Counter — Shiva Mantra Tracker Online",
    description:
      "Count your Om Namah Shivaya japa and connect with Lord Shiva's cosmic energy. Free online Shiva mantra counter.",
    url: "https://radhanaamjapa.com/mantra/om-namah-shivaya",
    type: "website",
    siteName: "Radha Naam Japa Counter",
    images: [
      {
        url: "/images/shivji.png",
        width: 1200,
        height: 630,
        alt: "Om Namah Shivaya — Shiva Mantra Japa Counter",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@radhanaamjapa",
    creator: "@radhanaamjapa",
    title: "Om Namah Shivaya Jap Counter",
    description: "Count your Om Namah Shivaya japa and track your daily sadhana for free.",
    images: ["/images/shivji.png"],
  },
};

const faqs = [
  {
    q: "What does 'Om Namah Shivaya' mean?",
    a: "Om Namah Shivaya means 'I bow to Lord Shiva'. The five syllables Na-Ma-Shi-Va-Ya represent the five elements (earth, water, fire, air, space) and the five acts of Shiva (creation, sustenance, dissolution, concealment, and grace).",
  },
  {
    q: "When is the best time to chant Om Namah Shivaya?",
    a: "Monday is traditionally Lord Shiva's day. The mantra is especially powerful during Pradosh Kaal (1.5 hours before sunset), Maha Shivaratri, and Shravan month. Morning chanting at Brahma Muhurta is highly recommended.",
  },
  {
    q: "How many times should I chant Om Namah Shivaya?",
    a: "Chanting 108 times (one mala) daily is the standard. Dedicated Shiva devotees may chant 5 malas (540 times) daily. On Maha Shivaratri, all-night chanting is considered extremely auspicious.",
  },
  {
    q: "Is Om Namah Shivaya suitable for beginners?",
    a: "Absolutely! Om Namah Shivaya is one of the simplest and most powerful mantras. It requires no initiation and can be chanted by anyone, anywhere, at any time with sincere devotion.",
  },
];

export default function OmNamahShivaya() {
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
                  { "@type": "ListItem", position: 3, name: "Om Namah Shivaya", item: "https://radhanaamjapa.com/mantra/om-namah-shivaya" },
                ],
              },
              {
                "@type": "Article",
                headline: "Om Namah Shivaya — Benefits of the Shiva Panchakshara Mantra",
                description: "Learn the benefits of the Shiva Panchakshara Mantra Om Namah Shivaya and track your japa with our free online counter.",
                url: "https://radhanaamjapa.com/mantra/om-namah-shivaya",
                inLanguage: "en",
                about: { "@type": "Thing", name: "Om Namah Shivaya Shiva Mantra" },
                publisher: { "@id": "https://radhanaamjapa.com/#organization" },
              },
              {
                "@type": "HowTo",
                name: "How to Chant Om Namah Shivaya",
                step: [
                  { "@type": "HowToStep", text: "Sit facing North or East, preferably near a Shiva lingam or image." },
                  { "@type": "HowToStep", text: "Take a few deep breaths to calm your mind." },
                  { "@type": "HowToStep", text: "Begin chanting 'Om Namah Shivaya' slowly and clearly, feeling each syllable resonate." },
                  { "@type": "HowToStep", text: "Tap this counter for each mantra repetition." },
                  { "@type": "HowToStep", text: "Complete 108 repetitions for one mala and press End Session to save your Japa Points." },
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
        title="Om Namah Shivaya"
        imageSrc="/images/shivji.png"
        altDescription="Lord Shiva"
        audioSrc="/audio/om-namah-shivaya.mp3"
      />
      {/* ===== MANTRA BENEFITS SECTION ===== */}
      <section className="w-full bg-[#FAE3A0] py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <div className="bg-gradient-to-b from-[#FFF8E7] to-[#FFF0D6] rounded-3xl border border-[#FDE68A] p-6 sm:p-12 shadow-sm">
              {/* Title */}
              <h2 className="text-xl sm:text-3xl font-bold text-[#4A1C00] text-center mb-3">
                Om Namah Shivaya Jap Benefits
              </h2>
              <p className="text-[#78350F] text-xs sm:text-sm text-center leading-relaxed mb-8">
                Chanting the Shiva Mantra (ॐ नमः शिवाय) is a powerful practice that honors Lord Shiva, the supreme consciousness, and represents the five elements of creation (earth, water, fire, air, and space).
              </p>
   
              {/* Divider */}
              <div className="w-full h-px bg-[#FDE68A] mb-8" />
   
              {/* Why do we chant it */}
              <h3 className="text-base sm:text-lg font-bold text-[#4A1C00] mb-3">
                Why do we chant it?
              </h3>
              <p className="text-[#78350F] text-xs sm:text-sm leading-relaxed mb-8">
                Devotees chant this mantra to dissolve the ego, purify the soul, and align themselves with deep inner peace and self-realization. Chanting &quot;Namah Shivaya&quot; establishes quietness in the mind, connecting it with cosmic silence.
              </p>
   
              {/* Divider */}
              <div className="w-full h-px bg-[#FDE68A] mb-8" />
   
              {/* Benefits */}
              <h3 className="text-base sm:text-lg font-bold text-[#4A1C00] mb-5">Benefits</h3>
              <ul className="space-y-3">
                {[
                  "Deeply calms the mind, eliminating stress, anger, and anxiety",
                  "Purifies the energetic body and dissolves past negative karmas",
                  "Harmonizes and balances the five natural elements inside the body",
                  "Enhances focus, intellectual clarity, and concentration power",
                  "Establishes a state of deep inner peace, stability, and joy",
                  "Acts as a protective spiritual shield against negative influences",
                  "Awakens higher consciousness and opens the channels of intuition",
                  "Brings spiritual growth, absolute mental freedom, and liberation",
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
        <FAQSection faqs={faqs} headingId="shiva-faq" />
      </div>
    </main>
  );
}
