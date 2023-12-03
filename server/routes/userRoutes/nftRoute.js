const express = require("express");
const router = express.Router();
const nftCreationController = require("../../controllers/userController/nftCreationController");

router.get("/", (req, res) => {
  res.send("200");
});
router.post("/sellcreation", nftCreationController.sellCreation);
router.post("/studcreation", nftCreationController.studCreation);
router.get("/marketplace", nftCreationController.getSellCreation);
module.exports = router;
