// src/components/PublicOnlyRoute.jsx
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Loader from "../components/Loader";

const PublicOnlyRoute = () => {
  const { user, isLoading } = useSelector((state) => state.auth);

  if (isLoading) {
    <Loader/>
  }

  // If user is logged in, redirect to dashboard
  if (user) {
    return <Navigate to="/dashboard" replace />;
  }

  // Otherwise, allow access
  return <Outlet />;
};

export default PublicOnlyRoute;
