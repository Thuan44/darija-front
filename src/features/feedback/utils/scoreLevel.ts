export type ScoreLevel = "low" | "medium" | "good" | "excellent";

export function getScoreLevel(value: number): ScoreLevel {
  if (value >= 85) return "excellent";
  if (value >= 70) return "good";
  if (value >= 50) return "medium";
  return "low";
}
