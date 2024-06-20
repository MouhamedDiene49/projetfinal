import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ authData }) => {
  return authData?.isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
