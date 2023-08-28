import { CssBaseline, Grid, ThemeProvider, createTheme } from "@mui/material";
import React from "react";
import TopBar from "./top-bar/top-bar";
import TypingGame from "./typing-game/typing-game";

const themeLight = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#f5f5f5",
    },
  },
});

const themeDark = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function App() {
  const [light, setLight] = React.useState(false);

  return (
    <ThemeProvider theme={light ? themeLight : themeDark}>
      <CssBaseline />
      <TopBar light={light} setLight={setLight} />
      <Grid
        container
        spacing={1}
        justifyContent="space-around"
        sx={{ m: "10vh", width: "auto" }}
      >
        <Grid item xs={12} md={8}>
          <TypingGame />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
