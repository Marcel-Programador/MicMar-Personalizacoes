const express = require("express");
const router = express.Router();
const HomePage = require("../controllers/HomeController");

router.get("/", HomePage.home);

module.exports = router;