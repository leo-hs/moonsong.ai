import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function loc(field: { en: string; ko: string }, lang: "en" | "ko"): string {
  return field[lang] ?? field.en;
}
