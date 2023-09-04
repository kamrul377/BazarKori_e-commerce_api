
const express = require("express")
const { getAllProducts, getSingleProduct, createProducts, updateOneProduct, deleteOneProduct } = require("../controllers/productController")
const { upload } = require("../utilities/multer")

const productsRouter = express.Router()

productsRouter.get('/products', getAllProducts)
productsRouter.get('/products/:name', getSingleProduct)

productsRouter.post('/products', upload.single('image'), createProducts)
productsRouter.patch('/products/:name', updateOneProduct)
productsRouter.delete('/products/:name', deleteOneProduct)


module.exports = productsRouter