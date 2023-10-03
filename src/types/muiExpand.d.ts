import { NoRowsOverlayProps } from "../components/scoreboard/components/noRowsOverlay";

declare module "@mui/x-data-grid" {
  interface NoRowsOverlayPropsOverrides extends NoRowsOverlayProps {}
}
