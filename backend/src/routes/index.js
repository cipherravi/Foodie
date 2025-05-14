const express = require("express");
const router = express.Router();
const v1Routes = require("./v1");
const { userAuth } = require("../middlewares");
const { userProfile } = require("../controllers");
const { saveUserAddress } = require("../controllers");

router.use("/v1", v1Routes);

router.get("/profile", userAuth, userProfile);
router.post("/address", userAuth, saveUserAddress);
module.exports = router;
