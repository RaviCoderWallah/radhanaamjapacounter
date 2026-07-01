export const metadata = {
  title: "Choose Your Mantra — Japa Counter for Radhe Radhe, Hare Krishna & More",
  description:
    "Select from sacred Hindu mantras — Radhe Radhe, Hare Krishna, Om Namah Shivaya, Jai Shri Ram, Om Gam Ganapataye Namah, Om Ham Hanumate Namah. Start your japa sadhana online.",
  keywords: [
    "mantra japa counter",
    "radhe radhe counter",
    "hare krishna counter",
    "om namah shivaya counter",
    "jai shri ram counter",
    "ganesh mantra counter",
    "hanuman mantra counter",
    "digital mala counter",
    "online japa tracker",
  ],
  alternates: { canonical: "https://radhanaamjapa.com/mantra" },
  openGraph: {
    title: "Choose Your Mantra — Japa Counter for Radhe Radhe, Hare Krishna & More",
    description:
      "Select from sacred Hindu mantras and start your digital japa practice with our free online counter.",
    url: "https://radhanaamjapa.com/mantra",
    type: "website",
    siteName: "Radha Naam Japa Counter",
    images: [
      {
        url: "/images/krishna.jfif",
        width: 1200,
        height: 630,
        alt: "Choose Your Mantra for Japa Practice",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@radhanaamjapa",
    creator: "@radhanaamjapa",
    title: "Choose Your Mantra — Japa Counter",
    description: "Select from sacred Hindu mantras and start your digital japa practice for free.",
    images: ["/images/krishna.jfif"],
  },
};

export default function MantraLayout({ children }) {
  return children;
}
