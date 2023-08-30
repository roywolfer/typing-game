import { Tooltip, Button } from "@mui/material";
import RestartIcon from "@mui/icons-material/RestartAlt";
import { RESTART_BUTTON_STYLE } from "./styles";

interface RestartButtonProps {
  restartGame: () => void;
}

export default function RestartButton({ restartGame }: RestartButtonProps) {
  return (
    <Tooltip title="Restart">
      <Button
        onClick={restartGame}
        variant="outlined"
        sx={RESTART_BUTTON_STYLE}
      >
        <RestartIcon />
      </Button>
    </Tooltip>
  );
}
