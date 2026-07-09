# Japa Points System — Implementation Spec

## Overview

Ek fair scoring system jo 4 cheez milake points calculate karta hai, taaki cheaters ko 0 points mile aur sachche bhakton ko maximum points.

```
Final Points = MalaCount × TimeScore × StreakMultiplier × TapScore
```

---

## Project Context

- Framework: Next.js (App Router)
- Existing hook: `useJapaState`
- Existing click handler: `handleIncreaseJapaCount` in `HeroSection`
- Storage: `localStorage` (no backend yet)
- 1 Mala = 108 japa

---

## Step 1 — Track Tap Intervals

### Where to add: `HeroSection.tsx` → `handleJapaCount` function

Every time user taps, record the timestamp and calculate gap from last tap.

```ts
// Add this to component state
const [lastTapTime, setLastTapTime] = useState<number | null>(null);
const [tapIntervals, setTapIntervals] = useState<number[]>([]);
const [sessionStartTime] = useState<number>(Date.now());

// Modify handleJapaCount
const handleJapaCount = () => {
  handleIncreaseJapaCount();
  if (isSoundOn) play();

  const now = Date.now();
  if (lastTapTime !== null) {
    const intervalSeconds = (now - lastTapTime) / 1000;
    setTapIntervals((prev) => [...prev, intervalSeconds]);
  }
  setLastTapTime(now);
};
```

---

## Step 2 — Four Scoring Functions

### Create new file: `lib/scoring.ts`

```ts
// ─── 1. MALA COUNT ───────────────────────────────────────────
// Only complete malas count. 107 japa = 0 mala.
export function getMalaCount(japaCount: number): number {
  return Math.floor(japaCount / 108);
}


// ─── 2. TIME SCORE ───────────────────────────────────────────
// 1 mala = ~4 minutes for average person
// Checks if speed is human-like
export function getTimeScore(malaCount: number, sessionDurationSeconds: number): number {
  if (malaCount === 0) return 0;

  const expectedSeconds = malaCount * 4 * 60; // 4 min per mala
  const ratio = sessionDurationSeconds / expectedSeconds;

  if (ratio < 0.5) return 0;   // Too fast → bot
  if (ratio < 1.0) return 0.7; // Fast but human possible
  if (ratio <= 2.0) return 1.0; // Perfect range
  if (ratio <= 4.0) return 0.8; // A bit slow
  return 0.3;                   // Phone rakh diya
}


// ─── 3. STREAK MULTIPLIER ────────────────────────────────────
// Rewards daily consistency
export function getStreakMultiplier(streakDays: number): number {
  if (streakDays >= 30) return 2.0;
  if (streakDays >= 14) return 1.5;
  if (streakDays >= 7)  return 1.2;
  return 1.0;
}


// ─── 4. TAP AUTHENTICITY SCORE ───────────────────────────────
// Measures average gap between taps
// Too fast = bot, too slow = phone left on table
export function getTapScore(tapIntervals: number[]): number {
  if (tapIntervals.length < 5) return 0.5; // Not enough data

  const avg = tapIntervals.reduce((a, b) => a + b, 0) / tapIntervals.length;

  if (avg < 0.3)  return 0;   // Auto-clicker
  if (avg <= 2.0) return 1.0; // Human range (0.3s to 2s per tap)
  if (avg <= 10)  return 0.7; // Distracted
  return 0.2;                  // Phone rakha tha
}


// ─── FINAL POINTS CALCULATOR ─────────────────────────────────
export function calculatePoints({
  japaCount,
  sessionDurationSeconds,
  streakDays,
  tapIntervals,
}: {
  japaCount: number;
  sessionDurationSeconds: number;
  streakDays: number;
  tapIntervals: number[];
}): number {
  const mala        = getMalaCount(japaCount);
  const timeScore   = getTimeScore(mala, sessionDurationSeconds);
  const streak      = getStreakMultiplier(streakDays);
  const tapScore    = getTapScore(tapIntervals);

  const raw = mala * timeScore * streak * tapScore;
  return Math.round(raw * 100) / 100; // Round to 2 decimal places
}
```

---

## Step 3 — Session Data Structure

### Save this to localStorage after every session ends

