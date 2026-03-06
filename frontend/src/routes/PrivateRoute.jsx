import React from "react";
import { Navigate } from "react-router-dom";
import UseAuth from "../context/auth/UseAuth";

const PrivateRoute = ({ children }) => {
  const { isAuthenticated, user } = UseAuth();
  const isUser = user?.role === "user";
  // console.log(isUser);

  if (!isAuthenticated) {
    return <Navigate to="/auth/login" replace />;
  }

  if (!isUser) {
    return <Navigate to="/admin" replace />;
  }

  return children;
};

export default PrivateRoute;
