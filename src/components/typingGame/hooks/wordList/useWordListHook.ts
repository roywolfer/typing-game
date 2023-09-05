import { useCallback, useState } from "react";
import { Word } from "../../types";
import { words } from "../../consts";
import { shuffle } from "./utils";

interface WordListHook {
  wordList: Word[];
  shuffleWordList: () => void;
  currentWord: Word;
  nextWord: () => void;
  setCurrentWritten: (written: string) => void;
}

export function useWordList(): WordListHook {
  const [wordList, setWordList] = useState(getNewWordList());
  const [wordIndex, setWordIndex] = useState(0);
  const setCurrentWritten = useCallback(
    (written: string) =>
      setWordList([
        ...wordList.slice(0, wordIndex),
        { ...wordList[wordIndex], written },
        ...wordList.slice(wordIndex + 1),
      ]),
    [wordIndex, wordList]
  );

  return {
    wordList,
    shuffleWordList: () => {
      setWordList(getNewWordList());
      setWordIndex(0);
    },
    currentWord: wordList[wordIndex],
    nextWord: () => setWordIndex(wordIndex + 1),
    setCurrentWritten,
  };
}

function getNewWordList(): Word[] {
  return shuffle([...words]).map((word) => ({ value: word, written: "" }));
}
