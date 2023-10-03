import { Box, Typography } from "@mui/material";
import {
  correctStyle,
  inParenthesesStyle,
  incorrectStyle,
  resultRowStyle,
  resultValueStyle,
  textBoxStyle,
  titleStyle,
} from "./styles";
import {
  lettersTypedString,
  correctWordsString,
  incorrectWordsString,
  wpmString,
} from "./strings";
import { GameStats } from "./types";

interface GameResultProps {
  gameStats: GameStats;
}

export function GameResult({ gameStats }: GameResultProps) {
  return (
    <Box sx={textBoxStyle}>
      <Box sx={titleStyle}>
        <Typography variant="h4">{wpmString}</Typography>
        <Typography variant="h4" sx={resultValueStyle}>
          {gameStats.wpm}
        </Typography>
      </Box>
      <Box sx={resultRowStyle}>
        <Typography variant="h5">{lettersTypedString}</Typography>
        <Typography variant="h5" sx={resultValueStyle}>
          {gameStats.correctLetters + gameStats.incorrectLetters}
        </Typography>
        <Typography variant="h5" sx={resultValueStyle}>
          (
          <Box sx={[inParenthesesStyle, correctStyle]}>
            {gameStats.correctLetters}
          </Box>{" "}
          |{" "}
          <Box sx={[inParenthesesStyle, incorrectStyle]}>
            {gameStats.incorrectLetters}
          </Box>
          )
        </Typography>
      </Box>
      <Box sx={resultRowStyle}>
        <Typography variant="h5">{correctWordsString}</Typography>
        <Typography variant="h5" sx={[resultValueStyle, correctStyle]}>
          {gameStats.correctWords}
        </Typography>
      </Box>
      <Box sx={resultRowStyle}>
        <Typography variant="h5">{incorrectWordsString}</Typography>
        <Typography variant="h5" sx={[resultValueStyle, incorrectStyle]}>
          {gameStats.incorrectWords}
        </Typography>
      </Box>
    </Box>
  );
}
