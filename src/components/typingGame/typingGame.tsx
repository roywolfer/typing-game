import { Grid } from "@mui/material";
import { useWordList } from "./hooks/wordList/useWordListHook";
import { useCallback, useEffect, useState } from "react";
import { TextBox } from "./components/textBox/textBox";
import { TextInput } from "./components/textInput/textInput";
import { RestartButton } from "./components/restartButton/restartButton";
import { textInputStyle, gridGap, textBoxStyle } from "./styles";
import { TimeDisplay } from "./components/timeDisplay/timeDisplay";
import { GameState } from "./types";
import { GameResult } from "./components/gameResult/gameResult";
import { GameProvider } from "./gameContext/gameContext";
import { COUNTDOWN_TIME } from "./consts";
import { useCountdownTimer } from "use-countdown-timer";

export function TypingGame() {
  const [gameState, setGameState] = useState<GameState>("starting");
  const {
    wordList,
    shuffleWordList,
    currentWord,
    nextWord,
    setCurrentWritten,
  } = useWordList();
  const { countdown, start, reset } = useCountdownTimer({
    timer: COUNTDOWN_TIME,
    resetOnExpire: false,
  });

  const startGame = useCallback(() => {
    start();
    setGameState("playing");
  }, [start]);
  const endGame = useCallback(() => {
    setCurrentWritten("");
    setGameState("ended");
  }, [setCurrentWritten]);
  const resetGame = useCallback(() => {
    shuffleWordList();
    reset();
    setGameState("starting");
  }, [reset, shuffleWordList]);

  useEffect(() => {
    if (gameState === "playing" && countdown === 0) endGame();
  }, [countdown, endGame, gameState]);

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
            setWritten={setCurrentWritten}
            startGame={startGame}
          />
          <TimeDisplay time={countdown} />
          <RestartButton restartGame={resetGame} />
        </Grid>
      </Grid>
    </GameProvider>
  );
}
