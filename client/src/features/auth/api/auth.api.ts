import { api } from "../../../api";
import type {
  AuthResponse,
  LoginRequest,
  RegisterRequest,
} from "../../../types";

export const login = (data: LoginRequest) =>
  api.post<AuthResponse>("/auth/login", data);

export const register = (data: RegisterRequest) => {
  return api.post<AuthResponse>("/auth/register", data);
};
