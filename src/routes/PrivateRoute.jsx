import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../AuthContext'; 


const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();

    if (loading) return <p>Loading...</p>;
    return user ? children : <Navigate to="/" />
};

export default PrivateRoute;
    