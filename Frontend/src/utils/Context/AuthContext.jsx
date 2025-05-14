import { createContext, useContext, useEffect, useState } from "react";
const VITE_API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(null); // null = loading

  const checkAuth = async () => {
    try {
      const res = await fetch(`${VITE_API_BASE_URL}/auth/check-auth`, {
        credentials: "include", // Send cookies
      });

      setIsLoggedIn(res?.ok || false);
    } catch (err) {
      setIsLoggedIn(false);
    }
  };

  const logout = async () => {
    try {
      await fetch(`${VITE_API_BASE_URL}/auth/logout`, {
        method: "POST",
        credentials: "include",
      });
      setIsLoggedIn(false);
    } catch (err) {
      console.error("Logout failed", err);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, checkAuth, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
