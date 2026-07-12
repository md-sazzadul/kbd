const TOKEN_KEY = "kbd_token";
const USER_KEY = "kbd_user";

export const saveToken = (token: string) => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const getToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};

export const removeToken = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
};

export const saveUser = (user: unknown) => {
  localStorage.setItem(USER_KEY, JSON.stringify(user));
};

export const getUser = () => {
  const value = localStorage.getItem(USER_KEY);
  return value ? JSON.parse(value) : null;
};
