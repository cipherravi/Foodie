const Address = require("../models/address");
const User = require("../models/users");
const { StatusCodes } = require("http-status-codes");

const saveUserAddress = async (req, res) => {
  try {
    const userId = req.user.id;

    const { address, houseFlatNo, landmark, addressType } = req.body;
    // 682226af73c1a521dda910db
    const newAddress = new Address({
      address,
      houseFlatNo,
      landmark,
      addressType,
    });
    await newAddress.save();

    console.log(newAddress._id);
    // Add address id to user

    await User.findByIdAndUpdate(userId, {
      address: newAddress._id,
    });

    res.status(StatusCodes.OK).json({
      message: "Address saved ",
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: `${error} : Fail to save address`,
    });
  }
};

module.exports = saveUserAddress;
