const { StatusCodes } = require("http-status-codes");
const User = require("../models/users");

async function registerUser(req, res) {
  const { mobileNo, password } = req.body;

  try {
    console.log("Received from frontend:", mobileNo, password);

    const user = new User({ mobileNo, password });

    await user.save(); // Save first
    console.log("User saved successfully"); // Then log success

    res.status(StatusCodes.CREATED).json({
      message: "User Registered Successfully !!",
    });
  } catch (err) {
    console.error("Error during user.save():", err);

    if (err.code === 11000) {
      return res.status(StatusCodes.CONFLICT).json({
        message: "Mobile number or email already registered",
      });
    }

    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: "Failed to Register User, Try again !!",
    });
  }
}

module.exports = registerUser;
