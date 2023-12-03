var express = require("express");
var router = express.Router();
const adminLoginController = require("../../controllers/adminController/loginAdminController");
/* GET home page. */
router.get("/", adminLoginController);

module.exports = router;
