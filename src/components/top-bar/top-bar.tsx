import { AppBar, Toolbar, Typography, Icon } from "@mui/material";
import { SetStateAction } from "react";
import Logo from "../../../assets/keyboard.svg";
import DarkModeToggle from "../dark-mode-toggle/dark-mode-toggle";

interface TopBarProps {
  light: boolean;
  setLight: (value: SetStateAction<boolean>) => void;
}

export default function TopBar(props: TopBarProps) {
  return (
    <AppBar position="static" color="secondary" sx={{ display: "flex" }}>
      <Toolbar variant="dense">
        <Icon sx={{ mr: 2 }}>
          <img src={Logo} height={25} width={25} />
        </Icon>
        <Typography
          variant="h6"
          color="inherit"
          component="div"
          sx={{ flexGrow: 1 }}
        >
          Typing Game
        </Typography>
        <DarkModeToggle light={props.light} setLight={props.setLight} />
      </Toolbar>
    </AppBar>
  );
}
