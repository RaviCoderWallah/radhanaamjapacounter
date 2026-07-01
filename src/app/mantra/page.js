"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import PageHeader from "@/components/shared/PageHeader";
import { motion } from "framer-motion";

const mantras = [
  {
    id: 1,
    deity: "Radha Rani",
    name: "Radhe Radhe",
    description: "Chant the name of Radha Rani to invoke supreme devotion and pure love.",
    image: "/images/radha.jpg",
    href: "/",
    accent: "#F37420",
  },
  {
    id: 2,
    deity: "Lord Krishna",
    name: "Hare Krishna",
    description: "The Maha Mantra for peace, spiritual joy, and direct connection to Krishna.",
    image: "/images/krishna.jfif",
    href: "/mantra/hare-krishna",
    accent: "#F37420",
  },
  {
    id: 3,
    deity: "Lord Ram",
    name: "Jai Shri Ram",
    description: "Connect with righteousness, strength, and truth by chanting Ram Naam.",
    image: "/images/ram.jfif",
    href: "/mantra/jai-shri-ram",
    accent: "#F37420",
  },
  {
    id: 4,
    deity: "Lord Ganesha",
    name: "Om Gam Ganapataye Namah",
    description: "Invoke the remover of obstacles to bring success and auspicious beginnings.",
    image: "/images/ganesh.jpg",
    href: "/mantra/om-gam-ganapataye-namah",
    accent: "#F9BB4D",
  },
  {
    id: 5,
    deity: "Lord Hanuman",
    name: "Om Ham Hanumate Namah",
    description: "Gain supreme physical and spiritual strength, courage, and protection.",
    image: "/images/hanuman.jpg",
    href: "/mantra/om-ham-hanumate-namah",
    accent: "#F37420",
  },
  {
    id: 6,
    deity: "Lord Shiva",
    name: "Om Namah Shivaya",
    description: "Bow to Lord Shiva, the supreme being of cosmic consciousness.",
    image: "/images/shivji.png",
    href: "/mantra/om-namah-shivaya",
    accent: "#F9BB4D",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const MantraPage = () => {
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
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        role="list"
        aria-label="List of available mantras for japa chanting"
        className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {mantras.map((mantra) => (
          <motion.div
            key={mantra.id}
            variants={itemVariants}
            whileHover={{ y: -6, boxShadow: "0 12px 28px rgba(243,116,32,0.14)" }}
            role="listitem"
            className="mantra-card group rounded-2xl overflow-hidden transition-all duration-300 border border-[#FAD199] bg-[#fff8ee]"
          >
            {/* Image */}
            <div
              className="relative w-full overflow-hidden h-[200px]"
            >
              <Image
                src={mantra.image}
                alt={mantra.deity}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              {/* Gradient overlay */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#F37420]/55 via-transparent to-transparent opacity-90"
              />
              {/* Deity name on image */}
              <span
                className="absolute bottom-3 left-4 font-bold text-white text-sm tracking-wide"
                style={{ textShadow: "0 1px 6px rgba(0,0,0,0.4)" }}
              >
                {mantra.deity}
              </span>
            </div>
 
            {/* Content */}
            <div className="p-5 flex flex-col gap-3">
              <h2
                className="text-xl font-bold leading-snug text-[#F37420]"
              >
                {mantra.name}
              </h2>
              <p
                className="paragraph-text leading-relaxed font-medium text-xs sm:text-sm text-[#7a5c2e]"
              >
                {mantra.description}
              </p>
 
              {/* Button */}
              <Link
                href={mantra.href}
                aria-label={`Start chanting ${mantra.name}`}
                className="mt-1 inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 font-bold button-text transition-all duration-200 hover:scale-[1.01] active:scale-95 cursor-pointer text-white shadow-md"
                style={{
                  background:
                    "linear-gradient(135deg, #F37420 0%, #F9BB4D 100%)",
                  boxShadow: "0 4px 12px rgba(243,116,32,0.22)",
                  textDecoration: "none",
                }}
              >
                Start Chanting
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </main>
  );
};

export default MantraPage;
