import { Tooltip, IconButton } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useContext } from "react";
import { DarkModeContext } from "../../../dark-mode-context/darkModeContext";

export function DarkModeToggle() {
  const { isDarkTheme, toggleTheme } = useContext(DarkModeContext);

  return (
    <Tooltip title={`Turn ${isDarkTheme ? "on" : "off"} the light`}>
      <IconButton color="inherit" onClick={toggleTheme}>
        {isDarkTheme ? <DarkModeIcon /> : <LightModeIcon />}
      </IconButton>
    </Tooltip>
  );
}
