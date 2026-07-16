import { api } from "../../../api";
import type {
  AuthResponse,
  LoginRequest,
  RegisterRequest,
} from "../../../types";

export async function login(data: LoginRequest): Promise<AuthResponse> {
  const response = await api.post<AuthResponse>("/auth/login", data);

  return response.data;
}

export const register = (data: RegisterRequest) => {
  return api.post<AuthResponse>("/auth/register", data);
};
