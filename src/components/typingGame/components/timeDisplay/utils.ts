export function formatCountdown(countdown: number): string {
  const minutes = Math.floor(countdown / (1000 * 60));
  const seconds = (countdown / 1000) % 60;

  return `${addLeadingZero(minutes)}:${addLeadingZero(seconds)}`;
}

function addLeadingZero(time: number): string {
  return time.toString().length === 1 ? `0${time}` : time.toString();
}
