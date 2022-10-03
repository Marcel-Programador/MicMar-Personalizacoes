const ProductsController = {
    products: ((req, res) => {
        return res.render("productsPage", {title: "MICMAR | PRODUCTS"});
    }
)};

module.exports = ProductsController