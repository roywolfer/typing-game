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

  const shuffleWordList = useCallback(() => {
    setWordList(getNewWordList());
    setWordIndex(0);
  }, []);
  const nextWord = useCallback(() => setWordIndex(wordIndex + 1), [wordIndex]);
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
    shuffleWordList,
    currentWord: wordList[wordIndex],
    nextWord,
    setCurrentWritten,
  };
}

function getNewWordList(): Word[] {
  return shuffle([...words]).map((word) => ({ value: word, written: "" }));
}
