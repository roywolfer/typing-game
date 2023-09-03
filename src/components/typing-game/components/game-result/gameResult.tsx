import { Box, Typography } from "@mui/material";
import {
  resultRowStyle,
  resultValueStyle,
  textBoxStyle,
  titleStyle,
} from "./styles";
import { Word } from "../../types";
import { useMemo } from "react";
import { GameStats } from "./types";

function countCorrectLetters(word: Word) {
  const wordLength = Math.max(word.value.length, word.written.length);
  let correctCount = 0;

  for (let i = 0; i < wordLength; i++) {
    if (word.value[i] !== word.written[i]) continue;

    correctCount++;
  }

  return correctCount;
}

function getGameStats(wordList: Word[]): GameStats {
  let correctWords = 0;
  let incorrectWords = 0;
  let correctLetters = 0;
  let incorrectLetters = 0;

  wordList.every((word) => {
    if (!word.written) return false;

    if (word.value === word.written) {
      correctLetters += word.value.length;
      correctWords++;
    } else {
      const correctLettersInWord = countCorrectLetters(word);

      correctLetters += correctLettersInWord;
      incorrectLetters += word.written.length - correctLettersInWord;
      incorrectWords++;
    }

    return true;
  });

  return { correctWords, incorrectWords, correctLetters, incorrectLetters };
}

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
        <Typography variant="h4" color="primary">
          WPM:
        </Typography>
        <Typography variant="h4" color="primary" sx={resultValueStyle}>
          {wpm}
        </Typography>
      </Box>
      <Box sx={resultRowStyle}>
        <Typography variant="h5">Letters typed:</Typography>
        <Typography variant="h5" sx={resultValueStyle}>
          {correctLetters + incorrectLetters}
        </Typography>
        <Typography variant="h5" sx={resultValueStyle}>
          (
          <Box display="inline" color="green">
            {correctLetters}
          </Box>{" "}
          |{" "}
          <Box display="inline" color="red">
            {incorrectLetters}
          </Box>
          )
        </Typography>
      </Box>
      <Box sx={resultRowStyle}>
        <Typography variant="h5">Words typed correctly:</Typography>
        <Typography variant="h5" color="green" sx={resultValueStyle}>
          {correctWords}
        </Typography>
      </Box>
      <Box sx={resultRowStyle}>
        <Typography variant="h5">Words typed incorrectly:</Typography>
        <Typography variant="h5" color="red" sx={resultValueStyle}>
          {incorrectWords}
        </Typography>
      </Box>
    </Box>
  );
}
