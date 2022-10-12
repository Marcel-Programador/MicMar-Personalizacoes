module.exports = (sequelize, DataType) => {
    const HomehcaModels = sequelize.define("HomehcaModels", {
        title_position_1: {
            type: DataType.STRING,
            primaryKey: true,
            autoIncrement: false,
            allowNull: false,            
        },
        title_position_2: {
            type: DataType.STRING,
            primaryKey: true,
            autoIncrement: false,
            allowNull: false,            
        },
        title_position_3: {
            type: DataType.STRING,
            primaryKey: true,
            autoIncrement: false,
            allowNull: false,
        },
        title_position_4: {
            type: DataType.STRING,
            primaryKey: true,
            autoIncrement: false,
            allowNull: false,
        },
        title_position_5: {
            type: DataType.STRING,
            primaryKey: true,
            autoIncrement: false,
            allowNull: false,
        },
    },{
        tableName: "header_menu_category",
        timestamps: false,
    });
    return HomehcaModels
}