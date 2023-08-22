const express = require("express");
const router = express.Router();
const getCountryState = require("../controller/stateController");
router.get("/:name", getCountryState.getStateName);
module.exports = router;