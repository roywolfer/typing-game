import { DataGrid } from "@mui/x-data-grid";
import { ScoreboardRow } from "./types";
import { useMemo } from "react";
import { Score } from "./hooks/topScores/types";
import { columnDefinitions } from "./consts";

interface ScoreboardProps {
  topScores: Score[];
}

export function Scorboard({ topScores }: ScoreboardProps) {
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
