"use client";

import { FaFire } from "react-icons/fa";
import { GiPrayerBeads } from "react-icons/gi";
import { FaRegUser } from "react-icons/fa6";
import { GiSandsOfTime } from "react-icons/gi";
import { useJapaState } from "@/hooks/useJapaState";
import { getLocalDateString } from "@/utils/helper";
import { getSessions, getCurrentMonthPoints } from "@/lib/storage";
import { useEffect, useState } from "react";
import FAQSection from "@/components/FAQSection";
import PageHeader from "@/components/shared/PageHeader";
import { motion } from "framer-motion";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const getWeeklyData = (dailyStats) => {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const today = new Date();
  
  let totalJapaThisWeek = 0;
  const chartData = [];

  // Generate last 7 days ending with today
  for (let i = 6; i >= 0; i--) {
    const dayDate = new Date(today);
    dayDate.setDate(today.getDate() - i);

    const year = dayDate.getFullYear();
    const month = String(dayDate.getMonth() + 1).padStart(2, "0");
    const day = String(dayDate.getDate()).padStart(2, "0");
    const dateStr = `${year}-${month}-${day}`;

    const count = dailyStats[dateStr]?.count || 0;
    totalJapaThisWeek += count;

    chartData.push({
      day: daysOfWeek[dayDate.getDay()],
      japa: count,
    });
  }

  // Calculate start date (6 days ago) and end date (today) for range label
  const firstDay = new Date(today);
  firstDay.setDate(today.getDate() - 6);

  const startLabel = `${firstDay.getDate()} ${firstDay.toLocaleString("default", { month: "short" })}`;
  const endLabel = `${today.getDate()} ${today.toLocaleString("default", { month: "short" })}`;
  const rangeLabel = `${startLabel} - ${endLabel}`;

  return { chartData, total: totalJapaThisWeek, rangeLabel };
};

const getMonthlyData = (dailyStats) => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth(); // 0-indexed

  // Total days in the current month
  const totalDays = new Date(year, month + 1, 0).getDate();
  const heatmapData = [];

  for (let i = 1; i <= totalDays; i++) {
    const dayDate = new Date(year, month, i);
    const monthStr = String(month + 1).padStart(2, "0");
    const dayStr = String(i).padStart(2, "0");
    const dateStr = `${year}-${monthStr}-${dayStr}`;

    const count = dailyStats[dateStr]?.count || 0;

    heatmapData.push({
      dayNum: i,
      dateStr,
      count,
    });
  }

  const monthName = today.toLocaleString("default", { month: "long" });
  return { heatmapData, monthName };
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

