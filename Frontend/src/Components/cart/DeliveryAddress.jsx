import { useState } from "react";
const VITE_API_KEY = import.meta.env.VITE_API_KEY;
import { useAuth } from "../../utils/Context/AuthContext";
import { useUserInfo } from "../../utils/Context/UserInfoContext";
const VITE_API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const DeliveryAddress = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [address, setAddress] = useState("");
  const [landmark, setLandmark] = useState("");
  const [houseFlatNo, setHouseFlatNo] = useState("");
  const [addressType, setAddressType] = useState("Home");
  const { userAddress, isLoading } = useUserInfo();

  const addressTypes = ["Home", "Work", "Other"];

  const { checkAuth } = useAuth();

  const saveAddressHandler = async () => {
    try {
      const response = await fetch(`${VITE_API_BASE_URL}/api/address`, {
        method: "POST",
        credentials: "include", // Send cookies
        headers: {
          "Content-Type": "application/json",
          nset789ewy8w7: `${VITE_API_KEY}`,
        },
        body: JSON.stringify({ address, houseFlatNo, landmark, addressType }),
      });

      const data = response.json();
      if (response.ok) {
        alert(data.message || "Address saved");
        setAddress("");
        setLandmark("");
        setHouseFlatNo("");
        setAddressType("Home");
        await checkAuth();
      } else {
        alert(data.message || "Saving Address failed!");
      }
    } catch (error) {
      console.log("ERROR", error);
      alert("An error occurred while Saving Address.");
    }
  };

  return isLoading ? (
    <div
      className="flex justify-center items-center "
      style={{ height: "calc(100vh - 80px)" }}
    >
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
    </div>
  ) : (
    <div className="w-full h-2/5  flex flex-col items-center lg:mb-5 md:pb-10 bg-white">
      <h1 className="font-gilroy-bold text-xl  p-1 ">
        Delivery Address <i className="fa-solid fa-location-dot"></i>
      </h1>
      {userAddress ? (
        <div className="w-full h-[90%] border-2 lg:mx-5  p-4 flex justify-start items-start">
          <div className="w-full md:w-1/2 lg:h-1/2 border p-2 flex gap-2">
            <i className="fa-solid fa-house text-base lg:text-2xl"></i>
            <div className="pl-4 pt-1">
              <div className="flex items-baseline gap-3">
                <p className="font-gilroy-bold">{userAddress.addressType}</p>
              </div>
              <div className=" w-full h-max flex gap-2 font-gilroy-medium">
                <p>
                  {userAddress.houseFlatNo}
                  {","} {userAddress.address} {","} {userAddress.landmark}
                </p>
              </div>
              <div className="flex gap-4 text-[#B80000] ">
                <button className="hover:text-black">Edit</button>
                <button className="hover:text-black">Select</button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="flex flex-col gap-4 w-[80%] h-1/2 mt-5">
            <input
              type="text"
              minLength="5"
              maxLength="50"
              placeholder="Address"
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
              className="border-2 h-12 p-2"
            />
            <div className="flex flex-col  w-full gap-0.5">
              <input
                type="text"
                maxLength="20"
                placeholder="House / Flat No."
                value={houseFlatNo}
                onChange={(e) => {
                  setHouseFlatNo(e.target.value);
                }}
                className="border-2 h-12 p-2"
              />
              <input
                type="text"
                minLength="5"
                maxLength="50"
                placeholder="LandMark"
                value={landmark}
                onChange={(e) => {
                  setLandmark(e.target.value);
                }}
                className="border-2 h-12 p-2"
              />
            </div>
          </div>
          <div className="w-[80%] h-20 flex mt-4">
            {addressTypes.map((label, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveIndex(activeIndex === index ? null : index); // toggle same button
                  setAddressType(label);
                }}
                className={`w-1/3 p-6 h-5 border flex justify-center items-center hover:bg-black hover:text-white ${
                  activeIndex === index ? "bg-black text-white" : ""
                }`}
              >
                <div className="flex items-center justify-center gap-1">
                  {label === "Home" && <i className="fa-solid fa-house" />}
                  {label === "Work" && <i className="fa-solid fa-briefcase" />}
                  {label === "Other" && (
                    <i className="fa-solid fa-location-dot" />
                  )}
                  {label}
                </div>
              </button>
            ))}
          </div>
          <button
            onClick={saveAddressHandler}
            className="w-2/3 h-10 p-2 text-white font-gilroy-medium mt-4 bg-[#B80000]"
          >
            SAVE ADDRESS & PROCEED
          </button>
        </>
      )}
    </div>
  );
};

export default DeliveryAddress;
