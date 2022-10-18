module.exports = (sequelize, DataTypes) => {
    const UsersModels = sequelize.define("UsersModels", {
        id:{
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement:true,
            primaryKey: true,
            allowNull: true,
        },
        firstName:{
            type: DataTypes.STRING (50),
            allowNull:false,
        },
        lastName:{
            type: DataTypes.STRING (100),
            allowNull:false,
        },
        cpf:{
          type: DataTypes.STRING (11),
          allowNull:false,
        },
        cnpj:{
            type: DataTypes.STRING (14),
            allowNull:false,
        },
        email:{
          type: DataTypes.STRING (30),
          allowNull:false,
        },
        telephone:{
          type: DataTypes.STRING (10),
          allowNull:false,
        },
        mobilePhone:{
            type: DataTypes.STRING (10),
            allowNull:false,
        },
        professionalPhone:{
            type: DataTypes.STRING (10),
            allowNull:false,
        },
        birthDate:{
          type: DataTypes.DATE,
        },
        genre:{
          type: DataTypes.STRING (15),
          allowNull:false,
        },
        password:{
          type: DataTypes.STRING(100),
          allowNull:false,
        },
        isAdmin:{
          type: DataTypes.TINYINT,
          allowNull:false,
        },
        img: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
    },
    {
        TableName: "users",
        timestamps:false,
    });
    return UsersModels
}