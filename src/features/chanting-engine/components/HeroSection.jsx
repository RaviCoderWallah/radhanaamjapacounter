"use client";

import { BiSolidVolumeFull, BiSolidVolumeMute } from "react-icons/bi";
import { useJapaState } from "@/hooks/useJapaState";
import { CounterPanel, DeityDisplay } from "..";
import useSound from "use-sound";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import confetti from "canvas-confetti";
import { useSessionScoring } from "@/hooks/useSessionScoring";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

const HeroSection = ({
  imageSrc,
  altDescription,
  title,
  audioSrc = "/audio/radha-radha.mp3",
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const { handleIncreaseJapaCount, japaCount, analytics } = useJapaState();
  const [isSoundOn, setIsSoundOn] = useState(false);

  const streakDays = analytics?.summary?.currentStreak || 0;
  const { recordTap, endSession } = useSessionScoring(streakDays);

  const [play] = useSound(audioSrc, {
    volume: 0.5,
    interrupt: true,
  });

  const handleSoundStatus = (e) => {
    e.stopPropagation();
    setIsSoundOn((prev) => !prev);
  };

  const handleJapaCount = () => {
    handleIncreaseJapaCount();
    if (isSoundOn) {
      play();
    }
    recordTap();
    if (japaCount > 0 && japaCount % 108 == 0) {
      confetti({
        particleCount: 300,
        spread: 450,
        origin: { y: 0.6 },
        colors: ["#f9bb4d", "#f37420", "#fae6b8", "#fad199"],
      });
    }
  };

  const handleEndSession = (e) => {
    e.stopPropagation();
    if (japaCount === 0) {
      toast("Pehle japa karo! 🙏", { icon: "📿" });
      return;
    }
    const pts = endSession();
    toast.success(`Session khatam! Aapne ${pts} points kamaaye! 🎉`, {
      duration: 4000,
      icon: "🏆",
    });
  };

  return (
    <section
      onClick={handleJapaCount}
      className="w-full min-h-[calc(100vh-3rem)] relative select-none"
    >
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="mx-auto px-4 py-4"
      >
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="grid grid-cols-2 md:grid-cols-3 gap-8 sm:gap-3 md:gap-4 items-center"
        >
          {/* Audio Mute and Unmute Toggle  */}
          <div
            className="col-span-1 flex items-center gap-1.5 order-2 md:order-1 cursor-pointer select-none"
            onClick={(e) => handleSoundStatus(e)}
          >
            <BiSolidVolumeMute
              aria-hidden="true"
              className="text-lg text-amber-950 shrink-0"
            />
            <div
              role="switch"
              aria-checked={isSoundOn}
              aria-label="Toggle mantra sound voice"
              className={`${isSoundOn ? "bg-amber-900 justify-end" : "bg-gray-50"} w-12 h-6 transition-all duration-300 rounded-full flex items-center p-0.5 cursor-pointer`}
            >
              <div
                className={`${isSoundOn ? "bg-gray-50" : "bg-gray-500"} w-5 aspect-square rounded-full shadow-xs`}
              ></div>
            </div>
            <BiSolidVolumeFull
              aria-hidden="true"
              className="text-lg text-amber-950 shrink-0"
            />
          </div>

          {/* Current Mantra Title  */}
          <div className="col-span-2 md:col-span-1 text-center order-1 md:order-2 mb-2 md:mb-0">
            <h1 className="text-xl md:text-2xl font-bold text-amber-900 leading-snug">
              {title}
            </h1>
          </div>

          {/* Right side: Mantra Select + End Session */}
          <div className="col-span-1 flex flex-col items-end gap-2 order-3 md:order-3">
            {/* Select Mantra Dropdown  */}
            <div className="relative font-poppins w-full max-w-[140px] sm:max-w-[185px]">
              <select
                value={pathname}
                aria-label="Select Mantra to chant"
                onChange={(e) => {
                  e.stopPropagation();
                  router.push(e.target.value);
                }}
                onClick={(e) => e.stopPropagation()}
                className="appearance-none w-full bg-gray-50 border border-amber-900/10 rounded-full pl-3.5 pr-8 py-1.5 text-xs sm:text-sm font-semibold text-amber-900 shadow-xs focus:outline-none focus:ring-1 focus:ring-saffron/40 transition-all duration-300 cursor-pointer"
              >
                <option
                  value="/"
                  className="bg-amber-50 text-amber-900 text-xs sm:text-sm"
                >
                  Radhe Radhe
                </option>
                <option
                  value="/mantra/hare-krishna"
                  className="bg-amber-50 text-amber-900 text-xs sm:text-sm"
                >
                  Hare Krishna
                </option>
                <option
                  value="/mantra/jai-shri-ram"
                  className="bg-amber-50 text-amber-900 text-xs sm:text-sm"
                >
                  Jai Shri Ram
                </option>
                <option
                  value="/mantra/om-gam-ganapataye-namah"
                  className="bg-amber-50 text-amber-900 text-xs sm:text-sm"
                >
                  Om Ganapataye Namah
                </option>
                <option
                  value="/mantra/om-ham-hanumate-namah"
                  className="bg-amber-50 text-amber-900 text-xs sm:text-sm"
                >
                  Om Hanumate Namah
                </option>
                <option
                  value="/mantra/om-namah-shivaya"
                  className="bg-amber-50 text-amber-900 text-xs sm:text-sm"
                >
                  Om Namah Shivaya
                </option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                <svg
                  className="w-3.5 h-3.5 text-saffron"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>

            {/* End Session Button */}
            <button
              onClick={handleEndSession}
              aria-label="End japa session and save points"
              className="text-xs font-semibold px-3 py-1.5 rounded-full bg-amber-900 text-amber-50 hover:bg-amber-800 active:scale-95 transition-all duration-200 cursor-pointer shadow-sm"
            >
              End Session 🏆
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <CounterPanel />
          <DeityDisplay imgSrc={imageSrc} altDescription={altDescription} />
        </motion.div>
      </motion.section>
    </section>
  );
};

export default HeroSection;
