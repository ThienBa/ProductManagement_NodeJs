const { Sequelize } = require('sequelize');
const { DB, USER, PASSWORD, HOST, dialect } = require('../configs/db.config');
const { createProductModel } = require('./product.model');

const sequelize = new Sequelize(DB, USER, PASSWORD, {
    host: HOST,
    dialect
});

const Product = createProductModel(sequelize);

module.exports = {
    sequelize,
    Product
}