const express = require("express");

const jwt_token = require("../middleware/authToken");
const { userdatagetbyid } = require("../controller/getbyidapi");

const router = express.Router();

router.post("/getuserdatabyid", userdatagetbyid);

module.exports = router;
