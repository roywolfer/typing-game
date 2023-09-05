import { Word } from "../../types";
import { defaultWordStyle } from "./styles";
import { SystemStyleObject } from "@mui/system";

export function getWordStyle(word: Word, currentWord: Word): SystemStyleObject {
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
