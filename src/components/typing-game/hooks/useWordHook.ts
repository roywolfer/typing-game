import { useState } from "react";
import { Word } from "../types";

export default function useWordHook(
  newWordList: Word[]
): [Word, (written: string) => void, () => void, (wordList: Word[]) => void] {
  const [wordList, setWordList] = useState(newWordList);
  const [wordIndex, setWordIndex] = useState(0);
  const [word, setWord] = useState(wordList[0]);

  return [
    word,
    (written: string) => {
      const updatedWrittenWord = { value: word.value, written };
      setWord(updatedWrittenWord);
      wordList[wordIndex] = updatedWrittenWord;
    },
    () => {
      setWordIndex(wordIndex + 1);
      setWord(wordList[wordIndex + 1]);
    },
    (newWordList: Word[]) => {
      setWordList(newWordList);
      setWordIndex(0);
      setWord(newWordList[0]);
    },
  ];
}
