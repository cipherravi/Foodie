const jwt = require("jsonwebtoken");
const { JWT_KEY } = require("../config");
const { StatusCodes } = require("http-status-codes");

// GET /auth/check-auth

const checkAuth = async (req, res) => {
  const token = req.cookies.authToken;

  if (!token) {
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ message: "Access denied, no token provided" });
  }
  try {
    jwt.verify(token, JWT_KEY);
    res.sendStatus(StatusCodes.OK);
  } catch {
    res.sendStatus(403);
  }
};
module.exports = checkAuth;
