import { countdownTime } from "../../consts";
import { Word } from "../../types";
import { GameStats } from "./types";

export function getGameStats(wordList: Word[]): GameStats {
  let correctWords = 0;
  let incorrectWords = 0;
  let correctLetters = 0;
  let incorrectLetters = 0;

  wordList.every((word) => {
    if (!word.written) return false;

    if (word.value === word.written) {
      correctLetters += word.value.length;
      correctWords++;

      return true;
    }

    const correctLettersInWord = countCorrectLetters(word);
    correctLetters += correctLettersInWord;
    incorrectLetters += word.written.length - correctLettersInWord;
    incorrectWords++;

    return true;
  });

  return {
    wpm: calculateWPM(correctWords, countdownTime),
    correctWords,
    incorrectWords,
    correctLetters,
    incorrectLetters,
  };
}

function countCorrectLetters(word: Word) {
  const wordLength = Math.max(word.value.length, word.written.length);
  let correctCount = 0;

  for (let i = 0; i < wordLength; i++) {
    if (word.value[i] === word.written[i]) correctCount++;
  }

  return correctCount;
}

function calculateWPM(correctWords: number, countdownTime: number): number {
  return correctWords / (countdownTime / (1000 * 60));
}
