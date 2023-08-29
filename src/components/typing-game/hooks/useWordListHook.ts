import { useState } from "react";
import { Word } from "../types";
import { WORDS } from "../consts";

export default function useWordListHook(): [Word[], () => void] {
  const [wordList, setWordList] = useState(getNewWordList());

  return [wordList, () => setWordList(getNewWordList())];
}

function getNewWordList(): Word[] {
  return shuffle([...WORDS]).map((word) => ({ value: word, written: "" }));
}

function shuffle(wordList: string[]): string[] {
  for (let i = wordList.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [wordList[i], wordList[j]] = [wordList[j], wordList[i]];
  }

  return wordList;
}
