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
import { Word } from "../../types";
import { useMemo } from "react";
import { getGameStats } from "./utils";
import {
  lettersTypedString,
  correctWordsString,
  incorrectWordsString,
  wpmString,
} from "./strings";

interface GameResultProps {
  wordList: Word[];
  countdownTime: number;
}

export function GameResult({ wordList, countdownTime }: GameResultProps) {
  const { correctWords, incorrectWords, correctLetters, incorrectLetters } =
    useMemo(() => getGameStats(wordList), [wordList]);
  const wpm = useMemo(() => {
    return correctWords / (countdownTime / (1000 * 60));
  }, [countdownTime, correctWords]);

  return (
    <Box sx={textBoxStyle}>
      <Box sx={titleStyle}>
        <Typography variant="h4">{wpmString}</Typography>
        <Typography variant="h4" sx={resultValueStyle}>
          {wpm}
        </Typography>
      </Box>
      <Box sx={resultRowStyle}>
        <Typography variant="h5">{lettersTypedString}</Typography>
        <Typography variant="h5" sx={resultValueStyle}>
          {correctLetters + incorrectLetters}
        </Typography>
        <Typography variant="h5" sx={resultValueStyle}>
          (
          <Box sx={{ ...inParenthesesStyle, ...correctStyle }}>
            {correctLetters}
          </Box>{" "}
          |{" "}
          <Box sx={{ ...inParenthesesStyle, ...incorrectStyle }}>
            {incorrectLetters}
          </Box>
          )
        </Typography>
      </Box>
      <Box sx={resultRowStyle}>
        <Typography variant="h5">{correctWordsString}</Typography>
        <Typography variant="h5" sx={{ ...resultValueStyle, ...correctStyle }}>
          {correctWords}
        </Typography>
      </Box>
      <Box sx={resultRowStyle}>
        <Typography variant="h5">{incorrectWordsString}</Typography>
        <Typography
          variant="h5"
          sx={{ ...resultValueStyle, ...incorrectStyle }}
        >
          {incorrectWords}
        </Typography>
      </Box>
    </Box>
  );
}
