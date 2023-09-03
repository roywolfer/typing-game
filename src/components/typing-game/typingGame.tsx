import { Grid } from "@mui/material";
import useWordListHook from "./hooks/useWordListHook";
import { createContext, useCallback, useEffect, useState } from "react";
import useWordHook from "./hooks/useWordHook";
import TextBox from "./components/text-box/textBox";
import TextInput from "./components/text-input/textInput";
import RestartButton from "./components/restart-button/restartButton";
import { GRID_GAP, TEXT_BOX_STYLE, TEXT_INPUT_STYLE } from "./styles";
import Timer from "./components/timer/Timer";
import { GameContextValue, GameState } from "./types";
import GameResult from "./components/game-result/gameResult";

export const GameContext = createContext<GameContextValue>({
  gameState: "starting",
  setGameState: () => {},
});

export default function TypingGame() {
  const [gameState, setGameState] = useState<GameState>("starting");
  const [wordList, shuffleWordList] = useWordListHook();
  const [currentWord, setWritten, nextWord, setWordList] =
    useWordHook(wordList);
  const restartGame = useCallback(() => {
    setGameState("starting");
    shuffleWordList();
  }, [shuffleWordList]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => setWordList(wordList), [wordList]);

  return (
    <GameContext.Provider value={{ gameState, setGameState }}>
      <Grid container gap={GRID_GAP}>
        <Grid item xs={12} sx={TEXT_BOX_STYLE}>
          <TextBox currentWord={currentWord} wordList={wordList} />
        </Grid>
        <Grid item gap={GRID_GAP} xs={12} sx={TEXT_INPUT_STYLE}>
          <TextInput
            currentWord={currentWord}
            nextWord={nextWord}
            setWritten={setWritten}
          />
          <Timer />
          <RestartButton restartGame={restartGame} />
        </Grid>
        {gameState === "starting" && (
          <Grid item xs={12} sx={TEXT_BOX_STYLE}>
            <GameResult />
          </Grid>
        )}
      </Grid>
    </GameContext.Provider>
  );
}
