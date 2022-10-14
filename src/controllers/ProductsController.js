const { HomehclModels, HomehcaModels, MainSectionModels, ProductsModels } = require("../models");

const ProductsController = {
    products: async(req, res) => {
        let hcl = await HomehclModels.findOne();
        // console.log(hcl);
        let hca = await HomehcaModels.findOne();
        // console.log(hca);
        let ms = await MainSectionModels.findAll();
        // console.log(ms);
        const { category } = req.params;
        let pm = await ProductsModels.findAll({
            where: {
              category: category
            }
          });
        // console.log(pm);
        return res.render("productsPage", {title: "MICMAR | PAGINA DE PRODUTOS", hcl, hca, ms, pm});
    }
};
module.exports = ProductsController