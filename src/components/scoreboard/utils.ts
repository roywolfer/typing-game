import { timeAgo } from "../../consts";
import { Score } from "../../hooks/topScores/types";
import { ScoreboardRow } from "./types";

export function formatDate(date: Date): string {
  return timeAgo.format(date);
}

export function convertToRows(topScores: Score[]): ScoreboardRow[] {
  return topScores.map((score, index) => ({
    id: index + 1,
    wpm: score.points,
    date: score.date,
  }));
}
