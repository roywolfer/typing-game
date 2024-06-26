import { Box, Typography } from "@mui/material";
import { Word } from "../../types";
import { RefObject, useRef, useEffect } from "react";
import { textBoxStyle } from "./styles";
import { getWordStyle } from "./utils";
import { scrollOptions } from "./consts";

interface TextBoxProps {
  currentWord: Word;
  wordList: Word[];
}

export function TextBox({ currentWord, wordList }: TextBoxProps) {
  const ref: RefObject<HTMLElement> = useRef(null);
  useEffect(
    () => ref.current?.scrollIntoView(scrollOptions),
    [currentWord.value]
  );

  return (
    <Box sx={textBoxStyle}>
      {wordList.map((word) => (
        <Typography
          key={word.value}
          ref={word === currentWord ? ref : null}
          variant="h6"
          component="span"
          sx={getWordStyle(word, currentWord)}
        >
          {word.value}
        </Typography>
      ))}
    </Box>
  );
}
