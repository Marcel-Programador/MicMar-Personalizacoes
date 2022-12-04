const express = require("express");
const router = express.Router();
const EditController = require("../controllers/EditController");
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

router.get("/productEdition", EditController.viewProducts);
router.get("/categoryEdition", EditController.viewCategory);
router.get("/categoryEdition/view/:id?", EditController.editCategory);
router.get("/categoryEdition/edit/:id?", EditController.editCategory);

router.get("/userEdition", EditController.viewUsers);
router.post("/products", upload.single("avatar"), EditController.editProduct);
router.post("/users", upload.single("avatar"), EditController.editUser);
router.put("/category/:id", EditController.editedCategory);

module.exports = router;