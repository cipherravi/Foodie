import { useNavigate } from "react-router-dom";
import { useAuth } from "../utils/Context/AuthContext";
const Profile = () => {
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();
  function logoutHandler() {
    if (isLoggedIn) {
      logout();
      navigate("/login");
    }
  }
  return (
    <div
      className="w-full flex justify-center items-center"
      style={{ height: "calc(100vh - 80px)" }}
    >
      <button
        className="w-32 h-12 bg-red-600 text-white rounded-md"
        onClick={logoutHandler}
      >
        Logout
      </button>
    </div>
  );
};

export default Profile;
