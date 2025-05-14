const jwt = require("jsonwebtoken");
const { StatusCodes } = require("http-status-codes");
const { JWT_KEY } = require("../config");

const userAuth = async (req, res, next) => {
  try {
    const token = req.cookies.authToken;
    if (!token) {
      return res
        .status(StatusCodes.FORBIDDEN)
        .json({ message: "Access denied, no token provided" });
    }
    const decoded = await jwt.verify(token, JWT_KEY);
    req.user = decoded;

    next();
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({
      message: " Invalid token",
    });
  }
};

module.exports = userAuth;
