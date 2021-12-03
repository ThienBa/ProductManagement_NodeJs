const { DataTypes } = require("sequelize");

const createProductModel = (sequelize) => {
    return sequelize.define("Product", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        amount: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        price: {
            type: DataTypes.DOUBLE,
            allowNull: false
        },
        sale: {
            type: DataTypes.STRING(50),
        }
    });
}

module.exports = {
    createProductModel,
}