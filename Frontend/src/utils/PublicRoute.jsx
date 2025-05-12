import { useAuth } from "../utils/Context/AuthContext";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const { isLoggedIn } = useAuth();

  if (isLoggedIn === null) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
      </div>
    ); // Optional: loading spinner
  }
  return isLoggedIn ? <Navigate to="/profile" replace /> : children;
};

export default PublicRoute;
