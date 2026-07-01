"use client";

import Link from "next/link";
import FAQSection from "@/components/FAQSection";
import PageHeader from "@/components/shared/PageHeader";
import AnimatedSection from "@/components/shared/AnimatedSection";

const LAST_UPDATED = "July 1, 2026";

const sections = [
  {
    title: "1. Acceptance of Terms",
    content:
      "By accessing and using Radha Naam Japa Counter ('the App'), you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these terms, please do not use the App.",
  },
  {
    title: "2. Description of Service",
    content:
      "Radha Naam Japa Counter is a free digital devotional tool that allows users to track their daily japa (mantra chanting) practice. The App provides a counter, streak tracking, statistics, leaderboard, and related devotional features.",
  },
  {
    title: "3. User Accounts",
    content:
      "You may sign in using your Google account to access the community leaderboard. You are responsible for maintaining the confidentiality of your account. You agree to use the leaderboard fairly and not artificially inflate your japa count using bots, auto-clickers, or other automated tools.",
  },
  {
    title: "4. Japa Points & Leaderboard",
    content:
      "The Japa Points System is designed to reward genuine, consistent chanting. Users found cheating (using bots, auto-tappers, or other fraudulent methods) will be disqualified from the leaderboard and may have their accounts removed. Points are calculated based on mala count, session time, streak, and tap authenticity.",
  },
  {
    title: "5. Prohibited Conduct",
    content: [
      "Using automated tools or bots to inflate japa counts",
      "Impersonating other users",
      "Attempting to reverse-engineer or hack the App",
      "Using the App for commercial purposes without our permission",
      "Posting offensive or inappropriate content",
    ],
  },
  {
    title: "6. Intellectual Property",
    content:
      "All content, design, and code of the App are the intellectual property of Radha Naam Japa Counter. You may not reproduce, distribute, or create derivative works without express written permission.",
  },
  {
    title: "7. Disclaimers",
    content:
      "The App is provided 'as is' without warranties of any kind. We do not guarantee uninterrupted access to the App. Spiritual benefits from chanting are personal and we make no claims about them.",
  },
  {
    title: "8. Limitation of Liability",
    content:
      "Radha Naam Japa Counter shall not be liable for any indirect, incidental, or consequential damages arising from your use of the App, including loss of data or inability to access the App.",
  },
  {
    title: "9. Changes to Terms",
    content:
      "We reserve the right to update these Terms at any time. Changes will be posted on this page with an updated date. Continued use of the App after changes constitutes acceptance of the new terms.",
  },
  {
    title: "10. Governing Law",
    content:
      "These Terms are governed by the laws of India. Any disputes shall be resolved in the courts of India.",
  },
  {
    title: "11. Contact",
    content:
      "For questions about these Terms, please contact us at support@radhanaamjapa.com.",
  },
];

const faqs = [
  {
    q: "Can I use this app for free?",
    a: "Yes, the app is completely free. There are no subscriptions or hidden charges.",
  },
  {
    q: "Is it against the terms to use the app on multiple devices?",
    a: "No, you can use the app on multiple devices. However, your leaderboard count is linked to your Google account.",
  },
  {
    q: "What happens if I violate the terms?",
    a: "Users who violate terms — especially cheating on the leaderboard — will be removed and their data may be deleted.",
  },
  {
    q: "How are disputes handled?",
    a: "Any disputes will be handled as per Indian law. We encourage resolution through direct communication first.",
  },
];

export default function TermsAndConditionsPage() {
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
                  { "@type": "ListItem", position: 2, name: "Terms & Conditions", item: "https://radhanaamjapa.com/terms-and-conditions" },
                ],
              },
              {
                "@type": "WebPage",
                name: "Terms and Conditions — Radha Naam Japa Counter",
                url: "https://radhanaamjapa.com/terms-and-conditions",
                description: "Terms and Conditions for using Radha Naam Japa Counter.",
                inLanguage: "en",
                isPartOf: { "@type": "WebSite", url: "https://radhanaamjapa.com" },
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
      <div className="max-w-3xl mx-auto">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-amber-700">
          <Link href="/" className="hover:text-amber-900 transition-colors">Home</Link>
          <span aria-hidden="true">/</span>
          <span className="text-amber-900 font-semibold">Terms & Conditions</span>
        </nav>

        {/* Header */}
        <PageHeader
          eyebrow="Legal"
          heading="Terms and Conditions"
          description={`Last updated: ${LAST_UPDATED}`}
        />

        {/* Introduction */}
        <AnimatedSection delay={0.05}>
          <div className="bg-gradient-to-br from-[#FFF8E7] to-[#FFFDF9] border border-[#FDE68A] rounded-2xl p-6 mb-8 hover:shadow-sm transition-all duration-300">
            <p className="text-[#78350F] leading-relaxed">
              Please read these Terms and Conditions carefully before using the Radha Naam
              Japa Counter application. By accessing or using our service, you agree to be
              bound by these terms.
            </p>
          </div>
        </AnimatedSection>

        {/* Sections */}
        <div className="space-y-5">
          {sections.map((section, i) => (
            <AnimatedSection key={i} delay={0.05 * (i + 1)}>
              <div className="bg-[#FFFDF9] border border-[#FDE68A] rounded-2xl p-6 hover:shadow-md transition-all duration-300">
                <h2 className="text-base font-bold text-[#4A1C00] mb-3">{section.title}</h2>
                {Array.isArray(section.content) ? (
                  <ul className="space-y-2">
                    {section.content.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-[#78350F] text-sm leading-relaxed">
                        <span className="text-[#F37420] font-bold mt-0.5">·</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-[#78350F] text-sm leading-relaxed">{section.content}</p>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* FAQ Section */}
        <FAQSection faqs={faqs} headingId="terms-faq" />
      </div>
    </main>
  );
}