```ts
// Type definition — add to `types/index.ts`
export type JapaSession = {
  date: string;              // "2026-06-29"
  malaCount: number;         // 5
  japaCount: number;         // 540
  sessionDurationSeconds: number; // 1320
  tapIntervals: number[];    // [1.2, 0.9, 1.5, ...]
  streakDays: number;        // 20
  pointsEarned: number;      // 7.5
};
```

---

## Step 4 — Save & Load from localStorage

### Create new file: `lib/storage.ts`

```ts
import { JapaSession } from "@/types";

const SESSIONS_KEY = "japa_sessions";
const MONTHLY_POINTS_KEY = "japa_monthly_points";

// Save a completed session
export function saveSession(session: JapaSession): void {
  const existing = getSessions();
  existing.push(session);
  localStorage.setItem(SESSIONS_KEY, JSON.stringify(existing));

  // Add points to this month's total
  const month = session.date.slice(0, 7); // "2026-06"
  const monthly = getMonthlyPoints();
  monthly[month] = (monthly[month] || 0) + session.pointsEarned;
  localStorage.setItem(MONTHLY_POINTS_KEY, JSON.stringify(monthly));
}

// Get all sessions
export function getSessions(): JapaSession[] {
  const raw = localStorage.getItem(SESSIONS_KEY);
  return raw ? JSON.parse(raw) : [];
}

// Get monthly points map: { "2026-06": 142.5, "2026-07": 30 }
export function getMonthlyPoints(): Record<string, number> {
  const raw = localStorage.getItem(MONTHLY_POINTS_KEY);
  return raw ? JSON.parse(raw) : {};
}

// Get current month's total points
export function getCurrentMonthPoints(): number {
  const month = new Date().toISOString().slice(0, 7);
  const monthly = getMonthlyPoints();
  return monthly[month] || 0;
}

// Get today's sessions
export function getTodaySessions(): JapaSession[] {
  const today = new Date().toISOString().slice(0, 10);
  return getSessions().filter((s) => s.date === today);
}
```

---

## Step 5 — Session End Hook

### Create new file: `hooks/useSessionScoring.ts`

Call this when user finishes japa (e.g., navigates away or closes session manually).

```ts
import { useState, useRef } from "react";
import { calculatePoints } from "@/lib/scoring";
import { saveSession } from "@/lib/storage";

export function useSessionScoring(streakDays: number) {
  const sessionStart = useRef<number>(Date.now());
  const [tapIntervals, setTapIntervals] = useState<number[]>([]);
  const lastTapTime = useRef<number | null>(null);

  // Call this on every japa tap
  const recordTap = () => {
    const now = Date.now();
    if (lastTapTime.current !== null) {
      const interval = (now - lastTapTime.current) / 1000;
      setTapIntervals((prev) => [...prev, interval]);
    }
    lastTapTime.current = now;
  };

  // Call this when session ends (user clicks "End Session" button)
  const endSession = (japaCount: number) => {
    const sessionDurationSeconds = (Date.now() - sessionStart.current) / 1000;

    const pointsEarned = calculatePoints({
      japaCount,
      sessionDurationSeconds,
      streakDays,
      tapIntervals,
    });

    const session = {
      date: new Date().toISOString().slice(0, 10),
      malaCount: Math.floor(japaCount / 108),
      japaCount,
      sessionDurationSeconds,
      tapIntervals,
      streakDays,
      pointsEarned,
    };

    saveSession(session);
    return pointsEarned;
  };

  return { recordTap, endSession, tapIntervals };
}
```

---

## Step 6 — Wire Everything in HeroSection

### Modify: `HeroSection.tsx`

```tsx
// Add imports
import { useSessionScoring } from "@/hooks/useSessionScoring";

// Inside component — get streak from your existing state
const { streakDays } = useJapaState(); // assumes streakDays exists
const { recordTap, endSession } = useSessionScoring(streakDays);

// Modify tap handler
const handleJapaCount = () => {
  handleIncreaseJapaCount();
  if (isSoundOn) play();
  recordTap(); // ← Add this line
};

// Add "End Session" button in JSX (near Statistics button)
<button
  onClick={(e) => {
    e.stopPropagation();
    const pts = endSession(japaCount); // pass current japaCount from state
    alert(`Session khatam! Aapne ${pts} points kamaaye! 🎉`);
  }}
  className="px-4 py-2 bg-amber-800 text-white rounded-md"
>
  End Session
</button>
```

