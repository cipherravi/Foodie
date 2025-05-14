const { StatusCodes } = require("http-status-codes");
const logoutUser = (req, res) => {
  //Clear the JWT cookie
  res.clearCookie("authToken", {
    httpOnly: true,
    secure: false,
    sameSite: "None",
  });

  res.status(StatusCodes.OK).json({
    message: "User logged out succesfully",
  });
};

module.exports = logoutUser;
