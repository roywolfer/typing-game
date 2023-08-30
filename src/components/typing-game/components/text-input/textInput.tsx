import { TextField } from "@mui/material";
import { Word } from "../../types";
import { useCallback, ChangeEvent } from "react";
import { TEXT_INPUT_STYLE } from "./styles";

interface TextInputProps {
  currentWord: Word;
  nextWord: () => void;
  setWritten: (written: string) => void;
}

export default function TextInput({
  currentWord,
  nextWord,
  setWritten,
}: TextInputProps) {
  const updateWritten = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      const trimmedValue = value.trim();

      if (!trimmedValue && !currentWord.written) return;

      if (trimmedValue !== value) {
        nextWord();

        return;
      }

      setWritten(value);
    },
    [nextWord, setWritten, currentWord]
  );

  return (
    <TextField
      fullWidth
      value={currentWord.written}
      onChange={updateWritten}
      sx={TEXT_INPUT_STYLE}
    />
  );
}
