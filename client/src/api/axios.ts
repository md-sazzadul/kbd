import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,

  timeout: 10000,

  headers: {
    "Content-Type": "application/json",
  },
});

/*
|--------------------------------------------------------------------------
| Request Interceptor
|--------------------------------------------------------------------------
|
| We'll automatically attach the JWT token here in Step 10.
|
*/

api.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => Promise.reject(error),
);

/*
|--------------------------------------------------------------------------
| Response Interceptor
|--------------------------------------------------------------------------
|
| Later we'll:
|
| - Handle 401 Unauthorized
| - Refresh expired tokens
| - Redirect to login
|
*/

api.interceptors.response.use(
  (response) => response,

  (error) => Promise.reject(error),
);

export default api;
