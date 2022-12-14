const express = require("express");
const router = express.Router();
const StoreController = require("../controllers/StoreController");
const path = require("path");
const multer = require("multer");

const multerDiskStorage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "./uploads");
    },
    filename: (req, file, callback) => {
        const imageName = Date.now() + path.extname(file.originalname);
        callback(null, imageName);
    }
});

const upload = multer({storage: multerDiskStorage});

router.get("/store/productRegistration", StoreController.viewProducts);
router.get("/store/categoryRegistration", StoreController.viewCategory);
router.post("/store/products", upload.single("avatar"), StoreController.storeProduct);
router.post("/store/category", StoreController.storeCategory);

module.exports = router;