const { HomehclModels, HomehcaModels, ProductsModels, CategoryOptionsModels, UsersModels, MainSectionModels } = require("../models");
const file = require("../helpers/files");
const sequelize = require("../config/sequelize");

const EditController = {
    viewProducts: async (req, res) =>{
        let hcl = await HomehclModels.findOne();
        // console.log(hcl);
        let hca = await HomehcaModels.findOne();
        // console.log(hca);
        let pm = await ProductsModels.findAll();
        // console.log(hca);
        return res.render("productEdition", {title: "MICMAR | EDIÇÂO DE PRODUTOS", hcl, hca, pm});
    },
    viewCategory: async (req, res) =>{
        let hcl = await HomehclModels.findOne();
        // console.log(hcl);
        let hca = await HomehcaModels.findOne();
        // console.log(hca);
        let co = await CategoryOptionsModels.findAll();
        // console.log(hca);
        return res.render("categoryEdition", {title: "MICMAR | EDIÇÂO DE CATEGORIAS", hcl, hca, co});
    },
    viewUsers: async (req, res) => {
        let hcl = await HomehclModels.findOne();
        // console.log(hcl);
        let hca = await HomehcaModels.findOne();
        // console.log(hca);
        let user = await UsersModels.findOne();
        // console.log(user)
    
        return res.render("userEditon", {title: "MICMAR | EDIÇÂO DE USUÁRIOS", hcl, hca, user});
    },
    editCategory: async (req, res) => {
        let hcl = await HomehclModels.findOne();
        // console.log(hcl);
        let hca = await HomehcaModels.findOne();
        // console.log(hca);
        let co = await CategoryOptionsModels.findAll();
        
        let ms = await MainSectionModels.findAll();
        // console.log(ms);
        let pm = await ProductsModels.findAll();
        
        const {id} = req.params;
        // console.log(category_opt_singular, category_opt_plural)

    var categoryResult = await CategoryOptionsModels.findOne({
        where: {
            id: id
        }
    });
    
    if (!categoryResult) {
        return res.render("error", {
          title: "Erro de Servidor",
          message: "Nenhum categoria encontrada"
        })
      }
        return res.render("categoryEdit", { title: "Editando categoria", categoryResult, pm, ms, hcl, hca, co })
    },

    editedCategory: async (req, res) => {
        let co = await CategoryOptionsModels.findOne(
            {id, category_opt_singular, category_opt_plural} = req.body
        );




    try {
        if (!category_opt_singular || !category_opt_plural) {
            throw Error("Se chegou aqui é porque não cadastrou a categoria");
        }
        const result = await sequelize.transaction(async (t) => {
        const categoryOptions = await CategoryOptionsModels.update({
            category_opt_singular: category_opt_singular,
            category_opt_plural: category_opt_plural
        },
        {
            where: { id: id }
        });
    });

        return res.send({ title: result }).status(200);

    } catch (error) {
            return res.send({ message: "erro: " + error});
    }
},   

    editProduct: async (req, res) => {
        const { category, theme, mark, type, color, quantity, costPrice, salePrice, specialPrice, description } = req.body;
        let filename = "shoes-defaut.png";

        if (req.file) {
          filename = req.file.filename
        }

        if ( !category || !theme || !mark || !type || !color || !quantity || !costPrice || !salePrice || !specialPrice || !description ){
            return res.send({message: "Se chegou aqui é porque esqueceu de cadastrar alguma informação do produto"})
        }
    try {
        const product = await ProductsModels.edit({
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
            return res.send({message: "erro" + error})
        }
    },
    editUser: async (req, res) => {
        const isAdmin = 0;
        const { firstName, lastName, cpf, cnpj, email, telephone, mobilePhone, professionalPhone, birthDate, genre, password } = req.body;
        let filename = "shoes-defaut.png";

        if (req.file) {
          filename = req.file.filename
        }

        if ( !firstName || !lastName || !cpf || !email || !mobilePhone || !birthDate || !genre || !password ){
            return res.send({message: "Se chegou aqui é porque esqueceu de cadastrar alguma informação do usuário"})
        }
    try {
        const user = await UsersModels.edit({
            firstName,
            lastName,
            cpf,
            cnpj,
            email,
            telephone,
            mobilePhone,
            professionalPhone,
            birthDate,
            genre,
            password,
            img: filename,
            isAdmin,
        })


        return res.send({title: user}).status(200);

        } catch (error) {
            return res.send({message: "erro" + error})
        }
    },
}

module.exports = EditController