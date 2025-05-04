import "./css/Help.css";
function Help() {
  return (
    <>
      <div className="bg-[#37718E] w-screen h-screen flex flex-col items-center  text-white ">
        <div className=" w-[90%] h-[30%] mt-12 mb-4 pl-10 pb-5 flex flex-col justify-end ">
          <h1 className="text-3xl font-bold font-gilroy-medium">
            Help & Support
          </h1>
          <h4 className="font-gilroy-light">
            Let's take a step ahead and help you better.
          </h4>
        </div>

        <div className="w-[90%] h-screen bg-white flex items-center">
          <div className="w-[25%] h-full flex items-center justify-center pl-5 ">
            <div className="w-[75%] h-[90%] bg-[#EDF1F6]">
              <ul className="text-black  h-full  font-gilroy-bold flex flex-col justify-start gap-4 mt-4 items-end">
                <li className=" bg-white w-[90%] h-[10%] p-4">
                  Partner Onboarding
                </li>
                <li className="w-[90%] h-[10%] p-4">Legal</li>
                <li className="w-[90%] h-[10%] p-4">FAQs</li>
                <li className="w-[90%] h-[10%] p-4">IRCTC FAQ</li>
              </ul>
            </div>
          </div>
          <div className="w-[75%] h-full "></div>
        </div>
      </div>
    </>
  );
}

export default Help;
