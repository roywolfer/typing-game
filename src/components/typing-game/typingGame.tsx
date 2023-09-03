import { Grid } from "@mui/material";
import { useWordList } from "./hooks/useWordListHook";
import { useCallback, useEffect, useState } from "react";
import { useWord } from "./hooks/useWordHook";
import { TextBox } from "./components/text-box/textBox";
import { TextInput } from "./components/text-input/textInput";
import { RestartButton } from "./components/restart-button/restartButton";
import { textInputStyle, gridGap, textBoxStyle } from "./styles";
import { Timer } from "./components/timer/Timer";
import { GameState } from "./types";
import { GameResult } from "./components/game-result/gameResult";
import { GameProvider } from "./game-context/gameContext";
import { COUNTDOWN_TIME } from "./consts";

export function TypingGame() {
  const [gameState, setGameState] = useState<GameState>("starting");
  const { wordList, shuffleWordList } = useWordList();
  const { currentWord, setWritten, nextWord, setWordList } = useWord(wordList);
  const endGame = useCallback(() => {
    setWritten("");
    setGameState("ended");
  }, [setGameState, setWritten]);
  const restartGame = useCallback(() => {
    shuffleWordList();
    setGameState("starting");
  }, [shuffleWordList]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => setWordList(wordList), [wordList]);

  return (
    <GameProvider value={{ gameState, setGameState }}>
      <Grid container gap={gridGap}>
        <Grid item xs={12} sx={textBoxStyle}>
          {gameState === "ended" ? (
            <GameResult wordList={wordList} countdownTime={COUNTDOWN_TIME} />
          ) : (
            <TextBox currentWord={currentWord} wordList={wordList} />
          )}
        </Grid>
        <Grid item gap={gridGap} xs={12} sx={textInputStyle}>
          <TextInput
            currentWord={currentWord}
            nextWord={nextWord}
            setWritten={setWritten}
          />
          <Timer countdownTime={COUNTDOWN_TIME} endGame={endGame} />
          <RestartButton restartGame={restartGame} />
        </Grid>
      </Grid>
    </GameProvider>
  );
}
