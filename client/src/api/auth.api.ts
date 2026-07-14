import { getToken } from "../utils/token";
import api from "./axios";

export const getAuthHeaders = () => {
  const token = getToken();

  return {
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
    },
  };
};

export default api;
