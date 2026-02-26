import React from 'react'
import { Navigate } from 'react-router-dom'

const PublicRoute = ({ children }) => {
    const isAuthenticated = false; // Replace with actual authentication logic

    if (isAuthenticated) {
        // If the user is authenticated, redirect to the private route or dashboard
        return <Navigate to="/" replace />;
    }
    return children;
}

export default PublicRoute