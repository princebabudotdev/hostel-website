import React from 'react'

const PrivateRoute = ({ children }) => {
    const isAuthenticated = false; // Replace with actual authentication logic

    if (!isAuthenticated) {
        // If the user is not authenticated, redirect to the login page or public route
        return <Navigate to="/login" replace />;
    }

    return children;

}

export default PrivateRoute