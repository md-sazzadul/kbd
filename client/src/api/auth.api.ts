import { api } from ".";

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
  role: "admin" | "participant";
}

export const login = (data: LoginRequest) => {
  return api.post("/auth/login", data);
};

export const register = (data: RegisterRequest) => {
  return api.post("/auth/register", data);
};
