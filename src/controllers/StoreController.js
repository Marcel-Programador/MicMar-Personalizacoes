const { HomehclModels, HomehcaModels, ProductsModels, CategoryOptionsModels } = require("../models");
const file = require("../helpers/files");


const StoreController = {
    viewProducts: async (req, res) => {
        let hcl = await HomehclModels.findOne();
        // console.log(hcl);
        let hca = await HomehcaModels.findOne();
        // console.log(hca);
        let pm = await ProductsModels.findAll();
        // console.log(hca);
        return res.render("productRegistration", {title: "MICMAR | CADASTRO DE PRODUTOS", hcl, hca, pm});
    },
    viewCategory: async (req, res) => {
        let hcl = await HomehclModels.findOne();
        // console.log(hcl);
        let hca = await HomehcaModels.findOne();
        // console.log(hca);
        let co = await CategoryOptionsModels.findOne();
        // console.log(co)
    
        return res.render("categoryRegistration", {title: "MICMAR | CADASTRO DE CATEGORIA", hcl, hca, co});
    },
    storeCategory: async (req, res) => {
        const {category_opt_singular, category_opt_plural} = req.body;

console.log(category_opt_singular, category_opt_plural)
        if (!category_opt_singular || !category_opt_plural) {
            return res.send({ message: "Se chegou aqui é porque não cadastrou a categoria" });
        }
    try {
        const categoryOptions = await CategoryOptionsModels.create({
            category_opt_singular: category_opt_singular,
            category_opt_plural: category_opt_plural
        });

        return res.send({ title: categoryOptions }).status(200);

    } catch (error) {
            return res.send({ message: "erro: " + error});
    }
},
    

    storeProduct: async (req, res) => {
        const { category, theme, mark, type, color, quantity, costPrice, salePrice, specialPrice, description } = req.body;
        let filename = "shoes-defaut.png";

        if (req.file) {
          filename = req.file.filename
        }

        if ( !category || !theme || !mark || !type || !color || !quantity || !costPrice || !salePrice || !specialPrice || !description ){
            return res.send({message: "Se chegou aqui é porque esqueceu de cadastrar alguma informação do produto"})
        }
    try {
        const product = await ProductsModels.create({
            theme: theme,
            category: category,
            mark: mark,
            type: type,
            color: color,
            quantity: parseInt(quantity),
            costPrice: parseFloat(costPrice),
            salePrice: parseFloat(salePrice),
            specialPrice: parseFloat(specialPrice),
            description: description,
            img: filename
        })


        return res.send({title: product}).status(200);

        } catch (error) {
            return res.send({message: "erro"})
        }
    }
}
module.exports = StoreController
