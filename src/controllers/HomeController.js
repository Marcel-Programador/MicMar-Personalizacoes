const { HomehclModels, HomehcaModels, MainSectionModels, ProductsModels } = require("../models");

const HomeController = {
    show: async(req, res) => {
        let hcl = await HomehclModels.findOne();
        // console.log(hcl);
        let hca = await HomehcaModels.findOne();
        // console.log(hca);
        let ms = await MainSectionModels.findAll();
        // console.log(ms);
        let pm = await ProductsModels.findAll();
        // console.log(pm);
        return res.render("homePage", {title: "MICMAR | HOME", hcl, hca, ms, pm});
    }
};
module.exports = HomeController