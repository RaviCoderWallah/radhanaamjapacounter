export const metadata = {
  title: "Contact Us — Radha Naam Japa Counter",
  description:
    "Get in touch with the Radha Naam Japa Counter team. We'd love to hear from you — feedback, suggestions, or devotional queries.",
  keywords: ["contact radha naam japa", "japa app support", "devotional app contact", "japa counter help"],
  alternates: { canonical: "https://radhanaamjapa.com/contact-us" },
  openGraph: {
    title: "Contact Us — Radha Naam Japa Counter",
    description: "Reach out to the Radha Naam Japa Counter team with feedback, suggestions, or devotional queries.",
    url: "https://radhanaamjapa.com/contact-us",
    type: "website",
    siteName: "Radha Naam Japa Counter",
    images: [{ url: "/images/radha.jpg", width: 1200, height: 630, alt: "Contact Radha Naam Japa Counter" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@radhanaamjapa",
    title: "Contact Us — Radha Naam Japa Counter",
    description: "Reach out to the Radha Naam Japa Counter team with your feedback or queries.",
    images: ["/images/radha.jpg"],
  },
};

export default function ContactUsLayout({ children }) {
  return children;
}
