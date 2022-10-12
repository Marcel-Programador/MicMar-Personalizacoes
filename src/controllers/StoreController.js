const { HomehclModels, HomehcaModels, ProductsModels } = require("../models");

const StoreController = {
    store: async (req, res) => {
        const { category, mark, type, color, quantity, costPrice, salePrice, specialPrice, description } = req.body;
        let filename = "shoes-defaut.png";


        if (req.file) {
          filename = req.file.filename
        }

        if ( !category || !mark || !type || !color || !quantity || !costPrice || !salePrice || !specialPrice || !description ){
            return res.send({message: "Se chegou aqui é porque esqueceu de cadastrar alguma informação"})
        }
try {
    const product = await ProductsModels.create({
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
    },
    view: async (req, res) => {
        let hcl = await HomehclModels.findOne();
        // console.log(hcl);
        let hca = await HomehcaModels.findOne();
        // console.log(hca);
        return res.render("productRegistration", {title: "MICMAR | CADASTRO DE PRODUTOS", hcl, hca});
    }
}

module.exports = StoreController