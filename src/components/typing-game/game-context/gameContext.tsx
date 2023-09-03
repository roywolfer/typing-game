import { createContext, ReactNode } from "react";
import { GameProviderValue } from "./types";

export const GameContext = createContext<GameProviderValue>({
  gameState: "starting",
  setGameState: () => {},
});

interface GameProviderProps {
  children: ReactNode;
  value: GameProviderValue;
}

export function GameProvider({ children, value }: GameProviderProps) {
  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}
