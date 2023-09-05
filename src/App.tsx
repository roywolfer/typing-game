import { CssBaseline, Grid, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { TopBar } from "./components/topBar/topBar";
import { TypingGame } from "./components/typingGame/typingGame";
import { DarkModeProvider } from "./components/darkModeContext/darkModeContext";
import { gameStyle, themeDark, themeLight } from "./styles";
import { Scorboard } from "./components/scoreboard/scoreboard";

export function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const toggleTheme = () => setIsDarkTheme(!isDarkTheme);

  return (
    <DarkModeProvider value={{ isDarkTheme, toggleTheme }}>
      <ThemeProvider theme={isDarkTheme ? themeDark : themeLight}>
        <CssBaseline />
        <TopBar />
        <Grid container spacing={2} sx={gameStyle}>
          <Grid item xs={12} md={8}>
            <TypingGame />
          </Grid>
        </Grid>
        <Grid container spacing={1} sx={gameStyle}>
          <Grid item xs={12} md={8}>
            <Scorboard />
          </Grid>
        </Grid>
      </ThemeProvider>
    </DarkModeProvider>
  );
}
