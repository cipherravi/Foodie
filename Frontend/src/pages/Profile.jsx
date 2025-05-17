import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../utils/Context/AuthContext";
import EditModal from "../Components/EditModal";
import toast from "react-hot-toast";
const VITE_API_KEY = import.meta.env.VITE_API_KEY;
const VITE_API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Profile = () => {
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [selectedTab, setSelectedTab] = useState("Orders");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  //  Fetch profile data
  useEffect(() => {
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
        navigate("/login"); // fallback if auth fails
      }
    };

    if (isLoggedIn) fetchProfile();
  }, []);

  function logoutHandler() {
    if (isLoggedIn) {
      logout();
      toast.success("User logged out succesfully");
      navigate("/login");
    }
  }
  return userData === null ? (
    <div
      className="flex justify-center items-center "
      style={{ height: "calc(100vh - 80px)" }}
    >
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
    </div>
  ) : (
    <div
      className="w-full flex justify-center items-center bg-[#36708D]"
      style={{ height: "calc(100vh - 80px)" }}
    >
      <div className="min-w-[90%] h-full flex flex-col">
        <div className="w-full h-[20%] min-h-[120px] pt-10 text-white">
          <div className="flex overflow-hidden min-h-10 lg:min-h-20 relative lg:pt-3">
            <div className="flex-1 min-w-0">
              <h1 className="font-gilroy-bold text-xl lg:text-4xl md:text-2xl truncate">
                {userData?.firstName} {userData?.lastName}
              </h1>
              <div className="flex gap-1 text-xs font-gilroy-medium sm:text-sm lg:text-base ">
                <h2>{userData?.mobileNo}</h2>{" "}
                {userData?.emailId ? (
                  <>
                    <span>.</span>
                    <div>{userData?.emailId}</div>
                  </>
                ) : (
                  <div>{userData?.emailId}</div>
                )}
              </div>
            </div>
            <div>
              <button
                onClick={() => setIsModalOpen(true)}
                className="border border-white uppercase absolute top-0 right-0 lg:top-4 text-xs w-24 font-gilroy-medium hover:bg-white hover:text-[#36708D] text-center h-6 md:w-28 md:h-7 lg:w-36 lg:h-10"
              >
                Edit Profile
              </button>
            </div>
          </div>
        </div>
        <div className="w-full h-[80%] min-h-[200px] bg-white overflow-auto px-3 pt-5 sm:px-5 lg:px-14 lg:pt-8 lg:pb-0">
          {/* Main content goes here */}
          <div className="w-full h-full  flex justify-start gap-3 lg:gap-10">
            <div className=" w-[40%]  h-[80vh]  flex justify-end bg-[#EDF1F6] sm:w-[30%] md:w-[25%] ">
              <div className="w-[90%] h-[90%] flex flex-col items-center text-xs sm:text-sm lg:text-base pt-3 sm:pt-6 lg:pt-10 font-proxima-nova-regular">
                <ul className="w-full h-full flex flex-col gap-10">
                  {[
                    { label: "Orders", icon: "fa-bag-shopping" },
                    { label: "Favourites", icon: "fa-heart" },
                    { label: "Addresses", icon: "fa-location-dot" },
                    { label: "Payments", icon: "fa-credit-card" },
                    { label: "Settings", icon: "fa-gear" },
                  ].map((item) => (
                    <li
                      key={item.label}
                      onClick={() => setSelectedTab(item.label)}
                      className={`flex gap-3 items-center pl-3 py-3 cursor-pointer  ${
                        selectedTab === item.label ? "bg-white font-bold" : ""
                      }`}
                    >
                      <i className={`fa-solid ${item.icon}`}></i>
                      <p
                        className={`select-none ${
                          selectedTab === item.label
                            ? "font-gilroy-bold"
                            : "font-gilroy-medium hover:font-gilroy-bold"
                        }`}
                      >
                        {item.label}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="w-[60%] h-full sm:w-[70%] md:w-[75%] text-xs sm:text-sm md:text-base lg:text-lg">
              {selectedTab === "Orders" && (
                <div className="w-full h-full flex items-center justify-center">
                  Your Orders Content
                </div>
              )}
              {selectedTab === "Favourites" && (
                <div className="w-full h-full flex items-center justify-center">
                  Your Favourites Content
                </div>
              )}
              {selectedTab === "Addresses" && (
                <div className="w-full h-full flex items-center justify-center">
                  Your Addresses Content
                </div>
              )}
              {selectedTab === "Payments" && (
                <div className="w-full h-full flex items-center justify-center">
                  Your Payments Content
                </div>
              )}
              {selectedTab === "Settings" && (
                <div className="w-full h-full flex items-center justify-center">
                  <button
                    className="w-32 h-12 bg-red-600 text-white rounded-md"
                    onClick={logoutHandler}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <EditModal isOpen={isModalOpen}>
        <div className="w-full max-w-md p-4 flex flex-col gap-4">
          <h2 className="text-lg font-semibold text-gray-800">Edit Profile</h2>

          {/* Name Fields */}
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder="First Name"
              className=" w-full flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Gender and Age */}
          <div className="flex flex-col sm:flex-row gap-4">
            <select
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
              className="w-full sm:w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            <input
              type="number"
              placeholder="Age"
              className="w-full sm:w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Contact Info */}
          <input
            type="tel"
            placeholder="New Mobile No."
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="New Email ID"
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="New Password"
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Buttons */}
          <div className="flex justify-end gap-3 pt-4">
            <button
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
              onClick={() => setIsModalOpen(false)}
            >
              Cancel
            </button>
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              onClick={() => {
                // Save logic here
              }}
            >
              Save
            </button>
          </div>
        </div>
      </EditModal>
    </div>
  );
};

export default Profile;
