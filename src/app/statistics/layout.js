export const metadata = {
  title: "Statistics Dashboard \u2014 Your Japa Progress & Insights",
  description:
    "View your personal japa sadhana statistics: daily streaks, weekly progress charts, monthly heatmap, session history, and Japa Points. Track your spiritual growth.",
  keywords: [
    "japa statistics",
    "japa progress dashboard",
    "chanting streak tracker",
    "japa points history",
    "mantra sadhana tracker",
    "weekly japa chart",
    "monthly japa heatmap",
  ],
  alternates: { canonical: "https://radhanaamjapa.com/statistics" },
  openGraph: {
    title: "Statistics Dashboard \u2014 Your Japa Progress & Insights",
    description:
      "Track your personal japa sadhana with weekly charts, monthly heatmaps, streak tracking, and Japa Points history.",
    url: "https://radhanaamjapa.com/statistics",
    type: "website",
    siteName: "Radha Naam Japa Counter",
    images: [
      {
        url: "/images/radha.jpg",
        width: 1200,
        height: 630,
        alt: "Radha Naam Japa Counter \u2014 Statistics Dashboard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@radhanaamjapa",
    creator: "@radhanaamjapa",
    title: "Japa Statistics Dashboard",
    description:
      "Track your japa sadhana with weekly charts, monthly heatmaps, and session history.",
    images: ["/images/radha.jpg"],
  },
};

export default function StatisticsLayout({ children }) {
  return (
    <>
      {/* JSON-LD: BreadcrumbList + WebPage */}
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
                  { "@type": "ListItem", position: 2, name: "Statistics", item: "https://radhanaamjapa.com/statistics" },
                ],
              },
              {
                "@type": "WebPage",
                name: "Japa Statistics Dashboard \u2014 Radha Naam Japa Counter",
                url: "https://radhanaamjapa.com/statistics",
                description: "Personal japa sadhana statistics dashboard with streak tracking, weekly charts, monthly heatmaps, and session history.",
                inLanguage: "en",
                isPartOf: { "@type": "WebSite", url: "https://radhanaamjapa.com" },
              },
            ],
          }),
        }}
      />
      {children}
    </>
  );
}
