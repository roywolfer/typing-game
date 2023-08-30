import { Box, Typography } from "@mui/material";
import { Word } from "../../types";
import { RefObject, useRef, useEffect } from "react";
import { TEXT_BOX_STYLE, getWordStyle } from "./styles";

interface TextBoxProps {
  currentWord: Word;
  wordList: Word[];
}

export default function TextBox({ currentWord, wordList }: TextBoxProps) {
  const ref: RefObject<HTMLElement> = useRef(null);
  useEffect(
    () => ref.current?.scrollIntoView({ block: "start" }),
    [currentWord.value]
  );

  return (
    <Box sx={TEXT_BOX_STYLE}>
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
