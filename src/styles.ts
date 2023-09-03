import { createTheme } from "@mui/material";

export const themeLight = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#f5f5f5",
    },
  },
});

export const themeDark = createTheme({
  palette: {
    mode: "dark",
  },
});

export const gameStyle = {
  m: "10vh",
  width: "auto",
  justifyContent: "space-around",
};
