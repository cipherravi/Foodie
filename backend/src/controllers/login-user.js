const { StatusCodes } = require("http-status-codes");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/users");
const { JWT_KEY } = require("../config");

async function loginUser(req, res) {
  try {
    const { mobileNo, password } = req.body;

    const user = await User.findOne({ mobileNo: mobileNo });

    if (!user) {
      throw new Error("Invalid User");
    }
    const isPasswordVaild = await bcrypt.compare(password, user.password);

    if (isPasswordVaild) {
      // Generate JWT Token
      const token = jwt.sign({ id: user._id }, JWT_KEY);

      // Send the token as a cookie
      res.cookie("authToken", token, {
        httpOnly: true,
        secure: true,
        sameSite: "None",
      });

      return res
        .status(StatusCodes.OK)
        .json({ message: "Logged in succesfully!" });
    } else {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: "Invalid credentials" });
    }
  } catch (error) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: "Error while Logging In" });
  }
}

module.exports = loginUser;
