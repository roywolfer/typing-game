import { Theme } from "@emotion/react";
import { SxProps } from "@mui/material";
import { Word } from "../../types";

export const TEXT_BOX_STYLE = {
  display: "flex",
  flexWrap: "wrap",
  height: "5em",
  margin: "0.5em",
  overflow: "hidden",
  justifyContent: "space-between",
};

export function getWordStyle(word: Word, currentWord: Word): SxProps<Theme> {
  let backgroundColor: string | undefined = undefined;
  let color: string | undefined = undefined;

  if (word.value === currentWord.value) {
    backgroundColor = word.value.startsWith(word.written) ? "gray" : "red";
  } else if (word.written.trim()) {
    color = word.value === word.written ? "green" : "red";
  }

  return {
    backgroundColor,
    color,
    height: "2em",
    borderRadius: "4px",
    lineHeight: "2em",
    padding: "0 0.2em",
  };
}
