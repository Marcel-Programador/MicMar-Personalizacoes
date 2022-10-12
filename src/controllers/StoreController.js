const { ProductsModels } = require("../models");

const StoreController = {
    store: async (req, res) => {
        const { category, mark, type, color, quantity, costPrice, salePrice, specialPrice, description, img } = req.body;

        if ( !category || !mark || !type || !color || !quantity || !costPrice || !salePrice || !specialPrice || !description || !img ){
            return res.send({message: "Chegou até aqui pelo menos"})
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
                img: img
              })

              var products = await ProductsModels.findAll()

        return res.send({title: product, products: products});

            } catch (error) {
                return res.send({message: "erro"})
            }
        }
    }

module.exports = StoreController