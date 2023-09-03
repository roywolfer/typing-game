import { Box, Typography } from "@mui/material";
import {
  RESULT_ROW_STYLE,
  RESULT_VALUE_STYLE,
  TEXT_BOX_STYLE,
  TITLE_STYLE,
} from "./styles";

export default function GameResult() {
  return (
    <Box sx={TEXT_BOX_STYLE}>
      <Typography variant="h4" color="primary" sx={TITLE_STYLE}>
        Result
      </Typography>
      <Box sx={RESULT_ROW_STYLE}>
        <Typography variant="h5">WPM:</Typography>
        <Typography variant="h5" sx={RESULT_VALUE_STYLE}>
          63
        </Typography>
      </Box>
      <Box sx={RESULT_ROW_STYLE}>
        <Typography variant="h5">Letters typed:</Typography>
        <Typography variant="h5" sx={RESULT_VALUE_STYLE}>
          110
        </Typography>
        <Typography variant="h5" sx={RESULT_VALUE_STYLE}>
          (102 | 8)
        </Typography>
      </Box>
      <Box sx={RESULT_ROW_STYLE}>
        <Typography variant="h5">Words typed correct:</Typography>
        <Typography variant="h5" sx={RESULT_VALUE_STYLE}>
          10
        </Typography>
      </Box>
      <Box sx={RESULT_ROW_STYLE}>
        <Typography variant="h5">Words typed wrong:</Typography>
        <Typography variant="h5" sx={RESULT_VALUE_STYLE}>
          8
        </Typography>
      </Box>
    </Box>
  );
}
