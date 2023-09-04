import { TextField } from "@mui/material";
import { Word } from "../../types";
import { useCallback, ChangeEvent, useContext } from "react";
import { GameContext } from "../../gameContext/gameContext";
import { textInputStyle } from "./styles";

interface TextInputProps {
  currentWord: Word;
  nextWord: () => void;
  setWritten: (written: string) => void;
  startGame: () => void;
}

export function TextInput({
  currentWord,
  nextWord,
  setWritten,
  startGame,
}: TextInputProps) {
  const { gameState } = useContext(GameContext);
  const updateWritten = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      if (gameState === "starting") startGame();

      const value = event.target.value;
      const trimmedValue = value.trim();

      if (!trimmedValue && !currentWord.written) return;

      if (trimmedValue !== value) {
        nextWord();

        return;
      }

      setWritten(value);
    },
    [gameState, startGame, currentWord, setWritten, nextWord]
  );

  return (
    <TextField
      fullWidth
      value={currentWord.written}
      onChange={updateWritten}
      disabled={gameState === "ended"}
      inputProps={{ style: textInputStyle }}
    />
  );
}
