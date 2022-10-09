module.exports = (sequelize, DataType) => {
    const Homehcl = sequelize.define("Homehcl", {
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
    return Homehcl
}