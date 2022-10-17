const express = require("express");
const router = express.Router();
const ProductsPage = require("../controllers/ProductsController");

router.get("/:category", ProductsPage.products);

module.exports = router;