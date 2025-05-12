import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../utils/Context/AuthContext";
const VITE_API_KEY = import.meta.env.VITE_API_KEY;

const Profile = () => {
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();

  // 🔥 Fetch profile data
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await fetch(
          "https://foodie-backend-so1x.onrender.com/api/profile",
          {
            method: "GET",
            credentials: "include", // Send cookies
            headers: {
              "Content-Type": "application/json",
              nset789ewy8w7: `${VITE_API_KEY}`,
            },
          }
        );

        if (!res.ok) throw new Error("Unauthorized or failed to fetch");

        const data = await res.json();
        setUserData(data.user); // assuming { user: {...} } response
      } catch (err) {
        console.error("Error fetching profile:", err);
        navigate("/login"); // fallback if auth fails
      }
    };

    if (isLoggedIn) fetchProfile();
  }, [isLoggedIn, navigate]);

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
