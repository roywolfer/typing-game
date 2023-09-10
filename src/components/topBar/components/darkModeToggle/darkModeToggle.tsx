import { Tooltip, IconButton } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useContext } from "react";
import { DarkModeContext } from "../../../darkModeContext/darkModeContext";

export function DarkModeToggle() {
  const { isDarkTheme, toggleTheme } = useContext(DarkModeContext);
  const darkModeToggleTitle = `Turn ${isDarkTheme ? "on" : "off"} the light`;

  return (
    <Tooltip title={darkModeToggleTitle}>
      <IconButton color="inherit" onClick={toggleTheme}>
        {isDarkTheme ? <DarkModeIcon /> : <LightModeIcon />}
      </IconButton>
    </Tooltip>
  );
}
