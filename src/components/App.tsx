import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import React from "react";
import DarkModeToggle from "./dark-mode-toggle/dark-mode-toggle";

const themeLight = createTheme({
  palette: {
    background: {
      default: "#e4f0e2",
    },
  },
});

const themeDark = createTheme({
  palette: {
    background: {
      default: "#222222",
    },
    text: {
      primary: "#ffffff",
    },
  },
});

export default function App() {
  const [light, setLight] = React.useState(true);

  return (
    <ThemeProvider theme={light ? themeLight : themeDark}>
      <CssBaseline />
      <DarkModeToggle light={light} setLight={setLight} />
    </ThemeProvider>
  );
}
