import { Tooltip, Button } from "@mui/material";
import RestartIcon from "@mui/icons-material/RestartAlt";
import { resetButtonStyle } from "./styles";
import { resetTitle } from "./strings";

interface ResetButtonProps {
  onReset: () => void;
}

export function ResetButton({ onReset }: ResetButtonProps) {
  return (
    <Tooltip title={resetTitle}>
      <Button onClick={onReset} variant="outlined" sx={resetButtonStyle}>
        <RestartIcon />
      </Button>
    </Tooltip>
  );
}
