import { Theme } from "@emotion/react";
import { SxProps } from "@mui/material";
import { Word } from "../../types";
import { defaultWordStyle } from "./styles";

export function getWordStyle(word: Word, currentWord: Word): SxProps<Theme> {
  return {
    ...defaultWordStyle,
    backgroundColor: getBackgroundColor(word, currentWord),
    color: getColor(word, currentWord),
  };
}

function getBackgroundColor(word: Word, currentWord: Word): string | undefined {
  if (word.value !== currentWord.value) return;

  return word.value.startsWith(word.written) ? "gray" : "red";
}

function getColor(word: Word, currentWord: Word): string | undefined {
  if (word.value === currentWord.value || !word.written) return;

  return word.value === word.written ? "green" : "red";
}
