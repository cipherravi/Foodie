const User = require("../models/users");
const { StatusCodes } = require("http-status-codes");

const userProfile = async (req, res) => {
  try {
    // Fetch user info from DB based on the user ID in the JWT payload
    const user = await User.findById(req.user.id).select("-password");
    if (!user) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: "User not found" });
    }

    res.status(StatusCodes.OK).json({ user });
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "Error fetching user data" });
  }
};
module.exports = userProfile;
