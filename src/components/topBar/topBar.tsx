import { AppBar, Toolbar, Typography, Icon, Box } from "@mui/material";
import Logo from "../../../assets/keyboard.svg";
import { DarkModeToggle } from "./components/darkModeToggle/darkModeToggle";
import {
  appBarStyle,
  logoContainerStyle,
  logoStyle,
  titleStyle,
} from "./styles";
import { title } from "./strings";

export function TopBar() {
  return (
    <AppBar sx={appBarStyle}>
      <Toolbar variant="dense">
        <Icon sx={logoContainerStyle}>
          <Box component="img" src={Logo} sx={logoStyle} />
        </Icon>
        <Typography variant="h6" component="div" sx={titleStyle}>
          {title}
        </Typography>
        <DarkModeToggle />
      </Toolbar>
    </AppBar>
  );
}
