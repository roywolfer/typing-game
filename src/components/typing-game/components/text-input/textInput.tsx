import { TextField } from "@mui/material";
import { Word } from "../../types";
import { useCallback, ChangeEvent, useContext } from "react";
import { textInputStyle } from "./styles";
import { GameContext } from "../../game-context/gameContext";

interface TextInputProps {
  currentWord: Word;
  nextWord: () => void;
  setWritten: (written: string) => void;
}

export function TextInput({
  currentWord,
  nextWord,
  setWritten,
}: TextInputProps) {
  const { gameState, setGameState } = useContext(GameContext);
  const updateWritten = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      if (gameState === "starting") setGameState("playing");

      const value = event.target.value;
      const trimmedValue = value.trim();

      if (!trimmedValue && !currentWord.written) return;

      if (trimmedValue !== value) {
        nextWord();

        return;
      }

      setWritten(value);
    },
    [gameState, setGameState, currentWord.written, setWritten, nextWord]
  );

  return (
    <TextField
      fullWidth
      value={currentWord.written}
      onChange={updateWritten}
      disabled={gameState === "ended"}
      sx={textInputStyle}
    />
  );
}
