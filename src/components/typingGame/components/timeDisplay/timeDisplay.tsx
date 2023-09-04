import { Typography } from "@mui/material";
import { timeDisplayStyle } from "./styles";
import { formatCountdown } from "./utils";

interface TimeDisplayProps {
  time: number;
}

export function TimeDisplay({ time }: TimeDisplayProps) {
  return (
    <Typography variant="h4" sx={timeDisplayStyle}>
      {formatCountdown(time)}
    </Typography>
  );
}
