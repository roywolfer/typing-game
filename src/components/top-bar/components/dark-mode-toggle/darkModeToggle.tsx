import { Tooltip, IconButton } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { SetStateAction } from "react";

interface DarkModeToggleProps {
  light: boolean;
  setLight: (value: SetStateAction<boolean>) => void;
}

export default function DarkModeToggle(props: DarkModeToggleProps) {
  return (
    <Tooltip title={`Turn ${props.light ? "off" : "on"} the light`}>
      <IconButton
        color="inherit"
        onClick={() => props.setLight((prev) => !prev)}
      >
        {props.light ? <LightModeIcon /> : <DarkModeIcon />}
      </IconButton>
    </Tooltip>
  );
}
