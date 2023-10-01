import { DataGrid } from "@mui/x-data-grid";
import { ScoreboardRow } from "./types";
import { useMemo } from "react";
import { columnDefinitions } from "./consts";
import { convertToRows } from "./utils";
import { useGetTopScores } from "../../hooks/topScores/useGetTopScores";
import { LinearProgress } from "@mui/material";
import { NoRowsOverlay } from "./components/noRowsOverlay/noRowsOverlay";
import { errorTopScoresString, noTopScoresString } from "./strings";

export function Scorboard() {
  const {
    data: topScores,
    isLoading: areTopScoresLoading,
    isError: didTopScoresLoadingFail,
  } = useGetTopScores();
  const rows: ScoreboardRow[] = useMemo(
    () => (topScores ? convertToRows(topScores) : []),
    [topScores]
  );

  return (
    <DataGrid
      hideFooterPagination
      disableRowSelectionOnClick
      disableColumnMenu
      hideFooter
      autoHeight
      columns={columnDefinitions}
      rows={rows}
      loading={areTopScoresLoading}
      slots={{
        loadingOverlay: LinearProgress,
        noRowsOverlay: NoRowsOverlay,
      }}
      slotProps={{
        noRowsOverlay: {
          description: didTopScoresLoadingFail
            ? errorTopScoresString
            : noTopScoresString,
        },
      }}
    />
  );
}
