import { NoRowsOverlayProps } from "../components/scoreboard/components/noRowsOverlay/noRowsOverlay";

declare module "@mui/x-data-grid" {
  interface NoRowsOverlayPropsOverrides extends NoRowsOverlayProps {}
}
