const express = require("express");
const router = express.Router();
const v1Routes = require("./v1");
const { loginUser, registerUser } = require("../controllers");

router.use("/v1", v1Routes);
router.post("/signup", registerUser);
router.post("/login", loginUser);
module.exports = router;
