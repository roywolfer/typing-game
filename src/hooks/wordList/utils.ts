export function shuffle(wordList: string[]): string[] {
  for (let i = wordList.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [wordList[i], wordList[j]] = [wordList[j], wordList[i]];
  }

  return wordList;
}
