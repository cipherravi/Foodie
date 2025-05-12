const express = require("express");
const router = express.Router();
const v1Routes = require("./v1");
const {
  loginUser,
  registerUser,
  logoutUser,
  userProfile,
  checkAuth,
} = require("../controllers");
const { userAuth } = require("../middlewares");

router.use("/v1", v1Routes);
router.post("/signup", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.get("/profile", userAuth, userProfile);
router.get("/check-auth", checkAuth);
module.exports = router;
0;
