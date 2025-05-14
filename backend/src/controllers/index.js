const restaurants = require("./restaurants-controller");
const restaurantMenu = require("./restaurantMenu-controller");
const test = require("./test-controller");
const registerUser = require("./register-user");
const loginUser = require("./login-user");
const logoutUser = require("./logout-user");
const userProfile = require("./user-profile");
const checkAuth = require("./check-auth");
const saveUserAddress = require("./save-address");

module.exports = {
  restaurants,
  restaurantMenu,
  test,
  registerUser,
  loginUser,
  logoutUser,
  userProfile,
  checkAuth,
  saveUserAddress,
};
