import React from 'react'
import { Navigate } from 'react-router-dom'
import UseAuth from '../context/auth/UseAuth';

const PublicRoute = ({ children }) => {
    const {isAuthenticated} = UseAuth(); // Replace with actual authentication logic

    if (isAuthenticated) {
        // If the user is authenticated, redirect to the private route or dashboard
        return <Navigate to="/profile" replace />;
    }
    return children;
}

export default PublicRoute