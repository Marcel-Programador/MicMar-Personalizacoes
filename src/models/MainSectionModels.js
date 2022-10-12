module.exports = (sequelize, DataType) => {
    const MainSectionModels = sequelize.define("MainSectionModels", {
        title_impact_1: {
            type: DataType.STRING,
            primaryKey: true,
            autoIncrement: false,
            allowNull: false,            
        },
        title_impact_2: {
            type: DataType.STRING,
            primaryKey: true,
            autoIncrement: false,
            allowNull: false,            
        },
        title_impact_3: {
            type: DataType.STRING,
            primaryKey: true,
            autoIncrement: false,
            allowNull: false,
        },
        title_impact_4: {
            type: DataType.STRING,
            primaryKey: true,
            autoIncrement: false,
            allowNull: false,
        },
        title_impact_5: {
            type: DataType.STRING,
            primaryKey: true,
            autoIncrement: false,
            allowNull: false,
        },
        title_impact_6: {
            type: DataType.STRING,
            primaryKey: true,
            autoIncrement: false,
            allowNull: false,
        },
        title_impact_7: {
            type: DataType.STRING,
            primaryKey: true,
            autoIncrement: false,
            allowNull: false,
        },
        title_impact_8: {
            type: DataType.STRING,
            primaryKey: true,
            autoIncrement: false,
            allowNull: false,
        },
    },{
        tableName: "title_impact_page",
        timestamps: false,
    });
    return MainSectionModels
}