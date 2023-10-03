import { GridColDef } from "@mui/x-data-grid";
import { formatDate } from "./utils";

export const columnDefinitions: GridColDef[] = [
  { field: "id", headerName: "Place" },
  { field: "wpm", headerName: "WPM" },
  {
    field: "date",
    headerName: "Date",
    flex: 1,
    valueFormatter: (params) => formatDate(params?.value),
  },
];
