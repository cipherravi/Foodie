const express = require("express");
const router = express.Router();

const {
  loginUser,
  registerUser,
  logoutUser,
  checkAuth,
} = require("../controllers");

router.post("/signup", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.get("/check-auth", checkAuth);
module.exports = router;
