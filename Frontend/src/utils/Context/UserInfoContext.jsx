import { createContext, useContext, useEffect, useState } from "react";
const VITE_API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const VITE_API_KEY = import.meta.env.VITE_API_KEY;

const UserInfoContext = createContext();

const UserInfoProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const userAddress = userData?.address || null;
  console.log(userData);

  const fetchProfile = async () => {
    try {
      const res = await fetch(`${VITE_API_BASE_URL}/api/profile`, {
        method: "GET",
        credentials: "include", // Send cookies
        headers: {
          "Content-Type": "application/json",
          nset789ewy8w7: `${VITE_API_KEY}`,
        },
      });

      if (!res.ok) throw new Error("Unauthorized or failed to fetch");

      const data = await res.json();

      setUserData(data.user); // assuming { user: {...} } response
    } catch (err) {
      console.error("Error fetching profile:", err);
    }
  };
  useEffect(() => {
    fetchProfile();
  }, []);
  return (
    <UserInfoContext.Provider
      value={{
        userData,
        userAddress,
      }}
    >
      {children}
    </UserInfoContext.Provider>
  );
};

export default UserInfoProvider;

export const useUserInfo = () => {
  return useContext(UserInfoContext);
};
