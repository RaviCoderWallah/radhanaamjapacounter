// ─── JAPA SESSION STORAGE ─────────────────────────────────────────────────────
// Saves and loads japa sessions from localStorage.
// Tracks monthly points for leaderboard.

const SESSIONS_KEY = "japa_sessions";
const MONTHLY_POINTS_KEY = "japa_monthly_points";

// Save a completed session
export function saveSession(session) {
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
export function getSessions() {
  if (typeof window === "undefined") return [];
  const raw = localStorage.getItem(SESSIONS_KEY);
  return raw ? JSON.parse(raw) : [];
}

// Get monthly points map: { "2026-06": 142.5, "2026-07": 30 }
export function getMonthlyPoints() {
  if (typeof window === "undefined") return {};
  const raw = localStorage.getItem(MONTHLY_POINTS_KEY);
  return raw ? JSON.parse(raw) : {};
}

// Get current month's total points
export function getCurrentMonthPoints() {
  const month = new Date().toISOString().slice(0, 7);
  const monthly = getMonthlyPoints();
  return monthly[month] || 0;
}

// Get today's sessions
export function getTodaySessions() {
  const today = new Date().toISOString().slice(0, 10);
  return getSessions().filter((s) => s.date === today);
}

// Delete a single session by index (in the original order)
export function deleteSession(index) {
  const existing = getSessions();
  existing.splice(index, 1);
  localStorage.setItem(SESSIONS_KEY, JSON.stringify(existing));
}

// Clear all sessions
export function clearAllSessions() {
  localStorage.removeItem(SESSIONS_KEY);
}
