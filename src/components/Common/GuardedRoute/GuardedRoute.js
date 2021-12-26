import { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import {
  useNotificationContext,
  types,
} from "../../../contexts/NotificationContext";
import { useAuthContext } from "../../../contexts/AuthContext";

const GuardedRoute = () => {
  const { isAuthenticated } = useAuthContext();
  const { addNotification } = useNotificationContext();

  useEffect(() => {
    return () => {
      setTimeout(() => {
        addNotification(
          "You must be logged in for full access",
          types.warn,
          "Log In"
        );
      }, 1000);
    };
  }, []);

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default GuardedRoute;
