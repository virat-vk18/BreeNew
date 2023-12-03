const express = require("express");
const router = express.Router();
const studFarmController = require("../../controllers/userController/studFarmController");
router.get("/", studFarmController.studGet);
router.get("/alldogs", studFarmController.allStudDogs);

module.exports = router;
