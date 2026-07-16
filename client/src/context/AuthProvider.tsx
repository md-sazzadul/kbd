import type { ReactNode } from "react";
import { useMemo, useState } from "react";
import type { User } from "../types";
import {
  clearAuth,
  getToken,
  getUser,
  saveToken,
  saveUser,
} from "../utils/token";
import { AuthContext } from "./AuthContext";

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(() => getUser());

  const [token, setToken] = useState<string | null>(() => getToken());

  /*
  |--------------------------------------------------------------------------
  | Login
  |--------------------------------------------------------------------------
  */

  function login(user: User, token: string) {
    saveUser(user);
    saveToken(token);

    setUser(user);
    setToken(token);
  }

  /*
  |--------------------------------------------------------------------------
  | Logout
  |--------------------------------------------------------------------------
  */

  function logout() {
    clearAuth();

    setUser(null);
    setToken(null);
  }

  /*
  |--------------------------------------------------------------------------
  | Context Value
  |--------------------------------------------------------------------------
  */

  const value = useMemo(
    () => ({
      user,
      token,
      loading: false,
      isAuthenticated: !!user && !!token,
      login,
      logout,
    }),
    [user, token],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
