module.exports = (sequelize, DataTypes) => {
    const CategoryOptionsModels = sequelize.define("CategoryOptionsModels", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: true,            
        },
        category_opt_singular: {
            type: DataTypes.STRING,
            primaryKey: true,
            autoIncrement: false,
            allowNull: true,
        },
        category_opt_plural: {
            type: DataTypes.STRING,
            primaryKey: true,
            autoIncrement: false,
            allowNull: true,
        },
    },
    {
        tableName: "category_options",
        timestamps: false,
    });
    return CategoryOptionsModels
}