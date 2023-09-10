import { timeAgo } from "../../consts";

export function formatDate(date: Date): string {
  return timeAgo.format(date);
}
