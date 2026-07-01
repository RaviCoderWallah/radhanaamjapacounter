export const metadata = {
  title: "About Us — Radha Naam Japa Counter",
  description:
    "Learn about Radha Naam Japa Counter — a sacred digital space for devotees to track their daily japa sadhana and deepen their Radha Krishna bhakti.",
  keywords: ["about radha naam japa", "japa app about", "bhakti app creators", "devotional counter app"],
  alternates: { canonical: "https://radhanaamjapa.com/about-us" },
  openGraph: {
    title: "About Us — Radha Naam Japa Counter",
    description:
      "Learn about Radha Naam Japa Counter — a sacred digital space for tracking japa sadhana and deepening Radha Krishna bhakti.",
    url: "https://radhanaamjapa.com/about-us",
    type: "website",
    siteName: "Radha Naam Japa Counter",
    images: [{ url: "/images/radha.jpg", width: 1200, height: 630, alt: "About Radha Naam Japa Counter" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@radhanaamjapa",
    title: "About Us — Radha Naam Japa Counter",
    description: "Learn about the free devotional japa tracking app built for bhakts.",
    images: ["/images/radha.jpg"],
  },
};

export default function AboutUsLayout({ children }) {
  return children;
}
