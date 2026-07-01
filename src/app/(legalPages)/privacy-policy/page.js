"use client";

import Link from "next/link";
import FAQSection from "@/components/FAQSection";
import PageHeader from "@/components/shared/PageHeader";
import AnimatedSection from "@/components/shared/AnimatedSection";

const LAST_UPDATED = "July 1, 2026";

const sections = [
  {
    title: "1. Information We Collect",
    subsections: [
      {
        subtitle: "a) Information You Provide",
        content:
          "When you sign in with Google, we receive your Google account name, email address, and profile picture. This information is used to create your leaderboard profile.",
      },
      {
        subtitle: "b) Information Automatically Collected",
        content:
          "We collect japa count, streak data, and usage patterns to power the leaderboard and statistics features. This data is stored locally on your device (localStorage) and, if signed in, synced to our Firebase database.",
      },
      {
        subtitle: "c) Device Information",
        content:
          "We may collect basic device information such as browser type and screen size solely to improve app performance and user experience.",
      },
    ],
  },
  {
    title: "2. How We Use Your Information",
    points: [
      "To display your name and japa count on the community leaderboard (only when signed in)",
      "To sync your statistics across sessions",
      "To improve the App based on usage patterns",
      "To respond to your inquiries or support requests",
      "We do NOT sell your personal information to any third party",
    ],
  },
  {
    title: "3. Firebase & Google Services",
    content:
      "We use Firebase (by Google) for authentication and database services. Google's privacy policy governs how they process authentication data. You can review Google's Privacy Policy at https://policies.google.com/privacy.",
  },
  {
    title: "4. Data Storage & Security",
    content:
      "Your japa data is stored locally in your browser's localStorage. If you sign in, data is also stored in our secure Firebase Firestore database with industry-standard security rules. We do not store payment information as the App is free.",
  },
  {
    title: "5. Your Rights",
    points: [
      "Right to access: You can view all your data in the Statistics page",
      "Right to deletion: Contact us to delete your account and all associated data",
      "Right to opt-out: You can use the App without signing in (no data is shared with the leaderboard)",
      "Right to correction: Contact us if you need to update your information",
    ],
  },
  {
    title: "6. Cookies & Local Storage",
    content:
      "We use localStorage (not cookies) to save your japa data and preferences locally. This is essential for the App's core functionality. We do not use tracking cookies or advertising cookies.",
  },
  {
    title: "7. Children's Privacy",
    content:
      "Radha Naam Japa Counter is suitable for all ages. We do not knowingly collect personal information from children under 13 without parental consent. If you believe we have inadvertently collected such data, please contact us.",
  },
  {
    title: "8. Changes to This Policy",
    content:
      "We may update this Privacy Policy periodically. The updated version will always be available on this page with a revised date. Your continued use of the App after changes constitutes acceptance.",
  },
  {
    title: "9. Contact Us",
    content:
      "For any privacy-related questions, requests to delete your data, or concerns, please contact us at support@radhanaamjapa.com.",
  },
];

const faqs = [
  {
    q: "Is my japa count visible to everyone?",
    a: "Only if you sign in. Signed-in users appear on the leaderboard with their name and count. Unsigned users are completely private.",
  },
  {
    q: "Does the app track my location?",
    a: "No. We do not collect or use your location data.",
  },
  {
    q: "Can I delete my account?",
    a: "Yes. Email us at support@radhanaamjapa.com and we will delete your account and all associated data within 7 days.",
  },
  {
    q: "Do you share data with third parties?",
    a: "We never sell your data. We use Firebase (Google) for storage — their privacy policy applies to that data.",
  },
];

export default function PrivacyPolicyPage() {
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
                  { "@type": "ListItem", position: 2, name: "Privacy Policy", item: "https://radhanaamjapa.com/privacy-policy" },
                ],
              },
              {
                "@type": "WebPage",
                name: "Privacy Policy — Radha Naam Japa Counter",
                url: "https://radhanaamjapa.com/privacy-policy",
                description: "Privacy Policy for Radha Naam Japa Counter. How we collect, use, and protect your data.",
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
          <span className="text-amber-900 font-semibold">Privacy Policy</span>
        </nav>

        {/* Header */}
        <PageHeader
          eyebrow="Legal"
          heading="Privacy Policy"
          description={`Last updated: ${LAST_UPDATED}`}
        />

        {/* Intro */}
        <AnimatedSection delay={0.05}>
          <div className="bg-gradient-to-br from-[#FFF8E7] to-[#FFFDF9] border border-[#FDE68A] rounded-2xl p-6 mb-8 hover:shadow-sm transition-all duration-300">
            <p className="text-[#78350F] leading-relaxed">
              At Radha Naam Japa Counter, we respect your privacy. This policy explains what data
              we collect, how we use it, and your rights over your information. We are committed
              to transparency and handling your data with care.
            </p>
          </div>
        </AnimatedSection>

        {/* Sections */}
        <div className="space-y-5">
          {sections.map((section, i) => (
            <AnimatedSection key={i} delay={0.05 * (i + 1)}>
              <div className="bg-[#FFFDF9] border border-[#FDE68A] rounded-2xl p-6 hover:shadow-md transition-all duration-300">
                <h2 className="text-base font-bold text-[#4A1C00] mb-4">{section.title}</h2>
                {section.subsections && (
                  <div className="space-y-4">
                    {section.subsections.map((sub, j) => (
                      <div key={j}>
                        <h3 className="font-semibold text-[#4A1C00] text-sm mb-1">{sub.subtitle}</h3>
                        <p className="text-[#78350F] text-sm leading-relaxed">{sub.content}</p>
                      </div>
                    ))}
                  </div>
                )}
                {section.points && (
                  <ul className="space-y-2">
                    {section.points.map((point, j) => (
                      <li key={j} className="flex items-start gap-2 text-[#78350F] text-sm leading-relaxed">
                        <span className="text-[#F37420] font-bold mt-0.5">·</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {section.content && (
                  <p className="text-[#78350F] text-sm leading-relaxed">{section.content}</p>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* FAQ Section */}
        <FAQSection faqs={faqs} headingId="privacy-faq" />
      </div>
    </main>
  );
}
