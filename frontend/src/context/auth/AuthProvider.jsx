import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import axiosInstance from "../../config/axios..config";
import Loader from "../../components/loader/loader";

const AuthProvider = ({ children }) => {
  const [user, setuser] = useState(null);
  const [loading, setloading] = useState(true);

  const getUser = async () => {
    try {
      const res = await axiosInstance.get("/api/v1/user/me");
      setuser(res.data.user);
    } catch (error) {
      console.log(error);
      setuser(null);
    } finally {
      setloading(false);
    }
  };

  const logout = async () => {
    try {
      await axiosInstance.get("/api/v1/auth/logout");
      await getUser();
      setloading(true);
      console.log(`logout is running`);
    } catch (err) {
      console.error("Logout error:", err);
    } finally {
      setuser(null);
      setloading(false);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

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
