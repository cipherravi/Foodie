import { Link } from "react-router-dom";
import { useState } from "react";
const VITE_API_KEY = import.meta.env.VITE_API_KEY;
const VITE_API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

import { useAuth } from "../utils/Context/AuthContext";

const SignUp = () => {
  const [mobileNo, setMobileNo] = useState("");
  const [password, setPassword] = useState("");
  const { checkAuth } = useAuth();

  const handleChange = (e) => {
    const newValue = e.target.value;

    // Only allow 10-digit numbers that start with 6,7,8, or 9
    if (/^[6-9]\d{0,9}$/.test(newValue) || newValue === "") {
      setMobileNo(newValue);
    }
  };

  async function registerHandler() {
    try {
      if (mobileNo.length !== 10) {
        alert("Mobile number must be 10 digits.");
        return;
      }

      if (password.length < 8) {
        alert("Password must be 8 characters");
        return;
      }

      const response = await fetch(`${VITE_API_BASE_URL}/auth/signup`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          nset789ewy8w7: `${VITE_API_KEY}`,
        },
        credentials: "include", // 🔥 critical to include cookies in request
        body: JSON.stringify({ mobileNo, password }),
      });
      const data = await response.json();
      if (response.ok) {
        alert(data.message || "User registered successfully!");
        setMobileNo("");
        setPassword("");
        await checkAuth(); // update context state
      } else {
        alert(data.message || "Registration failed!");
      }
    } catch (err) {
      console.log("ERROR", err);
      alert("An error occurred while registering.");
    }
  }

  return (
    <div>
      <div className="wrapper  w-screen h-[90vh]  flex justify-center items-center">
        <div className="box  flex flex-col justify-start items-center w-[70%]  h-[55%]  sm:w-[45%] md:w-[40%] lg:w-[30%] xl:w-[28%] bg-[#fde6e6]  p-8 rounded-lg shadow-lg gap-5">
          <h1 className="form-heading sm:text-3xl lg:text-4xl font-gilroy-bold text-2xl">
            Sign Up
          </h1>
          <input
            type="tel"
            placeholder="Phone Number"
            required
            min="10"
            maxLength="10"
            className="  w-[60%] h-[11%] sm:w-[52%] sm:h-[10%] md:w-[55%] lg:w-[56%] xl:w-[50%] sm:text-base mar-pad  p-3  outline-none rounded-md  text-sm"
            value={mobileNo}
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            min="8"
            maxLength="30"
            className=" w-[60%] h-[11%] sm:w-[52%] sm:h-[10%] md:w-[55%] lg:w-[56%] xl:w-[50%] sm:text-base p-3  outline-none rounded-md  text-sm"
          />
          <button
            type="submit"
            onClick={registerHandler}
            className="submit  p-2 w-[55%] h-[15%] sm:w-[52%] sm:h-[13%] md:w-[55%] lg:w-[56%] xl:w-[50%] text-xs font-gilroy-medium bg-[#b80000] cursor-pointer text-white rounded-md border-none flex items-center justify-center"
          >
            <p> Create an account </p>
          </button>
          <span className="term-condition  w-full  px-0  font-gilroy-medium text-xs  text-center ">
            By clicking on Login, I accept the{" "}
            <span className="font-bold">
              Terms & Conditions & Privacy Policy
            </span>
          </span>
          <span className="create-account  font-gilroy-medium text-sm">
            <span>or </span>
            <Link to="/login">
              <span className="   select-none font-gilroy-bold cursor-pointer">
                Login
              </span>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
