const express = require("express");
const router = express.Router();

const {
  loginUser,
  registerUser,
  logoutUser,
  userProfile,
  checkAuth,
} = require("../controllers");
const { userAuth } = require("../middlewares");

router.post("/signup", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.get("/check-auth", checkAuth);
module.exports = router;
