import { useState } from "react";
import { Word } from "../types";
import { WORDS } from "../consts";

interface WordListHook {
  wordList: Word[];
  shuffleWordList: () => void;
}

export function useWordList(): WordListHook {
  const [wordList, setWordList] = useState(getNewWordList());

  return {
    wordList,
    shuffleWordList: () => setWordList(getNewWordList()),
  };
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
