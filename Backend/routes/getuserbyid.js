const express = require("express");
const {
    userdatagetbyid,
} = require("../../controller/getbyidapi");
const jwt_token = require("../middleware/authToken");

const router = express.Router();

router.post("/getuserdatabyid", jwt_token, userdatagetbyid);

module.exports = router;
