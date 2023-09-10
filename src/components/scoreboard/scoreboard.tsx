import { DataGrid } from "@mui/x-data-grid";
import { ScoreboardRow } from "./types";
import { useMemo } from "react";
import { columnDefinitions } from "./consts";
import { useTopScores } from "../../hooks/topScores/useTopScores";

export function Scorboard() {
  const { topScores } = useTopScores();
  const rows: ScoreboardRow[] = useMemo(
    () =>
      topScores.map((score, index) => ({
        id: index + 1,
        wpm: score.points,
        date: score.date,
      })),
    [topScores]
  );

  return (
    rows.length > 0 && (
      <DataGrid
        hideFooterPagination
        disableRowSelectionOnClick
        disableColumnMenu
        hideFooter
        columns={columnDefinitions}
        rows={rows}
      />
    )
  );
}
