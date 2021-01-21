var express = require("express");

var router = express.Router();

// Import the model (chores.js) to use its database functions.
var chores = require("../models/chores");












// Export routes for server.js to use.
module.exports = router;