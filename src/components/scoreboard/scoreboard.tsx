import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { ScoreboardRow } from "./types";
import { formatDate } from "./utils";
import { useMemo } from "react";
import { Score } from "./hooks/topScores/types";

interface ScoreboardProps {
  topScores: Score[];
}

export function Scorboard({ topScores }: ScoreboardProps) {
  const columns: GridColDef[] = [
    { field: "id", headerName: "Place" },
    { field: "wpm", headerName: "WPM" },
    {
      field: "date",
      headerName: "Date",
      flex: 1,
      valueFormatter: (params) => formatDate(params?.value),
    },
  ];
  const rows: ScoreboardRow[] = useMemo(
    () =>
      topScores.map((score, index) => ({
        id: index + 1,
        wpm: score.score,
        date: score.date,
      })),
    [topScores]
  );

  // const rows: ScoreboardRow[] = [
  //   { id: 1, wpm: 35, date: new Date() },
  //   { id: 2, wpm: 12, date: new Date() },
  //   { id: 3, wpm: 10, date: new Date() },
  //   { id: 4, wpm: 12, date: new Date() },
  //   { id: 5, wpm: 17, date: new Date() },
  // ];

  return (
    rows.length > 0 && (
      <DataGrid
        hideFooterPagination
        disableRowSelectionOnClick
        disableColumnMenu
        hideFooter
        columns={columns}
        rows={rows}
      ></DataGrid>
    )
  );
}
