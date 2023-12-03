const express = require("express");
const router = express.Router();
const marketPlaceController = require("../../controllers/userController/marketPlaceController");
router.get("/marketplace", marketPlaceController.allSellDogs);

module.exports = router;
