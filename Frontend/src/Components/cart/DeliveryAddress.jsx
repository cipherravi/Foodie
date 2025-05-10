import { useState } from "react";

const DeliveryAddress = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const addressType = ["Home", "Work", "Other"];
  return (
    <div className="w-full h-[60%]  flex flex-col items-center">
      <h1 className="font-gilroy-bold text-xl  p-2 ">
        Delivery Address <i className="fa-solid fa-location-dot"></i>
      </h1>
      <div className="flex flex-col gap-7 w-[80%] h-1/2 mt-5">
        <input
          type="text"
          placeholder="Address"
          className="border-2 h-14 p-2"
        />
        <div className="flex flex-col  w-full ">
          <input
            type="text"
            placeholder="Door / Flat No."
            className="border-2 border-b-0 h-14 p-2"
          />
          <input
            type="text"
            placeholder="LandMark"
            className="border-2 h-14 p-2"
          />
        </div>
      </div>
      {/*  */}
      <div className="w-[80%] h-max flex">
        {addressType.map((label, index) => (
          <button
            key={index}
            onClick={
              () => setActiveIndex(activeIndex === index ? null : index) // toggle same button
            }
            className={`w-1/3 p-6 h-5 border flex justify-center items-center hover:bg-black hover:text-white ${
              activeIndex === index ? "bg-black text-white" : ""
            }`}
          >
            <div className="flex items-center justify-center gap-1">
              {label === "Home" && <i className="fa-solid fa-house" />}
              {label === "Work" && <i className="fa-solid fa-briefcase" />}
              {label === "Other" && <i className="fa-solid fa-location-dot" />}
              {label}
            </div>
          </button>
        ))}
      </div>
      {/*  */}
      <button className="w-2/3 h-10 p-2 text-white font-gilroy-medium mt-10 bg-[#B80000]">
        SAVE ADDRESS & PROCEED
      </button>
    </div>
  );
};

export default DeliveryAddress;
