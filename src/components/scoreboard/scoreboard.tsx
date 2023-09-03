import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { ScoreboardRow } from "./types";

function formatDate(date: Date): string {
  return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
}

export function Scorboard() {
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

  const rows: ScoreboardRow[] = [
    { id: 1, wpm: 35, date: new Date() },
    { id: 2, wpm: 12, date: new Date() },
    { id: 3, wpm: 10, date: new Date() },
    { id: 4, wpm: 12, date: new Date() },
    { id: 5, wpm: 17, date: new Date() },
  ];

  return (
    <DataGrid
      hideFooterPagination
      disableRowSelectionOnClick
      disableColumnMenu
      hideFooter
      columns={columns}
      rows={rows}
    ></DataGrid>
  );
}
