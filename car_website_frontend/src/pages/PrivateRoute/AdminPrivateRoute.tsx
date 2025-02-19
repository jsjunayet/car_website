import React from "react";
import { Navigate, useLocation } from "react-router-dom"; 
import { useAppSelector } from '../../redux/hooks/app';
import { jwtDecode } from "jwt-decode";

interface UserInterface {
  role: string;
  userId: string;
}

const AdminPrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const token = useAppSelector(state => state.auth.token);
  let userInfo: UserInterface | null = null; 

  if (token) {
    try {
      userInfo = jwtDecode<UserInterface>(token);
    } catch (error) {
      console.error("Invalid token", error);
    }
  }

  const location = useLocation();

  if (!token || !userInfo || userInfo.role !== "admin") {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default AdminPrivateRoute;
