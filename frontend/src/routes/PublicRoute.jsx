import React from "react";
import { Navigate } from "react-router-dom";
import UseAuth from "../context/auth/UseAuth";

const PublicRoute = ({ children }) => {
  const { isAuthenticated, user } = UseAuth(); // Replace with actual authentication logic
  const isAdmin = user?.role === "warden" || user?.role === "warden";

  if (isAuthenticated) {
    // If the user is authenticated, redirect to the private route or dashboard
    return <Navigate to={`${isAdmin ? "/admin" : "/profile"}`} replace />;
  }
  return children;
};

export default PublicRoute;
