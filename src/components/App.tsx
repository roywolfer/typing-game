import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import React from "react";
import TopBar from "./top-bar/top-bar";

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
  const [light, setLight] = React.useState(false);

  return (
    <ThemeProvider theme={light ? themeLight : themeDark}>
      <CssBaseline />
      <TopBar light={light} setLight={setLight} />
    </ThemeProvider>
  );
}
