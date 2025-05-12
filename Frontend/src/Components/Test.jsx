import { useState } from "react";
const VITE_API_KEY = import.meta.env.VITE_API_KEY;
const Test = () => {
  const [mobileNo, setMobileNo] = useState("");
  const [password, setPassword] = useState("");
  async function registerHandler() {
    try {
      const response = await fetch("http://localhost:3000/api/v1/signup", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          nset789ewy8w7: `${VITE_API_KEY}`,
        },
        body: JSON.stringify({ mobileNo, password }),
      });
      const data = await response.json;
      if (response.ok) {
        alert(data.message || "User registered successfully!");
      } else {
        alert(data.message || "Registration failed!");
      }
    } catch (err) {
      console.log("ERROR", err);
      alert("An error occurred while registering.");
    }
  }

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <input
        type="tel"
        placeholder="Mobile No."
        value={mobileNo}
        onChange={(e) => {
          setMobileNo(e.target.value);
        }}
        className="border-2"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        placeholder="Password"
        className="border-2"
      />
      <button onClick={registerHandler} className="border-2">
        Register
      </button>
    </div>
  );
};

export default Test;
