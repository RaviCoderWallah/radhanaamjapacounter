"use client";

import { getCurrentMonth } from "@/utils/helper";
import { FiCalendar, FiAward } from "react-icons/fi";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const ChallengeSection = () => {
  const handleJoinClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentMonth = getCurrentMonth();

  return (
    <section
      aria-labelledby="challenge-title"
      className="w-full bg-gradient-to-br from-[#D9531E] via-[#F37420] to-[#F9BB4D] py-16 px-4 sm:px-6 relative overflow-hidden text-white"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-72 h-72 rounded-full bg-white/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 rounded-full bg-white/10 blur-3xl pointer-events-none" />

      {/* Sparkle decorative SVGs */}
      <svg
        className="absolute left-6 bottom-8 w-12 h-12 text-white/15 animate-pulse hidden md:block"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 0l3 9 9 3-9 3-3 9-3-9-9-3 9-3z" />
      </svg>
      <svg
        className="absolute right-12 top-8 w-16 h-16 text-white/10 animate-bounce hidden md:block"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 0l3 9 9 3-9 3-3 9-3-9-9-3 9-3z" />
      </svg>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-5xl mx-auto relative z-10 flex flex-col items-center"
      >
        {/* Pill Badge */}
        <motion.div
          variants={itemVariants}
          className="bg-white/15 backdrop-blur-md border border-white/30 text-white font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full inline-flex items-center gap-1.5 shadow-sm mb-6 animate-pulse"
          role="status"
        >
          <span className="text-base">🔥</span> CHALLENGE IS LIVE!{" "}
          <span className="text-base">🔥</span>
        </motion.div>

        {/* Section Heading */}
        <motion.h2
          variants={itemVariants}
          id="challenge-title"
          className="text-3xl sm:text-4xl md:text-5xl font-black text-center mb-4 tracking-wide drop-shadow-md leading-tight text-amber-50"
        >
          Radha Jap Streak Challenge 2026 🔥
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="font-poppins text-sm sm:text-base md:text-lg text-center max-w-2xl mx-auto mb-10 opacity-95 leading-relaxed text-amber-100"
        >
          Jap daily 108 Radha naam and get a chance to win prizes every month.
        </motion.p>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mb-10 justify-self-center"
        >
          {/* Card 1: Schedule Info */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -4, boxShadow: "0 16px 32px rgba(0,0,0,0.15)" }}
            className="bg-[#FFFDF9] rounded-2xl p-6 border border-amber-200 shadow-md text-amber-950 flex flex-col items-center text-center transition-shadow duration-300"
          >
            <div className="w-14 h-14 bg-amber-100/80 rounded-2xl flex items-center justify-center mb-5 border border-amber-200">
              <FiCalendar
                className="text-3xl text-[#F37420]"
                aria-hidden="true"
              />
            </div>
            <h3 className="text-xl font-bold font-poppins text-amber-950 mb-3">
              Starts {currentMonth}
            </h3>
            <p className="text-sm text-amber-900 leading-relaxed font-medium">
              Jap daily 108 Radha naam and win prizes
            </p>
          </motion.div>

          {/* Card 2: Monthly Prizes */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -4, boxShadow: "0 16px 32px rgba(0,0,0,0.15)" }}
            className="bg-[#FFFDF9] rounded-2xl p-6 border border-amber-200 shadow-md text-amber-950 flex flex-col transition-shadow duration-300"
          >
            <div className="w-14 h-14 bg-amber-100/80 rounded-2xl flex items-center justify-center mb-5 self-center border border-amber-200">
              <FiAward className="text-3xl text-[#F37420]" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-bold font-poppins text-center text-amber-950 mb-4">
              Monthly prizes *
            </h3>
            <ul className="w-full space-y-2.5 text-sm font-medium text-amber-900 flex-1">
              <li className="flex items-center justify-between border-b border-amber-100 pb-1.5">
                <span className="flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-100 text-red-700 text-xs font-bold border border-red-200">
                    🥇
                  </span>
                  <span>1st Prize</span>
                </span>
                <span className="font-bold text-[#D9531E]">₹300</span>
              </li>
              <li className="flex items-center justify-between border-b border-amber-100 pb-1.5">
                <span className="flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-slate-100 text-slate-700 text-xs font-bold border border-slate-200">
                    🥈
                  </span>
                  <span>2nd Prize</span>
                </span>
                <span className="font-bold text-[#D9531E]">₹200</span>
              </li>
              <li className="flex items-center justify-between border-b border-amber-100 pb-1.5">
                <span className="flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold border border-emerald-200">
                    🥉
                  </span>
                  <span>3rd Prize</span>
                </span>
                <span className="font-bold text-[#D9531E]">₹100</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Buttons Container */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 mb-8 w-full justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            aria-controls="challenge-details"
            className="flex items-center justify-center gap-2 bg-[#FFF8E7] text-[#D9531E] hover:text-[#B63E10] hover:bg-white font-bold py-3.5 px-8 rounded-full shadow-md transition-all duration-200 focus:outline-3 focus:outline-offset-2 focus:outline-white cursor-pointer"
          >
            <span>🔥 More details</span>
          </motion.button>

          <motion.button
            onClick={handleJoinClick}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center justify-center gap-2 bg-[#2D0A00] text-amber-50 hover:bg-[#1C0600] font-bold py-3.5 px-8 rounded-full shadow-md transition-all duration-200 focus:outline-3 focus:outline-offset-2 focus:outline-[#2D0A00] cursor-pointer"
          >
            <span>📱 Join Now Streak Challenge</span>
          </motion.button>
        </motion.div>

        {/* Footer Notes */}
        <motion.div
          variants={itemVariants}
          className="text-center font-poppins text-xs sm:text-sm opacity-90 space-y-2"
        >
          <p className="flex items-center justify-center gap-1.5 flex-wrap">
            <span className="text-[#FFF8E7] font-semibold">
              ✔ Daily 108 japa required
            </span>
            <span className="opacity-60">•</span>
            <span>Monthly +</span>
          </p>
          <p className="font-semibold text-amber-50 text-sm tracking-wide">
            Start your streak journey today! 📿
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ChallengeSection;
