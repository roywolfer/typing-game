import { Grid } from "@mui/material";
import { useWordList } from "../../hooks/wordList/useWordListHook";
import { useCallback, useEffect, useMemo, useState } from "react";
import { TextBox } from "./components/textBox/textBox";
import { TextInput } from "./components/textInput/textInput";
import { ResetButton } from "./components/resetButton/restartButton";
import { textInputStyle, gridGap, textBoxStyle } from "./styles";
import { TimeDisplay } from "./components/timeDisplay/timeDisplay";
import { GameResult } from "./components/gameResult/gameResult";
import { countdownParams } from "./consts";
import { useCountdownTimer } from "use-countdown-timer";
import { getGameStats } from "./components/gameResult/utils";
import { GameStats } from "./components/gameResult/types";
import { useTopScores } from "../../hooks/topScores/useTopScores";

export function TypingGame() {
  const { updateTopScores } = useTopScores();
  const [didStartTyping, setDidStartTyping] = useState<boolean>(false);
  const [isInputDisabled, setIsInputDisabled] = useState<boolean>(false);
  const { countdown, start, reset } = useCountdownTimer(countdownParams);
  const {
    wordList,
    shuffleWordList,
    currentWord,
    nextWord,
    setCurrentWritten,
  } = useWordList();
  const gameStats = useMemo<GameStats | undefined>(
    () => (countdown === 0 ? getGameStats(wordList) : undefined),
    [countdown, wordList]
  );

  const endGame = useCallback(() => {
    setCurrentWritten("");
    setIsInputDisabled(true);

    if (gameStats?.wpm) updateTopScores(gameStats.wpm);
  }, [gameStats?.wpm, setCurrentWritten, updateTopScores]);
  const resetGame = useCallback(() => {
    shuffleWordList();
    reset();
    setIsInputDisabled(false);
    setDidStartTyping(false);
  }, [reset, shuffleWordList]);

  useEffect(() => {
    if (didStartTyping) start();
  }, [didStartTyping, start]);

  useEffect(() => {
    if (countdown === 0) endGame();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countdown]);

  return (
    <Grid container sx={gridGap}>
      <Grid item xs={12} sx={textBoxStyle}>
        {gameStats ? (
          <GameResult gameStats={gameStats} />
        ) : (
          <TextBox currentWord={currentWord} wordList={wordList} />
        )}
      </Grid>
      <Grid item xs={12} sx={[textInputStyle, gridGap]}>
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
