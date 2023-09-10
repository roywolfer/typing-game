import { maxScoreAmount, topScoresKey } from "./consts";
import { Score } from "./types";

export function readScoresFromLocalStorage(): Score[] {
  return (
    readFromLocalStorage<Score[]>(topScoresKey)?.map((score) => ({
      points: score.points,
      date: new Date(score.date),
    })) ?? []
  );
}

export async function writeScoresToLocalStorage(
  newScore: number
): Promise<void> {
  writeToLocalStorage(
    topScoresKey,
    getNewTopScores(readScoresFromLocalStorage(), newScore)
  );
}

function getNewTopScores(topScores: Score[], newScore: number): Score[] {
  return [...topScores, { points: newScore, date: new Date() }]
    .sort((a, b) => b.points - a.points)
    .slice(0, maxScoreAmount);
}

function writeToLocalStorage<T>(key: string, value: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`Error writing to localStorage for key "${key}": ${error}`);
  }
}

function readFromLocalStorage<T>(key: string): T | undefined {
  try {
    const item = localStorage.getItem(key);

    if (item) return JSON.parse(item);
  } catch (error) {
    console.error(`Error reading from localStorage for key "${key}": ${error}`);
  }
}
