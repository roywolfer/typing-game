import { Dispatch, SetStateAction } from "react";
import { GameState } from "../types";

export interface GameProviderValue {
  gameState: GameState;
  setGameState: Dispatch<SetStateAction<GameState>>;
}
