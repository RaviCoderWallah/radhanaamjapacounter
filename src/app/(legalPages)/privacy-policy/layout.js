export const metadata = {
  title: "Privacy Policy — Radha Naam Japa Counter",
  description:
    "Read our Privacy Policy to understand how Radha Naam Japa Counter collects, uses, and protects your personal data.",
  keywords: ["radha naam japa privacy policy", "japa app data policy", "devotional app privacy", "firebase data storage"],
  alternates: { canonical: "https://radhanaamjapa.com/privacy-policy" },
  openGraph: {
    title: "Privacy Policy — Radha Naam Japa Counter",
    description: "Read our Privacy Policy to understand how Radha Naam Japa Counter collects, uses, and protects your personal data.",
    url: "https://radhanaamjapa.com/privacy-policy",
    type: "website",
    siteName: "Radha Naam Japa Counter",
    images: [{ url: "/images/radha.jpg", width: 1200, height: 630, alt: "Privacy Policy — Radha Naam Japa Counter" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@radhanaamjapa",
    title: "Privacy Policy — Radha Naam Japa Counter",
    description: "Read our Privacy Policy for Radha Naam Japa Counter devotional app.",
    images: ["/images/radha.jpg"],
  },
};

export default function PrivacyPolicyLayout({ children }) {
  return children;
}
