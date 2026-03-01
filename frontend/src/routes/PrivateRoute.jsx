import React from 'react'
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const isAuthenticated = true; // Replace with actual authentication logic

    if (!isAuthenticated) {
        // If the user is not authenticated, redirect to the login page or public route
        return <Navigate to="/auth/login" replace />;
    }

    return children;

}

export default PrivateRoute