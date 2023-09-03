import { useState } from "react";
import { Word } from "../types";

interface WordHook {
  currentWord: Word;
  setWritten: (written: string) => void;
  nextWord: () => void;
  setWordList: (wordList: Word[]) => void;
}

export function useWord(newWordList: Word[]): WordHook {
  const [wordList, setWordList] = useState(newWordList);
  const [wordIndex, setWordIndex] = useState(0);
  const [word, setWord] = useState(wordList[0]);

  return {
    currentWord: word,
    setWritten: (written: string) => {
      const updatedWrittenWord = { value: word.value, written };
      setWord(updatedWrittenWord);
      wordList[wordIndex] = updatedWrittenWord;
    },
    nextWord: () => {
      setWordIndex(wordIndex + 1);
      setWord(wordList[wordIndex + 1]);
    },
    setWordList: (newWordList: Word[]) => {
      setWordList(newWordList);
      setWordIndex(0);
      setWord(newWordList[0]);
    },
  };
}
