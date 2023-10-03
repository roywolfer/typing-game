import { topScoresFetchKey } from "./consts";
import { Score } from "./types";
import { readScoresFromLocalStorage } from "./utils";
import { UseQueryResult, useQuery } from "react-query";

export function useGetTopScores(): UseQueryResult<Score[]> {
  return useQuery(topScoresFetchKey, readScoresFromLocalStorage);
}
