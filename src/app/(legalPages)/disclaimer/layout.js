export const metadata = {
  title: "Disclaimer — Radha Naam Japa Counter",
  description:
    "Disclaimer for Radha Naam Japa Counter. Understand the limitations and nature of this devotional tool.",
  keywords: ["radha naam japa disclaimer", "japa app terms", "devotional app disclaimer", "spiritual app limitations"],
  alternates: { canonical: "https://radhanaamjapa.com/disclaimer" },
  openGraph: {
    title: "Disclaimer — Radha Naam Japa Counter",
    description: "Read the disclaimer for Radha Naam Japa Counter. Understand the nature and limitations of this devotional tool.",
    url: "https://radhanaamjapa.com/disclaimer",
    type: "website",
    siteName: "Radha Naam Japa Counter",
    images: [{ url: "/images/radha.jpg", width: 1200, height: 630, alt: "Disclaimer — Radha Naam Japa Counter" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@radhanaamjapa",
    title: "Disclaimer — Radha Naam Japa Counter",
    description: "Read the disclaimer for Radha Naam Japa Counter devotional app.",
    images: ["/images/radha.jpg"],
  },
};

export default function DisclaimerLayout({ children }) {
  return children;
}
