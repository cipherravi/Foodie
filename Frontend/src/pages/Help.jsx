import { useState } from "react";

function Help() {
  const [selectedTab, setSelectedTab] = useState("General issues");

  return (
    <div
      className="w-full flex justify-center items-center bg-[#36708D]"
      style={{ height: "calc(100vh - 80px)" }}
    >
      <div className="min-w-[90%] h-full flex flex-col">
        <div className="w-full h-[20%] min-h-[120px] pt-10 text-white lg:pl-10">
          <div className="flex overflow-hidden  lg:pt-3">
            <div className="flex-1 min-w-0">
              <h1 className="font-gilroy-medium text-xl lg:text-4xl md:text-2xl truncate">
                Help & Support
              </h1>
              <div className="flex gap-1 text-xs font-gilroy-light sm:text-sm lg:text-base">
                <h2>Let's take a step ahead and help you better.</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[80%] min-h-[200px] bg-white overflow-auto px-3 pt-5 sm:px-5 lg:px-14 lg:pt-8 lg:pb-0">
          {/* Main content goes here */}
          <div className="w-full h-full  flex justify-start gap-3 lg:gap-10">
            <div className=" w-[40%]  h-full  flex justify-end bg-[#EDF1F6] sm:w-[30%] md:w-[25%] ">
              <div className="w-[90%] h-[90%] flex flex-col items-center text-xs sm:text-sm lg:text-base pt-3 sm:pt-6 lg:pt-10 font-proxima-nova-regular">
                <ul className="w-full h-full flex flex-col gap-10">
                  {[
                    { label: "General issues" },
                    { label: "Partner Onboarding" },
                    { label: "Legal" },
                    { label: "FAQs" },
                    { label: "IRCTC FAQ" },
                  ].map((item) => (
                    <li
                      key={item.label}
                      onClick={() => setSelectedTab(item.label)}
                      className={`flex gap-3 items-center pl-3 py-3 cursor-pointer  ${
                        selectedTab === item.label ? "bg-white font-bold" : ""
                      }`}
                    >
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
              {selectedTab === "General issues" && (
                <div className="w-full h-full flex items-center justify-center">
                  Your General issues Content
                </div>
              )}
              {selectedTab === "Partner Onboarding" && (
                <div className="w-full h-full flex items-center justify-center">
                  Your Partner Onboarding Content
                </div>
              )}
              {selectedTab === "Legal" && (
                <div className="w-full h-full flex items-center justify-center">
                  Your Legal Content
                </div>
              )}
              {selectedTab === "FAQs" && (
                <div className="w-full h-full flex items-center justify-center">
                  Your FAQs Content
                </div>
              )}
              {selectedTab === "IRCTC FAQ" && (
                <div className="w-full h-full flex items-center justify-center">
                  Your IRCTC FAQ Content
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Help;
