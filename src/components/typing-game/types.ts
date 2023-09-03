export interface Word {
  value: string;
  written: string;
}

export type GameState = "starting" | "playing" | "ended";
