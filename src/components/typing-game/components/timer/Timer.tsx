import { Typography } from "@mui/material";
import { TIMER_STYLE } from "./styles";
import { useCountdownTimer } from "use-countdown-timer";
import { GameContext } from "../../typingGame";
import { useContext, useEffect } from "react";

const COUNTDOWN_TIME = 1000 * 10;

function formatCountdown(countdown: number): string {
  const minutes = Math.floor(countdown / (1000 * 60));
  const seconds = (countdown / 1000) % 60;

  return `${addLeadingZero(minutes)}:${addLeadingZero(seconds)}`;
}

function addLeadingZero(time: number): string | number {
  return time.toString().length === 1 ? `0${time}` : time;
}

export default function Timer() {
  const { gameState, setGameState } = useContext(GameContext);
  const { countdown, start, reset } = useCountdownTimer({
    timer: COUNTDOWN_TIME,
    resetOnExpire: false,
  });

  useEffect(() => {
    if (gameState === "starting") reset();
    if (gameState === "playing" && countdown === COUNTDOWN_TIME) start();
    if (gameState === "playing" && countdown === 0) {
      setGameState("ended");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countdown, gameState]);

  return (
    <Typography variant="h4" sx={TIMER_STYLE}>
      {formatCountdown(countdown)}
    </Typography>
  );
}
