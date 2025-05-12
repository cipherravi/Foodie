const { StatusCodes } = require("http-status-codes");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/users");
const { JWT_KEY } = require("../config");

async function registerUser(req, res) {
  try {
    const { mobileNo, password } = req.body;

    //Hash the password
    const passwordHash = await bcrypt.hash(password, 10);

    const newUser = new User({ mobileNo, password: passwordHash });

    //save new user
    await newUser.save();

    //Generate JWT token
    const token = jwt.sign({ id: newUser._id }, JWT_KEY);
    //Send the token as a cookie
    res.cookie("authToken", token, {
      httpOnly: true,
      secure: true,
      sameSite: "None",
    });

    res.status(StatusCodes.CREATED).json({
      message: "User signed up successfully !!",
    });
  } catch (err) {
    console.error("Error during newUser.save():", err);

    if (err.code === 11000) {
      return res.status(StatusCodes.CONFLICT).json({
        message: "Mobile number or email already registered",
      });
    }

    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: "Failed to register user, Try again !!",
    });
  }
}

module.exports = registerUser;
