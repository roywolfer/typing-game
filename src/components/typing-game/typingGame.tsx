import { Grid } from "@mui/material";
import useWordListHook from "./hooks/useWordListHook";
import { useCallback, useEffect } from "react";
import useWordHook from "./hooks/useWordHook";
import TextBox from "./components/text-box/textBox";
import TextInput from "./components/text-input/textInput";
import RestartButton from "./components/restart-button/restartButton";
import { GRID_GAP, TEXT_BOX_STYLE, TEXT_INPUT_STYLE } from "./styles";
import Timer from "./components/timer/Timer";

export default function TypingGame() {
  const [wordList, shuffleWordList] = useWordListHook();
  const [currentWord, setWritten, nextWord, setWordList] =
    useWordHook(wordList);
  const restartGame = useCallback(() => {
    shuffleWordList();
  }, [shuffleWordList]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => setWordList(wordList), [wordList]);

  return (
    <Grid container gap={GRID_GAP}>
      <Grid item container xs={12} sx={TEXT_BOX_STYLE}>
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
    </Grid>
  );
}
