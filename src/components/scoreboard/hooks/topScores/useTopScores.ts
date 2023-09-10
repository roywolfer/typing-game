import { useCallback, useState } from "react";
import { topScoresKey } from "./consts";
import { Score } from "./types";
import {
  getNewTopScores,
  readScoresFromLocalStorage,
  writeToLocalStorage,
} from "./utils";

interface topScoresHook {
  topScores: Score[];
  updateTopScores: (newScore: number) => void;
}

export function useTopScores(): topScoresHook {
  const [topScores, setTopScores] = useState<Score[]>(
    readScoresFromLocalStorage(topScoresKey)
  );
  const updateTopScores = useCallback(
    (newScore: number) => {
      const newTopScores = getNewTopScores(topScores, newScore);
      setTopScores(newTopScores);
      writeToLocalStorage(topScoresKey, newTopScores);
    },
    [topScores]
  );

  return { topScores, updateTopScores };
}
