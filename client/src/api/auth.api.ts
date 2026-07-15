import { api } from ".";
import type { AuthResponse, LoginRequest, RegisterRequest } from "../types";

export const login = (data: LoginRequest) => {
  return api.post<AuthResponse>("/auth/login", data);
};

export const register = (data: RegisterRequest) => {
  return api.post<AuthResponse>("/auth/register", data);
};
