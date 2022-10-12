module.exports = (sequelize, DataType) => {
    const HomehclModels = sequelize.define("HomehclModels", {
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
    },{
        tableName: "header_menu_client",
        timestamps: false,
    });
    return HomehclModels
}