---

## Step 7 — Statistics Page

### Modify: `app/statistics/page.tsx`

```tsx
"use client";

import { useEffect, useState } from "react";
import { getSessions, getCurrentMonthPoints } from "@/lib/storage";
import { JapaSession } from "@/types";

export default function StatisticsPage() {
  const [sessions, setSessions] = useState<JapaSession[]>([]);
  const [monthPoints, setMonthPoints] = useState(0);

  useEffect(() => {
    setSessions(getSessions());
    setMonthPoints(getCurrentMonthPoints());
  }, []);

  const totalMala = sessions.reduce((a, b) => a + b.malaCount, 0);
  const totalJapa = sessions.reduce((a, b) => a + b.japaCount, 0);

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold text-amber-900 mb-4">📊 Aapki Statistics</h1>

      {/* Monthly Points Highlight */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6 text-center">
        <p className="text-sm text-amber-700">Is Mahine Ke Points</p>
        <p className="text-4xl font-bold text-amber-900">{monthPoints.toFixed(2)}</p>
        <p className="text-xs text-amber-600 mt-1">Points = Mala × Time × Streak × Tap Quality</p>
      </div>

      {/* Totals */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        <div className="bg-white border border-amber-100 rounded-xl p-3 text-center">
          <p className="text-xs text-gray-500">Kul Mala</p>
          <p className="text-2xl font-bold text-amber-900">{totalMala}</p>
        </div>
        <div className="bg-white border border-amber-100 rounded-xl p-3 text-center">
          <p className="text-xs text-gray-500">Kul Japa</p>
          <p className="text-2xl font-bold text-amber-900">{totalJapa}</p>
        </div>
      </div>

      {/* Session History */}
      <h2 className="text-lg font-semibold text-amber-800 mb-2">Session History</h2>
      <div className="space-y-3">
        {sessions.slice().reverse().map((s, i) => (
          <div key={i} className="bg-white border border-amber-100 rounded-xl p-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">{s.date}</span>
              <span className="font-bold text-amber-800">+{s.pointsEarned} pts</span>
            </div>
            <div className="text-xs text-gray-400 mt-1">
              {s.malaCount} mala · {s.japaCount} japa · {Math.round(s.sessionDurationSeconds / 60)} min · {s.streakDays} day streak
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
```

---

## Examples — Points Calculation

### Example 1: Sachcha Bhakt
```
japaCount = 540 (5 mala)
sessionTime = 22 min
streakDays = 20
avgTapInterval = 1.5 sec

mala = 5
timeScore = 1.0  (perfect speed)
streak = 1.5     (14-29 days)
tapScore = 1.0   (human range)

Points = 5 × 1.0 × 1.5 × 1.0 = 7.5 ✅
```

### Example 2: Auto-Clicker Cheater
```
japaCount = 5400 (50 mala)
sessionTime = 2 min
avgTapInterval = 0.05 sec

timeScore = 0    (ratio way too low)
tapScore = 0     (bot speed)

Points = 50 × 0 × 1.0 × 0 = 0 ❌
```

### Example 3: Phone Table Pe Rakh Diya
```
japaCount = 324 (3 mala)
sessionTime = 3 hours
avgTapInterval = 90 sec

timeScore = 0.3  (too slow)
tapScore = 0.2   (idle)

Points = 3 × 0.3 × 1.0 × 0.2 = 0.18 😅
```

---

## Month End Process (Manual — No Backend Needed)

```
1. Month last day pe winner apna Statistics page screenshot bhejega
2. Aap uska monthPoints value dekho
3. Top 3 ko prize bhejo 🎁
4. Next month = fresh start (points reset nahi honge, month-wise track hoga)
```

---

## Files Summary

```
lib/
  scoring.ts         ← Scoring formulas (new)
  storage.ts         ← localStorage save/load (new)

hooks/
  useSessionScoring.ts  ← Session tracking hook (new)

types/
  index.ts           ← JapaSession type (add here)

components/
  HeroSection.tsx    ← recordTap() add karo (modify)

app/
  statistics/
    page.tsx         ← Points + history UI (modify)
```
