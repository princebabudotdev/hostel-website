import axiosInstance from "../config/axios..config";

const registerApi = async (registerData) => {
  return axiosInstance.post("/api/v1/auth/register", registerData);
};

const loginApi = async (loginData) => {
  return axiosInstance.post("/api/v1/auth/login", loginData);
};

const googleLoginApi = () => {
  return (window.location.href = `${import.meta.env.VITE_API_URL}/api/v1/auth/google`);
};

export default {
  registerApi,
  loginApi,
  googleLoginApi,
};
