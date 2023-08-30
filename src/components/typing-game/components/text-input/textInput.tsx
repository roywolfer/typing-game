import { TextField } from "@mui/material";
import { Word } from "../../types";
import { useCallback, ChangeEvent, useContext } from "react";
import { TEXT_INPUT_STYLE } from "./styles";
import { GameContext } from "../../typingGame";

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
      value={gameState === "playing" ? currentWord.written : ""}
      onChange={updateWritten}
      disabled={gameState === "ended"}
      sx={TEXT_INPUT_STYLE}
    />
  );
}
