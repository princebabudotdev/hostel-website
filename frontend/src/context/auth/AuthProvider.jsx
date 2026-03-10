import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import axiosInstance from "../../config/axios..config";
import Loader from '../../components/loader/Loader'
import { useToast } from "../ToastContext";
import { handleError, handleResponse } from "../../utils/apiHandler";

const AuthProvider = ({ children }) => {
  const [user, setuser] = useState(null);
  const [loading, setloading] = useState(true);
  const { showToast } = useToast();

  const getUser = async () => {
    try {
      const res = await axiosInstance.get("/api/v1/user/me");
      setuser(res?.data?.user);
      handleResponse(res, showToast);
    } catch (error) {
      handleError(error, showToast);
      setuser(null);
    } finally {
      setloading(false);
    }
  };

  const logout = async () => {
    try {
      let res = await axiosInstance.get("/api/v1/auth/logout");
      await getUser();
      setloading(true);
      handleResponse(res, showToast);
    } catch (error) {
      handleError(error, showToast);
    } finally {
      setuser(null);
      setloading(false);
    }
  };

  useEffect(() => {
    getUser();
  }, []);


  console.log(import.meta.env.VITE_API_URL);



  const value = {
    user,
    setuser,
    setloading,
    loading,
    isAuthenticated: !!user,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {loading ? <Loader /> : children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
