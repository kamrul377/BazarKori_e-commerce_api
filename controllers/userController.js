const userModel = require("../models/userModel")
const bcrypt = require('bcrypt')

exports.registerUser = async (req, res) => {

    try {
        const user = await userModel.findOne({
            username: req.body.username
        })
        if (user) {
            return res.status(400).send("user already exists..")
        }

        const hashPass = bcrypt.hashSync(req.body.password, 10);
        const newUser = await userModel.create({
            username: req.body.username,
            password: hashPass
        })
        res.status(201).json({
            message: "user created",
            newUser
        })

    } catch (error) {
        res.status(500).send(error.message)
    }
}
exports.loginUser = (req, res) => {
    try {
        res.send("login")
    } catch (error) {
        res.status(500).send(error.message)
    }
}
exports.profileUser = (req, res) => {
    try {
        res.send("profileUser")
    } catch (error) {
        res.status(500).send(error.message)
    }
}
exports.logoutUser = (req, res) => {
    try {
        res.redirect('/user')
    } catch (error) {
        res.status(500).send(error.message)
    }
}