import { topScoresFetchKey } from "./consts";
import { writeScoresToLocalStorage } from "./utils";
import { UseMutationResult, useMutation, useQueryClient } from "react-query";

export function useUpdateTopScores(): UseMutationResult<
  void,
  Error | null,
  number,
  void
> {
  const queryClient = useQueryClient();

  return useMutation<void, Error | null, number, void>({
    mutationFn: writeScoresToLocalStorage,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [topScoresFetchKey] });
    },
  });
}
