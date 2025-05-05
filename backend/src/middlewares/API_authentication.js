const { StatusCodes } = require("http-status-codes");
const { API_KEY } = require("../config/server-config");
function API_authentication(req, res, next) {
  const token = req.headers["authorization"];
  if (!token || token !== API_KEY) {
    return res.status(StatusCodes.UNAUTHORIZED).json({ error: "Unauthorized" });
  }
  next();
}
module.exports = API_authentication;
