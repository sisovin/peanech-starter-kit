import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Define our own cn function directly
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export type { ClassValue };
