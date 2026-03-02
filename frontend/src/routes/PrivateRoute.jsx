import React from 'react'
import { Navigate } from 'react-router-dom';
import UseAuth from '../context/auth/UseAuth';

const PrivateRoute = ({ children }) => {
    const {isAuthenticated} = UseAuth(); // Replace with actual authentication logic

    if (!isAuthenticated) {
        // If the user is not authenticated, redirect to the login page or public route
        return <Navigate to="/auth/login" replace />;
    }

    return children;

}

export default PrivateRoute