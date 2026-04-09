import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date | string) {
  const d = new Date(date);
  return d.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
}

export function formatPhoneNumber(phone: string) {
  // Format Ghana phone numbers
  if (phone.startsWith('0')) {
    return '+233' + phone.slice(1);
  }
  if (phone.startsWith('233')) {
    return '+' + phone;
  }
  return phone;
}

export function formatTime(time: string) {
  // time is in format like "10:00 AM"
  return time;
}
