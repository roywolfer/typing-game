import { createContext, PropsWithChildren } from "react";
import { GameProviderValue } from "./types";

export const GameContext = createContext<GameProviderValue>({
  gameState: "starting",
  setGameState: () => {},
});

interface GameProviderProps {
  value: GameProviderValue;
}

export function GameProvider({
  children,
  value,
}: PropsWithChildren<GameProviderProps>) {
  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}
