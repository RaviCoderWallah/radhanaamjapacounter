import { HeroSection } from "@/features/chanting-engine";
import FAQSection from "@/components/FAQSection";
import AnimatedSection from "@/components/shared/AnimatedSection";

export const metadata = {
  title: "Om Gam Ganapataye Namah Jap Counter — Ganesha Mantra Tracker",
  description:
    "Count your Om Gam Ganapataye Namah japa online. Learn the benefits of Ganesha mantra chanting and track your daily sadhana with our free digital mala counter.",
  keywords: [
    "om gam ganapataye namah counter",
    "ganesha mantra japa",
    "ganesh mantra counter",
    "obstacle remover mantra",
    "ganesha japa tracker",
    "digital mala ganesha",
    "ganesha mantra benefits",
  ],
  alternates: { canonical: "https://radhanaamjapa.com/mantra/om-gam-ganapataye-namah" },
  openGraph: {
    title: "Om Gam Ganapataye Namah Jap Counter — Ganesha Mantra Tracker",
    description:
      "Count your Om Gam Ganapataye Namah japa and remove obstacles from your path. Free online Ganesha mantra counter.",
    url: "https://radhanaamjapa.com/mantra/om-gam-ganapataye-namah",
    type: "website",
    siteName: "Radha Naam Japa Counter",
    images: [
      {
        url: "/images/ganesh.jpg",
        width: 1200,
        height: 630,
        alt: "Om Gam Ganapataye Namah — Ganesha Mantra Japa Counter",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@radhanaamjapa",
    creator: "@radhanaamjapa",
    title: "Om Gam Ganapataye Namah Jap Counter",
    description: "Count your Ganesha mantra japa and track your daily sadhana for free.",
    images: ["/images/ganesh.jpg"],
  },
};

const faqs = [
  {
    q: "What does 'Om Gam Ganapataye Namah' mean?",
    a: "Om Gam Ganapataye Namah means 'I bow to Lord Ganesha'. 'Gam' is the seed syllable (beeja mantra) of Ganesha. Chanting this mantra invokes Ganesha's energy of wisdom and obstacle removal.",
  },
  {
    q: "When should I chant the Ganesha mantra?",
    a: "The Ganesha mantra is best chanted at the beginning of any new task, venture, or on Ganesh Chaturthi. It is also ideal for morning prayers to start the day with positive energy.",
  },
  {
    q: "How many times should I chant Om Gam Ganapataye Namah?",
    a: "Traditional practice recommends 108 repetitions (one mala) per day. For special occasions or when starting something important, 1008 repetitions are considered highly auspicious.",
  },
  {
    q: "Can this mantra remove obstacles in my life?",
    a: "Devotees believe that sincere, regular chanting of this mantra helps remove both internal (mental) and external (situational) obstacles, guided by Lord Ganesha's divine grace.",
  },
];

export default function OmGamGanapatayeNamah() {
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
                  { "@type": "ListItem", position: 3, name: "Om Gam Ganapataye Namah", item: "https://radhanaamjapa.com/mantra/om-gam-ganapataye-namah" },
                ],
              },
              {
                "@type": "Article",
                headline: "Om Gam Ganapataye Namah — Benefits of Ganesha Mantra",
                description: "Learn the benefits of the Ganesha mantra Om Gam Ganapataye Namah and count your japa with our free online counter.",
                url: "https://radhanaamjapa.com/mantra/om-gam-ganapataye-namah",
                inLanguage: "en",
                about: { "@type": "Thing", name: "Om Gam Ganapataye Namah Ganesha Mantra" },
                publisher: { "@id": "https://radhanaamjapa.com/#organization" },
              },
              {
                "@type": "HowTo",
                name: "How to Chant Om Gam Ganapataye Namah",
                step: [
                  { "@type": "HowToStep", text: "Sit facing East or North, in a clean and peaceful space." },
                  { "@type": "HowToStep", text: "Close your eyes and visualize Lord Ganesha's divine form." },
                  { "@type": "HowToStep", text: "Begin chanting 'Om Gam Ganapataye Namah' clearly and slowly." },
                  { "@type": "HowToStep", text: "Tap the counter for each repetition to track your japa." },
                  { "@type": "HowToStep", text: "Complete 108 repetitions for one mala. Save your session to earn points." },
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
        title="Om Gam Ganapataye Namah"
        imageSrc="/images/ganesh.jpg"
        altDescription="Lord Ganesha"
        audioSrc="/audio/om-gam-ganapataye-namah.mp3"
      />
      {/* ===== MANTRA BENEFITS SECTION ===== */}
      <section className="w-full bg-[#FAE3A0] py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <div className="bg-gradient-to-b from-[#FFF8E7] to-[#FFF0D6] rounded-3xl border border-[#FDE68A] p-6 sm:p-12 shadow-sm">
              {/* Title */}
              <h2 className="text-xl sm:text-3xl font-bold text-[#4A1C00] text-center mb-3">
                Om Gam Ganapataye Namah Jap Benefits
              </h2>
              <p className="text-[#78350F] text-xs sm:text-sm text-center leading-relaxed mb-8">
                Chanting the Ganesha Mantra (ॐ गं गणपतये नमः) invokes the energy of Lord Ganesha, the remover of obstacles and lord of auspicious beginnings, intellect, and wisdom.
              </p>
   
              {/* Divider */}
              <div className="w-full h-px bg-[#FDE68A] mb-8" />
   
              {/* Why do we chant it */}
              <h3 className="text-base sm:text-lg font-bold text-[#4A1C00] mb-3">
                Why do we chant it?
              </h3>
              <p className="text-[#78350F] text-xs sm:text-sm leading-relaxed mb-8">
                Devotees chant this mantra before starting any new venture, project, or journey to seek divine protection and remove potential hindrances. Lord Ganesha represents intellectual sharpness, grounding energy, and the removal of doubts.
              </p>
   
              {/* Divider */}
              <div className="w-full h-px bg-[#FDE68A] mb-8" />
   
              {/* Benefits */}
              <h3 className="text-base sm:text-lg font-bold text-[#4A1C00] mb-5">Benefits</h3>
              <ul className="space-y-3">
                {[
                  "Dissolves internal and external obstacles on your life path",
                  "Grants sharp intellect, mental clarity, and deep wisdom",
                  "Invokes success, abundance, and auspiciousness in new endeavors",
                  "Calms the nervous system, bringing mental peace and stability",
                  "Clears negative energy from your home and chanting space",
                  "Helps align and balance the Root Chakra (Muladhara) for grounding",
                  "Builds confidence, removing anxiety and hesitation",
                  "Deepens focus, willpower, and general spiritual alignment",
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
        <FAQSection faqs={faqs} headingId="ganesha-faq" />
      </div>
    </main>
  );
}
