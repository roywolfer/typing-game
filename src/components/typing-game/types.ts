export interface Word {
  value: string;
  written: string;
}

export type GameState = "starting" | "playing" | "ended";

export interface GameContextValue {
  gameState: GameState;
  setGameState: React.Dispatch<React.SetStateAction<GameState>>;
}
