"use client";

import { motion } from "framer-motion";

const features = [
  {
    icon: "📊",
    title: "Weekly Progress",
    desc: "Visualize your chanting journey with beautiful weekly bar charts. See which days you chanted the most and stay consistent.",
  },
  {
    icon: "🏆",
    title: "Community Leaderboard",
    desc: "Compete with devotees worldwide. Climb the ranks, earn your place on the podium, and inspire others with your dedication.",
  },
  {
    icon: "🪔",
    title: "Personal Dashboard",
    desc: "Your own sadhana space — today's japa, lifetime count, total time spent chanting, all in one beautiful instant view.",
  },
  {
    icon: "📅",
    title: "Monthly Heatmap",
    desc: "Track every single day of the month with a color-coded heatmap. Never miss a day and build an unbreakable chanting habit.",
  },
  {
    icon: "🔥",
    title: "Streak Tracker",
    desc: "Build your daily chanting streak and protect it. See your current and longest streak — consistency is the true sadhana.",
  },
  {
    icon: "📿",
    title: "Multiple Mantras",
    desc: "Choose from sacred mantras — Radhe Radhe, Hare Krishna, Om Namah Shivaya and more. Each chant tracked separately with love.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="w-full bg-[#FFF8E7] py-16 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <p className="text-[#F37420] font-semibold text-sm uppercase tracking-widest mb-2">
            Everything You Need
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#4A1C00]">
            Features Built for Bhakts
          </h2>
          <div className="w-16 h-1 bg-[#F37420] rounded-full mx-auto mt-3" />
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map(({ icon, title, desc }) => (
            <motion.div
              key={title}
              variants={{
                hidden: { opacity: 0, y: 28 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: "easeOut" },
                },
              }}
              whileHover={{
                y: -6,
                boxShadow: "0 12px 28px rgba(243,116,32,0.15)",
              }}
              className="group bg-white rounded-2xl p-6 border border-[#FDE68A] hover:border-[#F37420] transition-all duration-300 cursor-pointer"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[#F37420] to-[#F9BB4D] rounded-2xl flex items-center justify-center mb-5 group-hover:-translate-y-1 transition-transform duration-300">
                <span className="text-2xl">{icon}</span>
              </div>
              <h3 className="text-lg font-bold text-[#4A1C00] mb-2">{title}</h3>
              <p className="text-[#78350F] text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
