import type { User } from "../types/auth.types";

/*
|--------------------------------------------------------------------------
| Storage Keys
|--------------------------------------------------------------------------
|
| Centralize all localStorage keys here.
| If we ever rename them, we only change them in one place.
|
*/

const STORAGE_KEYS = {
  TOKEN: "kbd_token",
  USER: "kbd_user",
} as const;

/*
|--------------------------------------------------------------------------
| Token Helpers
|--------------------------------------------------------------------------
*/

export function saveToken(token: string): void {
  localStorage.setItem(STORAGE_KEYS.TOKEN, token);
}

export function getToken(): string | null {
  return localStorage.getItem(STORAGE_KEYS.TOKEN);
}

export function removeToken(): void {
  localStorage.removeItem(STORAGE_KEYS.TOKEN);
}

/*
|--------------------------------------------------------------------------
| User Helpers
|--------------------------------------------------------------------------
*/

export function saveUser(user: User): void {
  localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(user));
}

export function getUser(): User | null {
  const storedUser = localStorage.getItem(STORAGE_KEYS.USER);

  if (!storedUser) {
    return null;
  }

  try {
    return JSON.parse(storedUser) as User;
  } catch {
    return null;
  }
}

export function removeUser(): void {
  localStorage.removeItem(STORAGE_KEYS.USER);
}

/*
|--------------------------------------------------------------------------
| Clear Authentication
|--------------------------------------------------------------------------
*/

export function clearAuth(): void {
  removeToken();
  removeUser();
}
