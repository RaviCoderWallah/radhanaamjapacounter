"use client";

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
      className="relative max-w-5xl mx-auto my-20 overflow-hidden rounded-[28px] bg-[#F37420] mx-4 sm:mx-auto"
    >
      {/* Rich gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F37420] via-[#e8650a] to-[#c94e00]" />

      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, #fff 1px, transparent 1px), radial-gradient(circle at 80% 20%, #fff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Images on the right side — absolutely positioned */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        className="pointer-events-none absolute inset-y-0 right-0 hidden sm:flex items-center justify-end pr-6 lg:pr-10 gap-4"
        aria-hidden="true"
      >
        {/* image-4 — tilted back */}
        <div
          className="relative w-28 h-40 lg:w-36 lg:h-52 rounded-2xl overflow-hidden shadow-2xl border-2 border-white/25"
          style={{ transform: "rotate(4deg) translateY(-10px)" }}
        >
          <Image
            src="/images/image-4.jpg"
            alt=""
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 112px, 144px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#c94e00]/60 via-transparent to-transparent" />
        </div>

        {/* image-1 — front, slightly larger */}
        <div
          className="relative w-36 h-52 lg:w-44 lg:h-64 rounded-2xl overflow-hidden shadow-2xl border-2 border-white/35"
          style={{ transform: "rotate(-3deg) translateY(6px)" }}
        >
          <Image
            src="/images/image-1.jpg"
            alt=""
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 144px, 176px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#c94e00]/40 via-transparent to-transparent" />
        </div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 p-8 sm:p-12 lg:p-16 sm:max-w-[58%]">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        >
          <p className="text-amber-100 font-semibold text-xs sm:text-sm uppercase tracking-widest mb-3">
            📿 Japa on the go
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight mb-4">
            Download <br className="hidden sm:block" />
            Mobile App
          </h2>

          <p className="text-sm sm:text-base text-white/85 leading-relaxed max-w-sm">
            Chant Radhe Radhe anywhere, anytime. Track your japa, maintain your
            streak, and climb the leaderboard — all in your pocket.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <motion.button
              type="button"
              aria-label="Download on Google Play Store"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center justify-center gap-2.5 rounded-full bg-black/90 hover:bg-black px-6 py-3.5 text-sm font-bold text-white transition-all shadow-lg cursor-pointer border border-white/10"
            >
              <BiLogoPlayStore className="text-xl text-green-400" />
              <span>Download on Play Store</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
