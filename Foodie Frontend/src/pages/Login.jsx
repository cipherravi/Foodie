import "./css/Login.css";

import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const newValue = e.target.value;
    // Allow only digits (you can also allow empty value)
    if (/^\d{0,10}$/.test(newValue)) {
      setValue(newValue);
    }
  };
  return (
    <div>
      <div className="wrapper //area w-screen min-h-screen //layout flex justify-center items-center">
        <div className="box //layout flex flex-col justify-start items-center  //area w-[70%]  h-1/2 //responsive //start*** sm:w-[45%] md:w-[40%] lg:w-[30%] xl:w-[28%] //area //visuals //end*** //visuals bg-[#fde6e6]  p-8 rounded-lg shadow-lg gap-5">
          <h1 className="form-heading //responsive //start***  //area   //visuals sm:text-3xl  //end***  //visuals font-gilroy-bold text-2xl">
            Login
          </h1>
          <input
            type="tel"
            placeholder="Phone Number"
            required
            min="10"
            maxLength="10"
            className="number-input //area w-[60%] h-[16%] //responsive //start*** sm:w-[52%] sm:h-1/6 md:w-[55%] lg:w-[56%] xl:w-[50%] //area   //visuals sm:text-base md:text-lg   //end*** //mar-pad  p-3 //visuals outline-none rounded-md  text-sm"
            value={value}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="submit //area  w-[55%] h-[11%] //responsive //start***  sm:w-[45%] md:w-[40%] lg:w-[34%] xl:w-[30%] //area    //visuals //end***  //visuals  text-sm font-gilroy-medium bg-[#b80000] cursor-pointer text-white rounded-md border-none"
          >
            Login
          </button>
          <span className="term-condition //area w-full //responsive //start***  //area   //visuals //end***   //mar-pad px-0 //visuals font-gilroy-medium text-xs  text-center ">
            By clicking on Login, I accept the{" "}
            <span className="font-bold">
              Terms & Conditions & Privacy Policy
            </span>
          </span>
          <span className="create-account //visuals font-gilroy-medium text-sm">
            <span>or </span>
            <Link to="/signup">
              <span className="//visuals select-none font-gilroy-bold cursor-pointer">
                create an account
              </span>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Login;
