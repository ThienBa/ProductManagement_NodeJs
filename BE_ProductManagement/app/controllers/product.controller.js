const { getProductListService, getDetailsProductService, addProductService, updateProductService, deleteProductService } = require("../services/product.service");

const getProductListController = async (req, res) => {
    const productList = await getProductListService();
    if (productList) {
        res.status(200).send(productList);
    } else {
        res.status(404).send("Not Found!");
    }
}

const getProductDetailsController = async (req, res) => {
    const { id } = req.params;
    const product = await getDetailsProductService(id);
    if (product) {
        res.status(200).send(product);
    } else {
        res.status(404).send("Not Found!");
    }
}

const addProductController = async (req, res) => {
    const product = req.body;
    const newProduct = await addProductService(product);
    if (newProduct) {
        res.status(201).send(newProduct);
    } else {
        res.status(404).send("Not found or product name already exists!");
    }
}

const updateProductController = async (req, res) => {
    const { id } = req.params;
    const product = req.body;
    const productUpdated = await updateProductService(id, product);
    if (productUpdated) {
        res.status(200).send(productUpdated);
    } else {
        res.status(404).send("Not found or product name already exists!");
    }
}

const deleteProductController = async (req, res) => {
    const { id } = req.params;
    const productDelete = await deleteProductService(id);
    if (productDelete) {
        res.status(200).send(productDelete);
    } else {
        res.status(404).send("Not Found!");
    }
}

module.exports = {
    getProductListController,
    getProductDetailsController,
    addProductController,
    updateProductController,
    deleteProductController
}