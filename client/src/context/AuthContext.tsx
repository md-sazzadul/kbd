import type { ReactNode } from "react";
import { createContext, useEffect, useMemo, useState } from "react";
import type { AuthContextType, User } from "../types";
import {
  clearAuth,
  getToken,
  getUser,
  saveToken,
  saveUser,
} from "../utils/token";

export const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);

  const [token, setToken] = useState<string | null>(null);

  const [loading, setLoading] = useState(true);

  /*
  |--------------------------------------------------------------------------
  | Restore Session
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    const storedUser = getUser();
    const storedToken = getToken();

    if (storedUser && storedToken) {
      setUser(storedUser);
      setToken(storedToken);
    }

    setLoading(false);
  }, []);

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
      loading,

      isAuthenticated: !!user && !!token,

      login,

      logout,
    }),
    [user, token, loading],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
