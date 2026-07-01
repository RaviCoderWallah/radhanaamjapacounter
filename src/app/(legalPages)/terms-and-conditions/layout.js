export const metadata = {
  title: "Terms and Conditions — Radha Naam Japa Counter",
  description:
    "Read the Terms and Conditions for using Radha Naam Japa Counter. By using our platform, you agree to these terms.",
  keywords: ["radha naam japa terms", "japa app terms of service", "devotional app usage terms", "japa counter rules"],
  alternates: { canonical: "https://radhanaamjapa.com/terms-and-conditions" },
  openGraph: {
    title: "Terms and Conditions — Radha Naam Japa Counter",
    description: "Read the Terms and Conditions for using Radha Naam Japa Counter. By using our platform, you agree to these terms.",
    url: "https://radhanaamjapa.com/terms-and-conditions",
    type: "website",
    siteName: "Radha Naam Japa Counter",
    images: [{ url: "/images/radha.jpg", width: 1200, height: 630, alt: "Terms and Conditions — Radha Naam Japa Counter" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@radhanaamjapa",
    title: "Terms and Conditions — Radha Naam Japa Counter",
    description: "Read the Terms and Conditions for using the Radha Naam Japa Counter devotional app.",
    images: ["/images/radha.jpg"],
  },
};

export default function TermsAndConditionsLayout({ children }) {
  return children;
}
