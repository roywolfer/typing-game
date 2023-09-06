export function calculateWPM(
  correctWords: number,
  countdownTime: number
): number {
  return correctWords / (countdownTime / oneMinute);
}
