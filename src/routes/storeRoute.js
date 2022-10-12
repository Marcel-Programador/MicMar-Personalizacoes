const express = require("express");
const router = express.Router();
const StoreController = require("../controllers/StoreController");

router.post("/store/products", StoreController.store);

module.exports = router;