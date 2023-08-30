import { Typography } from "@mui/material";
import { TIMER_STYLE } from "./styles";

export default function Timer() {
  return (
    <Typography variant="h4" sx={TIMER_STYLE}>
      1:00
    </Typography>
  );
}
