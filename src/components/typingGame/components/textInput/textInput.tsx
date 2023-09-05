import { TextField } from "@mui/material";
import { Word } from "../../types";
import { useCallback, ChangeEvent, Dispatch, SetStateAction } from "react";
import { textInputStyle } from "./styles";

interface TextInputProps {
  currentWord: Word;
  nextWord: () => void;
  setWritten: (written: string) => void;
  setDidStartTyping: Dispatch<SetStateAction<boolean>>;
  disabled: boolean;
}

export function TextInput({
  currentWord,
  nextWord,
  setWritten,
  setDidStartTyping,
  disabled,
}: TextInputProps) {
  const updateWritten = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setDidStartTyping(true);
      const value = event.target.value;
      const trimmedValue = value.trim();

      if (!trimmedValue && !currentWord.written) return;

      if (trimmedValue !== value) {
        nextWord();

        return;
      }

      setWritten(value);
    },
    [currentWord.written, nextWord, setDidStartTyping, setWritten]
  );

  return (
    <TextField
      fullWidth
      value={currentWord.written}
      onChange={updateWritten}
      disabled={disabled}
      inputProps={{ style: textInputStyle }}
    />
  );
}
