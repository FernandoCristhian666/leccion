const { DataTypes } = require("sequelize");
const sequelize = require("../database/connect"); // Ruta al archivo database.js

const Credentials = sequelize.define(
    "credentials",
    {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        id_teacher: {
            type: DataTypes.STRING,
            allowNull: false,
        },    
    },
    {
        timestamps: false,
        tableName: "credentials",
    }
);
module.exports = Credentials;