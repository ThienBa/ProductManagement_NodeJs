const { Product } = require("../models/root.model");

const getProductListService = async () => {
    const productList = await Product.findAll();
    if (productList) {
        return productList;
    } else {
        return false;
    }
}

const getDetailsProductService = async (id) => {
    const productDetail = await Product.findOne({ where: { id } });
    if (productDetail) {
        return productDetail;
    } else {
        return false;
    }
}

const addProductService = async (product) => {
    const listProduct = await getProductListService();
    const index = listProduct.findIndex(item => item.name === product.name);
    if (index !== -1) {
        return false;
    }

    const newProduct = await Product.create(product);
    if (newProduct) {
        return newProduct;
    } else {
        return false;
    }
}

const updateProductService = async (id, product) => {
    const productUpdate = await getDetailsProductService(id);
    if (productUpdate) {
        productUpdate.name = product.name;
        productUpdate.amount = product.amount;
        productUpdate.price = product.price;
        productUpdate.sale = product.sale;
        const productUpdated = await productUpdate.save();
        return productUpdated;
    } else {
        return false;
    }
}

const deleteProductService = async (id) => {
    const productDelete = await getDetailsProductService(id);
    if (productDelete) {
        await Product.destroy({ where: { id } })
        return productDelete;
    } else {
        return false;
    }
}

module.exports = {
    getProductListService,
    getDetailsProductService,
    addProductService,
    updateProductService,
    deleteProductService
}