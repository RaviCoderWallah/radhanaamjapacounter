"use client";

import { useRef, useEffect } from "react";
import { FaCrown, FaLock } from "react-icons/fa";
import Image from "next/image";
import { useAuth } from "@/hooks/useAuth";
import { useLeaderboard } from "@/hooks/useLeaderboard";
import FAQSection from "@/components/FAQSection";
import PageHeader from "@/components/shared/PageHeader";
import { motion, AnimatePresence } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const podiumVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

export default function LeaderboardPage() {
  const { user, signInWithGoogle } = useAuth();
  const { leaders, loading } = useLeaderboard();
  const modalRef = useRef(null);

  const topThree = leaders.slice(0, 3);

  // Podium order: 2nd (left), 1st (center), 3rd (right)
  const podiumOrder = [topThree[1], topThree[0], topThree[2]].filter(Boolean);

  const otherDevotees = leaders;

  // Focus trap for Sign In modal
  useEffect(() => {
    if (user || loading) return;
    const modalElement = modalRef.current;
    if (!modalElement) return;

    const focusableElements = modalElement.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    if (focusableElements.length === 0) return;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleTab = (e) => {
      if (e.key !== "Tab") return;
      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    };

    // Focus the Sign In button initially
    const timer = setTimeout(() => {
      firstElement.focus();
    }, 150);

    modalElement.addEventListener("keydown", handleTab);
    return () => {
      clearTimeout(timer);
      modalElement.keydown && modalElement.removeEventListener("keydown", handleTab);
    };
  }, [user, loading]);

  return (
    <main
      className={`relative flex-1 bg-[#fffdf8] min-h-screen ${
        !user ? "h-screen overflow-hidden" : ""
      }`}
    >
      {/* Background Content with Blur if not signed in */}
      <div
        aria-hidden={!user ? "true" : undefined}
        className={`${
          !user ? "blur-md pointer-events-none select-none" : ""
        } transition-all duration-500 p-4 sm:p-8 max-w-5xl mx-auto h-full pb-20`}
      >
        {/* Header */}
        <PageHeader
          eyebrow="Community rankings"
          heading="Community Leaderboard"
          description="Live rankings for all devotees. Chant with devotion and rise to the top of the leaderboard."
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center gap-8 sm:gap-16 mt-4 border-b border-amber-100/50 pb-8"
        >
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-amber-900">
              {leaders.length}
            </div>
            <div className="text-[10px] sm:text-xs font-semibold text-amber-700/70 tracking-wider uppercase mt-1">
              Participants
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-amber-900">
              {leaders
                .reduce((sum, d) => sum + (d.lifetimeCount || 0), 0)
                .toLocaleString()}
            </div>
            <div className="text-[10px] sm:text-xs font-semibold text-amber-700/70 tracking-wider uppercase mt-1">
              Total Japas
            </div>
          </div>
        </motion.div>

        {/* Podium Section */}
        <div className="flex justify-center items-end gap-1.5 sm:gap-6 my-10 sm:my-16 h-72">
          {loading ? (
            <p className="text-amber-700 font-medium">Loading rankings...</p>
          ) : (
            podiumOrder.map((devotee, index) => {
              if (!devotee) return null;
              const isFirst = devotee.rank === 1;
              const heightClass = isFirst
                ? "h-48"
                : devotee.rank === 2
                  ? "h-36"
                  : "h-28";
              const bgClass = isFirst
                ? "bg-gradient-to-t from-saffron to-light-yellow shadow-lg shadow-saffron/20 border-t border-white/40"
                : "bg-gradient-to-t from-amber-200 to-amber-100 border-t border-white/50";

              return (
                <motion.div
                  key={devotee.uid}
                  custom={index}
                  variants={podiumVariants}
                  initial="hidden"
                  animate="visible"
                  className={`flex flex-col items-center ${
                    isFirst ? "w-24 sm:w-36 z-10" : "w-20 sm:w-32"
                  }`}
                >
                  <div className="relative flex flex-col items-center w-full">
                    {isFirst && (
                      <motion.div
                        initial={{ rotate: -15, scale: 0.8 }}
                        animate={{ rotate: 0, scale: 1 }}
                        transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
                        className="absolute -top-7 z-10"
                      >
                        <FaCrown className="text-saffron text-2xl sm:text-3xl drop-shadow-md" />
                      </motion.div>
                    )}
                    <div
                      className={`relative rounded-full overflow-hidden border-4 ${
                        isFirst
                          ? "border-saffron w-16 h-16 sm:w-24 sm:h-24"
                          : "border-white w-12 h-12 sm:w-20 sm:h-20"
                      } shadow-md bg-white mb-2.5`}
                    >
                      {devotee.photoURL ? (
                        <Image
                          src={devotee.photoURL}
                          alt={devotee.name}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-saffron font-bold text-lg sm:text-xl">
                          {devotee.name?.charAt(0) || "?"}
                        </div>
                      )}
                    </div>
                    <p className="font-bold text-amber-950 text-center truncate w-full px-1 text-xs sm:text-base">
                      {devotee.name}
                    </p>
                    <p
                      className={`text-[11px] sm:text-sm font-bold mb-3 ${
                        isFirst ? "text-saffron font-extrabold" : "text-amber-700"
                      }`}
                    >
                      {devotee.lifetimeCount?.toLocaleString()} pts
                    </p>
                  </div>
                  <motion.div
                    className={`w-full ${heightClass} ${bgClass} rounded-t-xl flex justify-center pt-5 relative overflow-hidden`}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="absolute inset-0 bg-white/10 opacity-50"></div>
                    <div
                      className={`w-8 h-8 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-bold text-sm sm:text-xl shadow-inner ${
                        isFirst
                          ? "bg-amber-100/30 text-white border border-white/30"
                          : "bg-amber-50/50 text-amber-900"
                      }`}
                    >
                      {devotee.rank}
                    </div>
                  </motion.div>
                </motion.div>
              );
            })
          )}
        </div>

        {/* List Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white rounded-2xl shadow-sm border border-amber-200/50 overflow-hidden mt-8"
        >
          <div className="flex justify-between items-center p-4 sm:p-6 border-b border-amber-100 bg-amber-50/30">
            <h2 className="text-lg sm:text-xl font-bold text-amber-900">All Rankings</h2>
          </div>

          <div className="bg-amber-50/10 px-6 py-3 border-b border-amber-100 hidden sm:grid grid-cols-12 gap-4 text-xs font-bold text-amber-700/60 uppercase tracking-wider">
            <div className="col-span-1">Rank</div>
            <div className="col-span-8">Participant</div>
            <div className="col-span-3 text-right">Score</div>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="divide-y divide-amber-100/50"
          >
            {otherDevotees.map((devotee) => (
              <motion.div
                key={devotee.uid}
                variants={itemVariants}
                className="grid grid-cols-12 gap-2 sm:gap-4 items-center p-4 sm:px-6 hover:bg-amber-50/50 transition-colors cursor-pointer"
              >
                <div className="col-span-2 sm:col-span-1 flex justify-center sm:justify-start">
                  <span className="text-base sm:text-lg font-bold text-amber-900/50">
                    {devotee.rank}
                  </span>
                </div>

                <div className="col-span-6 sm:col-span-8 flex items-center gap-2.5 sm:gap-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-saffron/20 flex items-center justify-center text-saffron font-bold border border-saffron/30 shrink-0 overflow-hidden relative">
                    {devotee.photoURL ? (
                      <Image
                        src={devotee.photoURL}
                        alt={devotee.name}
                        fill
                        sizes="40px"
                        className="object-cover"
                      />
                    ) : (
                      devotee.name?.charAt(0) || "?"
                    )}
                  </div>
                  <div className="min-w-0">
                    <p className="font-bold text-amber-950 text-sm sm:text-base truncate">{devotee.name}</p>
                    <p className="text-[10px] sm:text-xs text-amber-700/70 mt-0.5">
                      Best Streak: {devotee.longestStreak}
                    </p>
                  </div>
                </div>

                <div className="col-span-4 sm:col-span-3 text-right">
                  <p className="font-bold text-amber-900 text-sm sm:text-lg">
                    {devotee.lifetimeCount?.toLocaleString()}
                  </p>
                  <p className="text-[9px] sm:text-xs text-amber-700/60 font-semibold uppercase">
                    Points
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Overlay modal for Sign In */}
      <AnimatePresence>
        {!user && (
          <motion.div 
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center z-50 bg-amber-950/40 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 15 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-[#FFFDF9] p-6 sm:p-10 rounded-3xl shadow-2xl max-w-md w-full text-center border border-amber-100 transform"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-orange-saffron/20 rounded-full flex items-center justify-center mx-auto mb-6 relative border border-orange-saffron/30">
                <div className="absolute inset-1.5 bg-white rounded-full flex items-center justify-center">
                  <FaLock className="w-6 h-6 sm:w-8 sm:h-8 text-saffron" />
                </div>
              </div>
              <h2 id="modal-title" className="text-2xl sm:text-3xl font-bold text-amber-950 mb-3">
                Unlock Leaderboard
              </h2>
              <p className="text-sm sm:text-base text-amber-900/90 mb-8 leading-relaxed font-medium">
                Sign in to save your chanting progress, climb the ranks, and see
                your standing among fellow devotees worldwide.
              </p>
              <div className="flex flex-col gap-3">
                <button
                  onClick={signInWithGoogle}
                  className="w-full bg-[#F37420] hover:bg-[#e2620c] text-white font-bold py-3 px-4 rounded-xl transition-all shadow-md hover:shadow-lg hover:scale-[1.01] active:scale-95 cursor-pointer focus:outline-3 focus:outline-offset-2 focus:outline-amber-600"
                >
                  Sign In with Google
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAQ Section — only shown when user is signed in */}
      {user && (
        <div className="bg-[#fffdf8]">
          <FAQSection
            headingId="leaderboard-faq"
            faqs={[
              { q: "How is the leaderboard ranking calculated?", a: "Rankings are based on lifetime japa count. The more you chant (genuinely), the higher you rank. The leaderboard updates in real-time." },
              { q: "Do I need to sign in to appear on the leaderboard?", a: "Yes. Sign in with Google to have your japa count synced and visible on the community leaderboard." },
              { q: "How often does the leaderboard update?", a: "The leaderboard uses real-time Firestore listeners. It updates instantly whenever any devotee completes japa." },
              { q: "Can someone cheat to get a higher rank?", a: "We have an anti-cheat Japa Points System. Users who use bots or auto-clickers are detected and their scores are invalidated." },
              { q: "How do I improve my ranking?", a: "Chant consistently every day! Daily streaks earn bonus points, and the more malas you complete per session, the higher your score climbs." },
            ]}
          />
        </div>
      )}
    </main>
  );
}