const StatisticsPage = () => {
  const { analytics } = useJapaState();
  const [sessions, setSessions] = useState([]);
  const [monthPoints, setMonthPoints] = useState(0);

  useEffect(() => {
    setSessions(getSessions());
    setMonthPoints(getCurrentMonthPoints());
  }, []);

  const summary = analytics?.summary || {
    currentStreak: 0,
    longestStreak: 0,
    lifetimeCount: 0,
    lifetimeDuration: 0,
  };

  const dailyStats = analytics?.dailyStats || {};

  const todayDateStr = getLocalDateString();

  const todayJapaCount = dailyStats[todayDateStr]?.count || 0;

  const totalMinutes = Math.round(summary.lifetimeDuration / 60);

  const { chartData, total, rangeLabel } = getWeeklyData(dailyStats);
  const { heatmapData, monthName } = getMonthlyData(dailyStats);

  return (
    <main className="flex-1 max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <PageHeader
        eyebrow="My Sadhana Progress"
        heading="Statistics Dashboard"
        description="Track your daily chanting trends, view monthly streaks, and see how consistent you are on your spiritual journey."
      />
      
      {/* Overview Cards */}
      <motion.section 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        aria-label="Statistics overview" 
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3.5 mb-8"
      >
        
        {/* Streaks Card */}
        <motion.div 
          variants={itemVariants}
          whileHover={{ scale: 1.01 }}
          className="col-span-2 bg-[#F37420] text-[#FFFDF9] p-4 rounded-xl flex items-center justify-between gap-3 shadow-md border border-amber-600/30"
        >
          <div className="flex flex-col gap-1">
            <p className="text-xs uppercase tracking-wider text-amber-100 font-semibold">Current Streaks</p>
            <p className="text-3xl font-black">
              {summary.currentStreak}{" "}
              <span className="text-sm font-normal font-poppins">{summary.currentStreak === 1 ? "day" : "days"}</span>
            </p>
            <p className="text-[10px] text-amber-50/80 font-medium">
              {summary.currentStreak > 0
                ? "Great Consistency! Keep chanting!"
                : "Chant today to start your streak!"}
            </p>
          </div>
          <div className="bg-white/10 p-2.5 rounded-lg">
            <FaFire className="text-3xl text-amber-100" />
          </div>
        </motion.div>

        {/* Today Japa */}
        <motion.div 
          variants={itemVariants}
          whileHover={{ y: -3, boxShadow: "0 8px 16px rgba(0,0,0,0.05)" }}
          className="col-span-1 bg-[#FFFDF9] border border-amber-200/80 p-4 rounded-xl flex flex-col justify-center gap-2 items-center text-center shadow-xs transition-all duration-200"
        >
          <div className="p-2 bg-amber-50 rounded-lg">
            <GiPrayerBeads className="text-2xl text-[#F37420]" />
          </div>
          <div className="flex flex-col">
            <p className="text-xs font-semibold text-amber-800 uppercase tracking-wide">Today Japa</p>
            <p className="text-2xl font-bold text-amber-950 mt-1">
              {todayJapaCount}
            </p>
          </div>
        </motion.div>

        {/* Lifetime Chants */}
        <motion.div 
          variants={itemVariants}
          whileHover={{ y: -3, boxShadow: "0 8px 16px rgba(0,0,0,0.05)" }}
          className="col-span-1 bg-[#FFFDF9] border border-amber-200/80 p-4 rounded-xl flex flex-col justify-center gap-2 items-center text-center shadow-xs transition-all duration-200"
        >
          <div className="p-2 bg-amber-50 rounded-lg">
            <FaRegUser className="text-2xl text-[#F37420]" />
          </div>
          <div className="flex flex-col">
            <p className="text-xs font-semibold text-amber-800 uppercase tracking-wide">Life Time</p>
            <p className="text-2xl font-bold text-amber-950 mt-1">
              {summary.lifetimeCount}
            </p>
          </div>
        </motion.div>

        {/* Total Duration */}
        <motion.div 
          variants={itemVariants}
          whileHover={{ y: -3, boxShadow: "0 8px 16px rgba(0,0,0,0.05)" }}
          className="col-span-2 sm:col-span-1 bg-[#FFFDF9] border border-amber-200/80 p-4 rounded-xl flex flex-col justify-center gap-2 items-center text-center shadow-xs transition-all duration-200"
        >
          <div className="p-2 bg-amber-50 rounded-lg">
            <GiSandsOfTime className="text-2xl text-[#F37420]" />
          </div>
          <div className="flex flex-col">
            <p className="text-xs font-semibold text-amber-800 uppercase tracking-wide">Total Time</p>
            <p className="text-2xl font-bold text-amber-950 mt-1">
              {totalMinutes} <span className="text-xs font-medium text-amber-800">Min</span>
            </p>
          </div>
        </motion.div>

      </motion.section>
 
      {/* Weekly Progress Section */}
      <motion.section 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}
        aria-labelledby="weekly-title" 
        className="bg-[#FFFDF9] border border-amber-900/10 p-5 sm:p-6 rounded-xl shadow-xs mb-8"
      >
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-6">
          <div>
            <h2 id="weekly-title" className="text-lg sm:text-xl font-bold text-amber-950 font-poppins">
              Weekly Progress
            </h2>
            <p className="text-xs sm:text-sm text-amber-700 font-medium">{rangeLabel}</p>
          </div>
          <div className="text-left sm:text-right">
            <p className="text-[10px] sm:text-xs text-amber-800 font-bold uppercase tracking-wider">
              Total Japa
            </p>
            <p className="text-2xl font-extrabold text-[#F37420]">{total}</p>
          </div>
        </div>
 
        <div className="w-full h-56 sm:h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              margin={{ top: 10, right: 10, left: -25, bottom: 0 }}
            >
              <defs>
                <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#F37420" stopOpacity={0.95} />
                  <stop offset="100%" stopColor="#F9BB4D" stopOpacity={0.65} />
                </linearGradient>
              </defs>
              <XAxis
                dataKey="day"
                tickLine={false}
                axisLine={false}
                tick={{ fill: "#78350f", fontSize: 12, fontWeight: 600 }}
              />
              <YAxis
                tickLine={false}
                axisLine={false}
                tick={{ fill: "#78350f", fontSize: 11 }}
              />
              <Tooltip
                cursor={{ fill: "rgba(243, 116, 32, 0.04)" }}
                contentStyle={{
                  backgroundColor: "#fffdf9",
                  border: "1px solid #f37420",
                  borderRadius: "8px",
                  fontSize: "12px",
                  fontFamily: "var(--font-poppins)",
                }}
                labelStyle={{ color: "#78350f", fontWeight: "bold" }}
                itemStyle={{ color: "#F37420", fontWeight: "600" }}
              />
              <Bar
                dataKey="japa"
                fill="url(#barGradient)"
                barSize={28}
                radius={[6, 6, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </motion.section>
 
      {/* Monthly Progress Section */}
      <motion.section 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        aria-labelledby="monthly-title" 
        className="bg-[#FFFDF9] border border-amber-900/10 p-5 sm:p-6 rounded-xl shadow-xs"
      >
        <h2 id="monthly-title" className="text-lg sm:text-xl font-bold text-amber-950">Monthly Progress</h2>
        <p className="text-xs sm:text-sm text-amber-700 font-medium mb-6">{monthName} {new Date().getFullYear()}</p>
 
        {/* Heatmap Grid */}
        <div 
          role="grid"
          aria-label={`Heatmap grid for ${monthName}`}
          className="grid grid-cols-7 sm:grid-cols-9 md:grid-cols-11 gap-2 max-w-3xl"
        >
          {heatmapData.map((day) => {
            let bgStyle = {};
            let borderClass = "border border-amber-800/15";
            let tooltipText = `${day.dayNum} ${monthName}: No chants`;
 
            if (day.count === 0) {
              bgStyle = {
                background: "repeating-linear-gradient(45deg, #fcfcfc, #fcfcfc 3px, #f4e8dc 3px, #f4e8dc 6px)",
              };
            } else {
              tooltipText = `${day.dayNum} ${monthName}: ${day.count} chants`;
              if (day.count < 108) {
                bgStyle = { backgroundColor: "#FAE6B8" };
              } else if (day.count < 540) {
                bgStyle = { backgroundColor: "#FAD199" };
              } else if (day.count < 1080) {
                bgStyle = { backgroundColor: "#F37420", color: "#fff" };
              } else {
                bgStyle = { backgroundColor: "#F9BB4D" };
              }
              borderClass = "border border-amber-600/65 shadow-xs";
            }
 
            return (
              <motion.div
                key={day.dateStr}
                style={bgStyle}
                role="gridcell"
                tabIndex={0}
                aria-label={tooltipText}
                whileHover={{ scale: 1.08, zIndex: 5 }}
                className={`aspect-square rounded-lg flex items-center justify-center text-[10px] sm:text-xs font-bold relative group cursor-pointer transition-all duration-200 border ${borderClass} ${
                  day.count > 0 && day.count < 540 ? "text-amber-950" : "text-amber-900/60"
                } focus:outline-2 focus:outline-offset-2 focus:outline-amber-600`}
              >
                {day.dayNum}
 
                {/* Tooltip on hover/focus */}
                <div 
                  role="tooltip"
                  className="absolute bottom-full mb-2 hidden group-hover:block group-focus:block z-10 bg-amber-950 text-amber-50 text-[10px] py-1 px-2.5 rounded-md shadow-md whitespace-nowrap pointer-events-none"
                >
                  {tooltipText}
                </div>
              </motion.div>
            );
          })}
        </div>
 
        {/* Legend */}
        <div className="flex gap-4 items-center mt-6 border-t border-amber-900/10 pt-4 flex-wrap text-xs text-amber-900 font-medium">
          <div className="flex items-center gap-1.5">
            <div 
              style={{ background: "repeating-linear-gradient(45deg, #fcfcfc, #fcfcfc 2px, #f4e8dc 2px, #f4e8dc 4px)" }}
              className="w-4.5 h-4.5 rounded-md border border-amber-800/15"
            />
            <span>0 chants</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-4.5 h-4.5 rounded-md border border-amber-500/40" style={{ backgroundColor: "#FAE6B8" }} />
            <span>&lt; 108</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-4.5 h-4.5 rounded-md border border-amber-500/40" style={{ backgroundColor: "#FAD199" }} />
            <span>108+</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-4.5 h-4.5 rounded-md border border-amber-500/40" style={{ backgroundColor: "#F37420" }} />
            <span>540+</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-4.5 h-4.5 rounded-md border border-amber-500/40 shadow-xs" style={{ backgroundColor: "#F9BB4D" }} />
            <span>1080+</span>
          </div>
        </div>
      </motion.section>
 
      {/* ── Monthly Points ── */}
      <motion.section 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.35 }}
        aria-labelledby="monthly-points-title" 
        className="bg-gradient-to-br from-[#F37420] to-[#F9BB4D] rounded-xl p-5 sm:p-6 shadow-md mt-8 text-center"
      >
        <p id="monthly-points-title" className="text-xs uppercase tracking-wider text-amber-100 font-semibold mb-1">Is Mahine Ke Points</p>
        <p className="text-5xl font-black text-white">{monthPoints.toFixed(2)}</p>
        <p className="text-xs text-amber-100/80 mt-2">Points = Mala × Time × Streak × Tap Quality</p>
      </motion.section>
 
      {/* ── Session History ── */}
      {sessions.length > 0 && (
        <motion.section 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          aria-labelledby="session-history-title" 
          className="bg-[#FFFDF9] border border-amber-900/10 p-5 sm:p-6 rounded-xl shadow-xs mt-8"
        >
          <h2 id="session-history-title" className="text-lg sm:text-xl font-bold text-amber-950 mb-4">Session History</h2>
          <div className="space-y-3">
            {sessions.slice().reverse().map((s, i) => (
              <motion.div 
                key={i} 
                whileHover={{ scale: 1.01 }}
                className="bg-amber-50/60 border border-amber-200/60 rounded-xl p-4 flex justify-between items-center gap-3"
              >
                <div>
                  <p className="text-sm font-semibold text-amber-900">{s.date}</p>
                  <p className="text-xs text-amber-700 mt-0.5">
                    {s.malaCount} mala · {s.japaCount} japa · {Math.round(s.sessionDurationSeconds / 60)} min · {s.streakDays}d streak
                  </p>
                </div>
                <span className="font-black text-[#F37420] text-lg whitespace-nowrap">+{s.pointsEarned} pts</span>
              </motion.div>
            ))}
          </div>
        </motion.section>
      )}
 
      {/* FAQ Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.45 }}
        className="mt-8"
      >
        <FAQSection
          headingId="statistics-faq"
          faqs={[
            { q: "How are my statistics calculated?", a: "Your japa count, duration, and streak are all tracked locally in your browser. The Statistics page reads this data to show weekly charts, monthly heatmaps, and session history." },
            { q: "What does the Monthly Heatmap show?", a: "Each square represents one day. Darker colors mean more japa that day — from light yellow (< 108) to saffron orange (540+) to golden (1080+)." },
            { q: "What are Japa Points?", a: "Points are calculated at the end of each session: Mala Count × Time Score × Streak Multiplier × Tap Authenticity. The formula rewards consistent, genuine chanting." },
            { q: "Why is my streak showing 0?", a: "Streaks reset if you miss a day. Your streak increases every day you chant at least once before midnight." },
            { q: "Can I see statistics from previous months?", a: "Yes! The Session History section shows all past sessions. Monthly points are tracked separately per month." },
          ]}
        />
      </motion.div>
    </main>
  );
};
 
export default StatisticsPage;
