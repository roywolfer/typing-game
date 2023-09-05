import { Grid } from "@mui/material";
import { useWordList } from "./hooks/wordList/useWordListHook";
import { useCallback, useEffect, useState } from "react";
import { TextBox } from "./components/textBox/textBox";
import { TextInput } from "./components/textInput/textInput";
import { ResetButton } from "./components/resetButton/restartButton";
import { textInputStyle, gridGap, textBoxStyle } from "./styles";
import { TimeDisplay } from "./components/timeDisplay/timeDisplay";
import { GameResult } from "./components/gameResult/gameResult";
import { countdownTime } from "./consts";
import { useCountdownTimer } from "use-countdown-timer";

export function TypingGame() {
  const [didStartTyping, setDidStartTyping] = useState<boolean>(false);
  const [isInputDisabled, setIsInputDisabled] = useState<boolean>(false);
  const { countdown, start, reset } = useCountdownTimer({
    timer: countdownTime,
    resetOnExpire: false,
  });
  const {
    wordList,
    shuffleWordList,
    currentWord,
    nextWord,
    setCurrentWritten,
  } = useWordList();

  const startGame = useCallback(() => {
    start();
  }, [start]);
  const endGame = useCallback(() => {
    setCurrentWritten("");
    setIsInputDisabled(true);
  }, [setCurrentWritten]);
  const resetGame = useCallback(() => {
    shuffleWordList();
    reset();
    setIsInputDisabled(false);
  }, [reset, shuffleWordList]);

  useEffect(() => {
    if (didStartTyping) startGame();
  }, [didStartTyping, startGame]);

  useEffect(() => {
    if (countdown === 0) endGame();
  }, [countdown, endGame]);

  return (
    <Grid container gap={gridGap}>
      <Grid item xs={12} sx={textBoxStyle}>
        {countdown === 0 ? (
          <GameResult wordList={wordList} countdownTime={countdownTime} />
        ) : (
          <TextBox currentWord={currentWord} wordList={wordList} />
        )}
      </Grid>
      <Grid item gap={gridGap} xs={12} sx={textInputStyle}>
        <TextInput
          currentWord={currentWord}
          nextWord={nextWord}
          setWritten={setCurrentWritten}
          setDidStartTyping={setDidStartTyping}
          disabled={isInputDisabled}
        />
        <TimeDisplay time={countdown} />
        <ResetButton onReset={resetGame} />
      </Grid>
    </Grid>
  );
}
