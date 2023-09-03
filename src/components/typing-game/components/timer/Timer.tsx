import { Typography } from "@mui/material";
import { timerStyle } from "./styles";
import { useCountdownTimer } from "use-countdown-timer";
import { useContext, useEffect } from "react";
import { GameContext } from "../../game-context/gameContext";

function formatCountdown(countdown: number): string {
  const minutes = Math.floor(countdown / (1000 * 60));
  const seconds = (countdown / 1000) % 60;

  return `${addLeadingZero(minutes)}:${addLeadingZero(seconds)}`;
}

function addLeadingZero(time: number): string | number {
  return time.toString().length === 1 ? `0${time}` : time;
}

interface TimerProps {
  countdownTime: number;
  endGame: () => void;
}

export function Timer({ countdownTime, endGame }: TimerProps) {
  const { gameState } = useContext(GameContext);
  const { countdown, start, reset } = useCountdownTimer({
    timer: countdownTime,
    resetOnExpire: false,
  });

  useEffect(() => {
    if (gameState === "starting") reset();
    if (gameState === "playing" && countdown === countdownTime) start();
    if (gameState === "playing" && countdown === 0) endGame();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countdown, gameState]);

  return (
    <Typography variant="h4" sx={timerStyle}>
      {formatCountdown(countdown)}
    </Typography>
  );
}
