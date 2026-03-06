import React from "react";
import UseAuth from "../context/auth/UseAuth";
import { Navigate } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const { isAuthenticated, user } = UseAuth();

  const isAdmin = ["admin", "warden"].includes(user?.role);
  // console.log(isAdmin);

  if (!isAuthenticated) {
    return <Navigate to="/auth/login" replace />;
  }

  if (!isAdmin) {
    return <Navigate to="/profile" replace />; // not change true to flase to true 
  }

  return children;
};

export default AdminRoute;