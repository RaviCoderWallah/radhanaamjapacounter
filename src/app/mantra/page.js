import PageHeader from "@/components/shared/PageHeader";
import MantraGrid from "@/features/chanting-engine/components/MantraGrid";

const mantras = [
  { name: "Radhe Radhe", href: "/" },
  { name: "Hare Krishna", href: "/mantra/hare-krishna" },
  { name: "Jai Shri Ram", href: "/mantra/jai-shri-ram" },
  { name: "Om Gam Ganapataye Namah", href: "/mantra/om-gam-ganapataye-namah" },
  { name: "Om Ham Hanumate Namah", href: "/mantra/om-ham-hanumate-namah" },
  { name: "Om Namah Shivaya", href: "/mantra/om-namah-shivaya" },
];

export default function MantraPage() {
  return (
    <main className="flex-1 w-full px-4 py-10 md:py-16 bg-[#fffdf8]">
      {/* JSON-LD: BreadcrumbList + ItemList */}
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
                  { "@type": "ListItem", position: 2, name: "Mantras", item: "https://radhanaamjapa.com/mantra" },
                ],
              },
              {
                "@type": "ItemList",
                name: "Sacred Mantras for Japa Practice",
                description: "A curated list of Hindu mantras available for digital japa counting.",
                numberOfItems: mantras.length,
                itemListElement: mantras.map((m, i) => ({
                  "@type": "ListItem",
                  position: i + 1,
                  name: m.name,
                  url: `https://radhanaamjapa.com${m.href}`,
                })),
              },
            ],
          }),
        }}
      />
      {/* Header */}
      <PageHeader
        eyebrow="Sacred Mantras"
        heading="Choose Your Mantra"
        description="Select a sacred mantra below to begin your japa practice. Tap anywhere on the counter page to count your repetitions."
      />

      {/* Grid */}
      <MantraGrid />
    </main>
  );
}
