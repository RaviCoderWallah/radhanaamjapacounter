import Link from "next/link";
import FAQSection from "@/components/FAQSection";
import PageHeader from "@/components/shared/PageHeader";
import AnimatedSection from "@/components/shared/AnimatedSection";
import ContactForm from "@/components/shared/ContactForm";

export const metadata = {
  title: "Contact Us — Radha Naam Japa Counter Support",
  description:
    "Have questions, suggestions, or feedback about the Radha Naam Japa Counter? Contact us here. We would love to hear from you.",
  keywords: ["contact japa counter", "support", "feedback", "radha naam support"],
  alternates: { canonical: "https://radhanaamjapa.com/contact-us" },
};

const pageFAQs = [
  {
    q: "How quickly will I get a reply?",
    a: "We typically respond within 24 hours on weekdays. During spiritual observances (Ekadashi, festivals), it may take slightly longer.",
  },
  {
    q: "Can I suggest a new mantra to be added?",
    a: "Absolutely! We welcome suggestions for new mantras and features. Send us an email and we'll consider it for the next update.",
  },
  {
    q: "How can I report a bug or issue?",
    a: "Please use the contact form above with the subject 'Bug Report'. Include your browser name and what you were doing when the issue occurred.",
  },
  {
    q: "Do you offer collaborations or partnerships?",
    a: "For spiritual organizations, temples, or bhakti communities who want to collaborate, please reach out to us via email.",
  },
];

export default function ContactUsPage() {
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
                  { "@type": "ListItem", position: 2, name: "Contact Us", item: "https://radhanaamjapa.com/contact-us" },
                ],
              },
              {
                "@type": "WebPage",
                name: "Contact Radha Naam Japa Counter Support",
                url: "https://radhanaamjapa.com/contact-us",
                description: "Get in touch with the support and developer team behind Radha Naam Japa Counter.",
                inLanguage: "en",
                isPartOf: { "@type": "WebSite", url: "https://radhanaamjapa.com" },
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
          <span className="text-amber-900 font-semibold">Contact Us</span>
        </nav>

        {/* Header */}
        <PageHeader
          eyebrow="We'd Love to Hear from You"
          heading="Contact Us"
        />

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          <AnimatedSection delay={0.05}>
            <div className="bg-[#FFFDF9] border border-[#FDE68A] rounded-2xl p-6 text-center hover:border-[#F37420] hover:shadow-md transition-all duration-300 h-full">
              <div className="w-12 h-12 bg-gradient-to-br from-[#F37420] to-[#F9BB4D] rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✉️</span>
              </div>
              <h2 className="font-bold text-[#4A1C00] mb-1">Email Us</h2>
              <p className="text-[#78350F] text-sm font-semibold select-all">support@radhanaamjapa.com</p>
              <p className="text-[#78350F] text-xs mt-1">
                We reply within 24 hours
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="bg-[#FFFDF9] border border-[#FDE68A] rounded-2xl p-6 text-center hover:border-[#F37420] hover:shadow-md transition-all duration-300 h-full">
              <div className="w-12 h-12 bg-gradient-to-br from-[#F37420] to-[#F9BB4D] rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌸</span>
              </div>
              <h2 className="font-bold text-[#4A1C00] mb-1">Community</h2>
              <p className="text-[#78350F] text-sm">Join our devotee community</p>
              <p className="text-[#78350F] text-xs mt-1">
                Share your japa journey
              </p>
            </div>
          </AnimatedSection>
        </div>

        {/* Contact Form */}
        <AnimatedSection delay={0.15}>
          <div className="bg-[#FFFDF9] border border-[#FDE68A] rounded-2xl p-6 sm:p-8 hover:shadow-md transition-all duration-300">
            <h2 className="text-xl font-bold text-[#4A1C00] mb-6">
              Send a Message
            </h2>
            <ContactForm />
          </div>
        </AnimatedSection>

        {/* FAQ Section */}
        <FAQSection faqs={pageFAQs} headingId="contact-faq" />
      </div>
    </main>
  );
}
