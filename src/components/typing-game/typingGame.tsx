import {
  Box,
  Button,
  Grid,
  SxProps,
  TextField,
  Theme,
  Tooltip,
  Typography,
} from "@mui/material";
import RestartIcon from "@mui/icons-material/RestartAlt";
import useWordListHook from "./hooks/useWordListHook";
import { useCallback, useEffect, ChangeEvent, useRef, RefObject } from "react";
import useWordHook from "./hooks/useWordHook";
import { Word } from "./types";

function getWordStyle(word: Word, currentWord: Word): SxProps<Theme> {
  let backgroundColor: string | undefined = undefined;
  let color: string | undefined = undefined;

  if (word.value === currentWord.value) {
    backgroundColor = word.value.startsWith(word.written) ? "gray" : "red";
  } else if (word.written.trim()) {
    color = word.value === word.written ? "green" : "red";
  }

  return {
    backgroundColor,
    color,
    height: "2em",
    borderRadius: "4px",
    lineHeight: "2em",
    padding: "0 0.2em",
  };
}

export default function TypingGame() {
  const [wordList, shuffleWordList] = useWordListHook();
  const [currentWord, setWritten, nextWord, setWordList] =
    useWordHook(wordList);
  const restartGame = useCallback(() => {
    shuffleWordList();
  }, [shuffleWordList]);
  const updateWritten = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      const trimmedValue = value.trim();

      if (!trimmedValue && !currentWord.written) return;

      if (trimmedValue !== value) {
        nextWord();

        return;
      }

      setWritten(value);
    },
    [nextWord, setWritten, currentWord]
  );
  const ref: RefObject<HTMLElement> = useRef(null);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => setWordList(wordList), [wordList]);
  useEffect(
    () => ref.current?.scrollIntoView({ block: "start" }),
    [currentWord.value]
  );

  return (
    <Grid container rowSpacing={{ xs: 1 }}>
      <Grid
        item
        container
        xs={12}
        sx={{ border: "1px solid", borderRadius: "4px", paddingTop: 0 }}
      >
        <Box
          display="flex"
          flexWrap="wrap"
          sx={{
            height: "5em",
            margin: "0.5em",
            overflow: "hidden",
            justifyContent: "space-between",
          }}
        >
          {wordList.map((word) => (
            <Typography
              key={word.value}
              ref={word === currentWord ? ref : null}
              variant="h6"
              component="span"
              sx={getWordStyle(word, currentWord)}
            >
              {word.value}
            </Typography>
          ))}
        </Box>
      </Grid>
      <Grid item display="flex" gap={{ xs: 1, md: 2 }} xs={12}>
        <TextField
          fullWidth
          value={currentWord.written}
          onChange={updateWritten}
          sx={{
            ".MuiInputBase-input": { fontSize: "1.25rem", fontWeight: 500 },
          }}
        />
        <Typography variant="h4" display="flex" alignItems="center">
          1:00
        </Typography>
        <Tooltip title="Restart">
          <Button onClick={restartGame} variant="outlined" sx={{ minWidth: 0 }}>
            <RestartIcon />
          </Button>
        </Tooltip>
      </Grid>
    </Grid>
  );
}
