const { StatusCodes } = require("http-status-codes");
const bcrypt = require("bcrypt");
const User = require("../models/users");

async function loginUser(req, res) {
  try {
    const { mobileNo, password } = req.body;

    const user = await User.findOne({ mobileNo: mobileNo });
    if (!user) {
      throw new Error("Invalid User");
    }
    const isPasswordVaild = await bcrypt.compare(password, user.password);

    if (isPasswordVaild) {
      return res.status(StatusCodes.OK).json({ message: "Login Succesfull" });
    } else {
      return res
        .status(StatusCodes.OK)
        .json({ message: "Invalid Credentials" });
    }
  } catch (error) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: "Invalid Credentials" });
  }
}

module.exports = loginUser;
