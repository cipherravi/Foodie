import { useAuth } from "./Context/AuthContext";

import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useAuth();

  if (isLoggedIn === null) {
    return <></>; // Optional: loading spinner
  }

  return isLoggedIn ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
