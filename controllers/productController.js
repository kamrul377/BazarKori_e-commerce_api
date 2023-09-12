const path = require("path")
const productModel = require("../models/productModel")
const fs = require("fs")
const cloudinary = require("cloudinary").v2
const Joi = require("joi")


// cloudinary-------------------*******--------------
cloudinary.config({
    cloud_name: 'dxjldirwv',
    api_key: '247962375688242',
    api_secret: 'YJeoak6m7Kq4KzvYZn1s4locPWc',
});

// joi validator-------------------*******--------------



exports.getAllProducts = async (req, res) => {
    try {
        const limit = Number(req.query._limit)
        if (!limit) {
            const products = await productModel.find({}).select('-description')
            if (!products) {
                res.status(404).json({
                    message: "Products not found"
                })
            }
            res.status(200).send(products)
        } else {
            const limitedProducts = await productModel.find({}).select('-description').limit(limit)
            if (!limitedProducts) {
                res.status(404).json({
                    message: "Products not found"
                })
            }
            res.status(200).send(limitedProducts)
        }

    } catch (error) {
        res.status(402).json({
            success: false,
            message: "Data Not Found." + error
        })
    }
}
exports.getSingleProduct = async (req, res) => {
    try {
        const { name } = req.params
        const productName = name.trim()

        const singleProduct = await productModel.findOne({
            name: productName
        })
        if (!singleProduct) {
            res.json({
                message: "Products not found"
            })
            return
        }
        res.json(singleProduct)

    } catch (error) {
        res.status(402).json({
            success: false,
            message: "Something Wrong." + error
        })
    }
}

exports.createProducts = async (req, res) => {
    try {
        const { name, price, description, rating, color, category } = req.body;

        const image = await cloudinary.uploader.upload(req.file.path)

        const products = await productModel.create({
            name, price, color, rating, description, category, image: image.secure_url
        })

        res.status(201).json({
            message: "products added successfully"
        })


    } catch (error) {
        res.status(402).json({
            success: false,
            message: "Data Not Found." + error
        })
    }
}
exports.updateOneProduct = async (req, res) => {
    try {

        const givenName = req.params.name;
        const givenProductDetails = req.body

        const updatedProduct = await productModel.updateOne({ name: givenName }, {
            $set: {
                name: givenProductDetails.name,
                price: givenProductDetails.price,
                color: givenProductDetails.color,
                rating: givenProductDetails.rating,
                description: givenProductDetails.description
            }
        })

        if (updatedProduct.modifiedCount === 0) {
            res.send("fail update")
            return
        }

        res.send("update success.")
    } catch (error) {
        res.status(402).json({
            success: false,
            message: "Data Not Found." + error
        })
    }
}
exports.deleteOneProduct = async (req, res) => {
    try {

        const { name } = req.params
        const deletedProduct = await productModel.deleteOne({
            name
        })
        if (!deletedProduct) {
            res.send("Not available products to delte with this name.")
            return
        }
        res.status(203).json({
            message: "Products delete successfully.",
            deletedProduct
        })

    } catch (error) {
        res.status(402).json({
            success: false,
            message: "Data Not Found." + error
        })
    }
}