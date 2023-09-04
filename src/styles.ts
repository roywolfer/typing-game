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
  paddingBottom: 2,
  paddingRight: 2,
  marginTop: 2,
  marginLeft: "auto",
  marginRight: "auto",
  width: "auto",
  justifyContent: "center",
};
