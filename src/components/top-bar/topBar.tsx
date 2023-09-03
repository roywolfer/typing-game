import { AppBar, Toolbar, Typography, Icon } from "@mui/material";
import Logo from "../../../assets/keyboard.svg";
import { DarkModeToggle } from "./components/dark-mode-toggle/darkModeToggle";

export function TopBar() {
  return (
    <AppBar position="static" color="inherit" sx={{ display: "flex" }}>
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
        <DarkModeToggle />
      </Toolbar>
    </AppBar>
  );
}
