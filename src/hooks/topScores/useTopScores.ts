import { topScoresFetchKey } from "./consts";
import { Score } from "./types";
import { readScoresFromLocalStorage, writeScoresToLocalStorage } from "./utils";
import { useMutation, useQuery, useQueryClient } from "react-query";

interface topScoresHook {
  topScores: Score[];
  updateTopScores: (newScore: number) => void;
}

export function useTopScores(): topScoresHook {
  const queryClient = useQueryClient();
  const { data: topScores } = useQuery(
    topScoresFetchKey,
    readScoresFromLocalStorage
  );
  const { mutate: updateTopScores } = useMutation(writeScoresToLocalStorage, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [topScoresFetchKey] });
    },
  });

  return { topScores: topScores ?? [], updateTopScores };
}
