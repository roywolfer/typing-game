import { Tooltip, Button } from "@mui/material";
import RestartIcon from "@mui/icons-material/RestartAlt";
import { restartButtonStyle } from "./styles";

interface RestartButtonProps {
  restartGame: () => void;
}

export function RestartButton({ restartGame }: RestartButtonProps) {
  return (
    <Tooltip title="Restart">
      <Button onClick={restartGame} variant="outlined" sx={restartButtonStyle}>
        <RestartIcon />
      </Button>
    </Tooltip>
  );
}
