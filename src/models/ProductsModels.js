module.exports = (sequelize, DataTypes) => {
    const ProductsModels = sequelize.define("ProductsModels", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: true,            
        },
        theme: {
            type: DataTypes.STRING,
            primaryKey: false,
            autoIncrement: false,
            allowNull: true,
        }, 
        category: {
            type: DataTypes.STRING,
            primaryKey: false,
            autoIncrement: false,
            allowNull: true,            
        },
        mark: {
            type: DataTypes.STRING,
            primaryKey: false,
            autoIncrement: false,
            allowNull: true,
        },
        type: {
            type: DataTypes.STRING,
            primaryKey: true,
            autoIncrement: false,
            allowNull: true,
        },
        color: {
            type: DataTypes.STRING,
            primaryKey: false,
            autoIncrement: false,
            allowNull: true,
        },
        quantity: {
            type: DataTypes.INTEGER,
            primaryKey: false,
            autoIncrement: false,
            allowNull: false,
        },
        costPrice: {
            type: DataTypes.STRING,
            primaryKey: false,
            autoIncrement: false,
            allowNull: true,
        },
        salePrice: {
            type: DataTypes.STRING,
            primaryKey: false,
            autoIncrement: false,
            allowNull: true,
        },
        specialPrice: {
            type: DataTypes.STRING,
            primaryKey: false,
            autoIncrement: false,
            allowNull: true,
        },
        description: {
            type: DataTypes.STRING,
            primaryKey: false,
            autoIncrement: false,
            allowNull: true,
        },
        img: {
            type: DataTypes.STRING,
            primaryKey: false,
            autoIncrement: false,
            allowNull: false,
        },
    },
    {
        tableName: "products",
        timestamps: false,
    });
    return ProductsModels
}