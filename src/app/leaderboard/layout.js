export const metadata = {
  title: "Community Leaderboard \u2014 Top Devotees by Japa Count",
  description:
    "See the live community leaderboard of Radha Naam Japa Counter. Discover top devotees ranked by lifetime japa count, streaks, and Japa Points. Sign in to claim your spot.",
  keywords: [
    "japa leaderboard",
    "devotee rankings",
    "japa points ranking",
    "top chanters",
    "radhe radhe leaderboard",
    "hare krishna community ranking",
    "bhakti leaderboard",
  ],
  alternates: { canonical: "https://radhanaamjapa.com/leaderboard" },
  openGraph: {
    title: "Community Leaderboard \u2014 Top Devotees by Japa Count",
    description:
      "Live leaderboard of devotees ranked by lifetime japa count. Sign in to appear and compete with thousands of bhakts worldwide.",
    url: "https://radhanaamjapa.com/leaderboard",
    type: "website",
    siteName: "Radha Naam Japa Counter",
    images: [
      {
        url: "/images/radha.jpg",
        width: 1200,
        height: 630,
        alt: "Radha Naam Japa Counter Community Leaderboard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@radhanaamjapa",
    creator: "@radhanaamjapa",
    title: "Community Leaderboard \u2014 Top Devotees",
    description:
      "Live japa leaderboard. Sign in to appear and compete with thousands of devotees worldwide.",
    images: ["/images/radha.jpg"],
  },
};

export default function LeaderboardLayout({ children }) {
  return (
    <>
      {/* JSON-LD: BreadcrumbList */}
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
                  { "@type": "ListItem", position: 2, name: "Leaderboard", item: "https://radhanaamjapa.com/leaderboard" },
                ],
              },
              {
                "@type": "WebPage",
                name: "Community Leaderboard \u2014 Radha Naam Japa Counter",
                url: "https://radhanaamjapa.com/leaderboard",
                description: "Live community leaderboard of top devotees ranked by lifetime japa count and Japa Points.",
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
