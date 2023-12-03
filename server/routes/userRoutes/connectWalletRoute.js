const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
require("dotenv").config();

const AddressStore = require("../../models/userModels/storeAddrress");

router.post("/wallet", async (req, res) => {
  const { address } = req.body;
  try {
    const exisistingAddress = await AddressStore.findOne({
      address: address,
    });
    let id;
    if (exisistingAddress) {
      const accessToken = jwt.sign(
        {
          address: exisistingAddress.address,
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "1h" }
      );
      id = exisistingAddress._id;
      res.status(200).json({ message: "Created Token", accessToken, id });
      return;
    }
    const newAddress = new AddressStore({
      address: address,
    });
    await newAddress.save();
    const accessToken = jwt.sign(
      {
        address: address,
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "1h" }
    );
    id = newAddress._id;
    res
      .status(200)
      .json({ message: "Adress Saved Sucessfully", accessToken, id });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
