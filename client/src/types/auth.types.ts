/*
|--------------------------------------------------------------------------
| User Roles
|--------------------------------------------------------------------------
*/

export type Role = "admin" | "participant";

/*
|--------------------------------------------------------------------------
| User
|--------------------------------------------------------------------------
*/

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;

  createdAt?: string;
  updatedAt?: string;
}

/*
|--------------------------------------------------------------------------
| Login Request
|--------------------------------------------------------------------------
*/

export interface LoginRequest {
  email: string;
  password: string;
}

/*
|--------------------------------------------------------------------------
| Register Request
|--------------------------------------------------------------------------
*/

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
  role: Role;
}

/*
|--------------------------------------------------------------------------
| Authentication Response
|--------------------------------------------------------------------------
*/

export interface AuthResponse {
  success: boolean;
  message: string;

  data: {
    user: User;
    token: string;
  };
}

/*
|--------------------------------------------------------------------------
| Auth Context
|--------------------------------------------------------------------------
*/

export interface AuthContextType {
  user: User | null;
  token: string | null;
  loading: boolean;
  isAuthenticated: boolean;

  login: (user: User, token: string) => void;

  logout: () => void;
}
