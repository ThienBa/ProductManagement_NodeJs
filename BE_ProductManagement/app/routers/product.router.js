const express = require('express');
const { getProductListController, getProductDetailsController, addProductController, updateProductController, deleteProductController } = require('../controllers/product.controller');
const { checkEmpty } = require('../middlewares/validations/product.validations');
const productRouter = express.Router();

productRouter.get("/", getProductListController);

productRouter.get("/:id", getProductDetailsController);

productRouter.post("/", checkEmpty, addProductController);

productRouter.put("/:id", checkEmpty, updateProductController);

productRouter.delete("/:id", deleteProductController);

module.exports = productRouter;