const express = require("express");
const router = express.Router();
const productsPage = require("../controllers/ProductsController");

router.get("/products", productsPage.products);

module.exports = router;