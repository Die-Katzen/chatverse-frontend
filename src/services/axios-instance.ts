import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_API_URL;

const axiosInstance = axios.create({
  baseURL: baseURL,
});

export const authenticateInstance = (token: string | null) => {
  const newAuth = {
    Authorization: token ? `Bearer ${token}` : "",
  };

  axiosInstance.defaults.headers.common = newAuth;
  axios.defaults.headers.common = newAuth;
};

export default axiosInstance;
