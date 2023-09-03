import { CssBaseline, Grid, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { TopBar } from "./components/top-bar/topBar";
import { TypingGame } from "./components/typing-game/typingGame";
import { DarkModeProvider } from "./components/dark-mode-context/darkModeContext";
import { gameStyle, themeDark, themeLight } from "./styles";

export function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const changeTheme = () => setIsDarkTheme(!isDarkTheme);

  return (
    <DarkModeProvider value={{ isDarkTheme, changeTheme }}>
      <ThemeProvider theme={isDarkTheme ? themeDark : themeLight}>
        <CssBaseline />
        <TopBar />
        <Grid container spacing={1} sx={gameStyle}>
          <Grid item xs={12} md={8}>
            <TypingGame />
          </Grid>
        </Grid>
      </ThemeProvider>
    </DarkModeProvider>
  );
}
