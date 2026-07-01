import { BiLogoPlayStore } from "react-icons/bi";
import Image from "next/image";
import { motion } from "framer-motion";

export default function DownloadAppCTA() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative max-w-5xl mx-auto my-20 overflow-hidden rounded-[28px] border border-white/40 bg-[#FF7A1A] p-10 sm:p-14 lg:p-16"
    >
      {/* Decorative background glow */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#FF7A1A] via-[#F37420] to-[#e05e0a] opacity-80" />

      {/* Images on the right side */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        className="pointer-events-none absolute inset-y-0 right-0 hidden sm:flex items-center justify-end pr-6 gap-4"
      >
        {/* image-4 — slightly smaller, angled back */}
        <div className="relative w-32 h-44 lg:w-36 lg:h-52 rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 rotate-3 -translate-y-4 opacity-90">
          <Image
            src="/images/image-4.jpg"
            alt="Devotee chanting japa"
            fill
            className="object-cover"
            sizes="144px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#F37420]/60 to-transparent" />
        </div>

        {/* image-1 — slightly larger, front */}
        <div className="relative w-36 h-52 lg:w-44 lg:h-60 rounded-2xl overflow-hidden shadow-2xl border-2 border-white/30 -rotate-2 translate-y-2">
          <Image
            src="/images/image-1.jpg"
            alt="Radha Krishna devotion"
            fill
            className="object-cover"
            sizes="176px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#F37420]/40 to-transparent" />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        className="relative z-10 max-w-md"
      >
        <p className="text-amber-100 font-semibold text-sm uppercase tracking-widest mb-3">
          📿 Japa on the go
        </p>
        <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl leading-tight">
          Download <br className="hidden sm:block" />Mobile App
        </h2>

        <p className="mt-4 max-w-sm text-base text-white/90 sm:text-lg leading-relaxed">
          Chant Radhe Radhe anywhere, anytime. Track your japa, maintain
          your streak, and climb the leaderboard — all in your pocket.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <motion.button
            type="button"
            aria-label="Download on Google Play Store"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="group flex items-center justify-between gap-2 rounded-full bg-black px-6 py-4 text-sm font-semibold text-white transition-transform sm:text-base shadow-lg cursor-pointer"
          >
            <BiLogoPlayStore className="text-xl" />
            <span>Download on Play Store</span>
          </motion.button>
        </div>
      </motion.div>
    </motion.section>
  );
}
