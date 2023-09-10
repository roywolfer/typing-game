import { maxScoreAmount } from "./consts";
import { Score } from "./types";

export function getNewTopScores(topScores: Score[], newScore: number): Score[] {
  return [...topScores, { points: newScore, date: new Date() }]
    .sort((a, b) => b.points - a.points)
    .slice(0, maxScoreAmount);
}

export function readScoresFromLocalStorage(key: string): Score[] {
  return readArrayFromLocalStorage<Score>(key).map((score) => ({
    points: score.points,
    date: new Date(score.date),
  }));
}

export function writeToLocalStorage<T>(key: string, value: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`Error writing to localStorage for key "${key}": ${error}`);
  }
}

function readArrayFromLocalStorage<T>(key: string): T[] {
  try {
    const item = localStorage.getItem(key);

    return item ? JSON.parse(item) : [];
  } catch (error) {
    console.error(`Error reading from localStorage for key "${key}": ${error}`);

    return [];
  }
}
