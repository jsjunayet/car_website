import React from "react";
import { Navigate, useLocation } from "react-router-dom"; 
import { useAppSelector } from '../../redux/hooks/app';

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const token = useAppSelector(state => state.auth.token);
  const location = useLocation();
  if (!token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return <>{children}</>;
};

export default PrivateRoute;

