"use client";

import Link from "next/link";
import FAQSection from "@/components/FAQSection";
import PageHeader from "@/components/shared/PageHeader";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { motion } from "framer-motion";

const pageFAQs = [
  {
    q: "Is Radha Naam Japa Counter free to use?",
    a: "Yes, completely free. No subscription, no hidden charges.",
  },
  {
    q: "Who created this app?",
    a: "This app was created by a devotee of Radha Rani as a seva (service) to the bhakti community.",
  },
  {
    q: "Is my chanting data private?",
    a: "Your japa data is stored locally on your device. If you sign in, your lifetime japa count is shared on the leaderboard (only your name and count are visible).",
  },
  {
    q: "Can I use this app offline?",
    a: "Yes! The japa counter works without internet. Leaderboard requires an internet connection.",
  },
];

export default function AboutUsPage() {
  return (
    <main className="flex-1 w-full px-4 py-12 md:py-20 bg-[#fffdf8]">
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
                  { "@type": "ListItem", position: 2, name: "About Us", item: "https://radhanaamjapa.com/about-us" },
                ],
              },
              {
                "@type": "WebPage",
                name: "About Radha Naam Japa Counter",
                url: "https://radhanaamjapa.com/about-us",
                description: "Learn about Radha Naam Japa Counter — a free devotional platform for tracking japa sadhana.",
                inLanguage: "en",
                isPartOf: { "@type": "WebSite", url: "https://radhanaamjapa.com" },
                about: { "@id": "https://radhanaamjapa.com/#organization" },
              },
              {
                "@type": "FAQPage",
                mainEntity: pageFAQs.map((f) => ({
                  "@type": "Question",
                  name: f.q,
                  acceptedAnswer: { "@type": "Answer", text: f.a },
                })),
              },
            ],
          }),
        }}
      />
      <div className="max-w-3xl mx-auto">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-amber-700">
          <Link href="/" className="hover:text-amber-900 transition-colors">Home</Link>
          <span aria-hidden="true">/</span>
          <span className="text-amber-900 font-semibold">About Us</span>
        </nav>

        {/* Header */}
        <PageHeader
          eyebrow="Our Story"
          heading="About Radha Naam Japa"
        />

        {/* Content */}
        <div className="prose prose-amber max-w-none space-y-8">
          <AnimatedSection delay={0.05}>
            <div className="bg-[#FFFDF9] border border-[#FDE68A] rounded-2xl p-6 sm:p-8 hover:shadow-md transition-all duration-300">
              <h2 className="text-xl font-bold text-[#4A1C00] mb-3">🙏 Who We Are</h2>
              <p className="text-[#78350F] leading-relaxed">
                Radha Naam Japa Counter is a free, devotional web application created for
                bhakts who want to track their daily japa sadhana. Whether you chant
                <em> Radhe Radhe</em>, <em>Hare Krishna</em>, <em>Om Namah Shivaya</em>, or any
                other sacred mantra — this platform is your digital mala.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="bg-[#FFFDF9] border border-[#FDE68A] rounded-2xl p-6 sm:p-8 hover:shadow-md transition-all duration-300">
              <h2 className="text-xl font-bold text-[#4A1C00] mb-3">🌸 Our Mission</h2>
              <p className="text-[#78350F] leading-relaxed">
                Our mission is simple: to help devotees stay consistent in their spiritual
                practice. In the age of distractions, we believe technology can be used as
                a tool for devotion — not distraction. We built this app as an offering
                at the lotus feet of Radha Rani and all divine beings.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div className="bg-[#FFFDF9] border border-[#FDE68A] rounded-2xl p-6 sm:p-8 hover:shadow-md transition-all duration-300">
              <h2 className="text-xl font-bold text-[#4A1C00] mb-3">📿 What We Offer</h2>
              <ul className="space-y-2.5 text-[#78350F]">
                {[
                  "Digital Japa Mala — tap to count your chants",
                  "Streak tracking to build a daily sadhana habit",
                  "Weekly and monthly progress charts",
                  "Community Leaderboard to inspire and compete with devotees",
                  "Multiple mantra support (Radhe Radhe, Hare Krishna, Om Namah Shivaya & more)",
                  "Japa Points System that rewards genuine, consistent chanting",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#F37420] font-bold mt-0.5">·</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="bg-[#FFFDF9] border border-[#FDE68A] rounded-2xl p-6 sm:p-8 hover:shadow-md transition-all duration-300">
              <h2 className="text-xl font-bold text-[#4A1C00] mb-3">🔥 The Japa Challenge</h2>
              <p className="text-[#78350F] leading-relaxed">
                We host the <strong>Radha Jap Streak Challenge</strong> — a monthly
                community event where devotees track their japa count and compete for the
                top spots on the leaderboard. Top participants are recognized and
                celebrated. Every chant counts!
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.25}>
            <div className="bg-[#FFFDF9] border border-[#FDE68A] rounded-2xl p-6 sm:p-8 hover:shadow-md transition-all duration-300">
              <h2 className="text-xl font-bold text-[#4A1C00] mb-3">💛 Built with Bhakti</h2>
              <p className="text-[#78350F] leading-relaxed">
                This app is made with love and devotion for the Radha Bhakt community.
                It is completely free to use. We do not sell your data or show intrusive ads.
                If you want to support our work, please share this app with fellow devotees.
              </p>
              <p className="text-[#F37420] font-bold mt-3">Jai Shri Radhe! 🌸</p>
            </div>
          </AnimatedSection>
        </div>

        {/* FAQ Section */}
        <FAQSection faqs={pageFAQs} headingId="about-faq" />
      </div>
    </main>
  );
}
