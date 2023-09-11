const userModel = require("../models/userModel")
const bcrypt = require('bcrypt')
const session = require("express-session")
const path = require("path")
const passport = require("passport")

exports.allUsers = async (req, res) => {
    const users = await userModel.find({})
    res.send(users)
}
exports.registerUser = async (req, res) => {

    try {
        const user = await userModel.findOne({
            username: req.body.username
        })
        if (user) {
            return res.status(400).send("user already exists..")
        }

        // const hashPass = bcrypt.hashSync(req.body.password, 10);
        const newUser = await userModel.create({
            username: req.body.username,
            password: req.body.password
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
        const filePath = path.join(__dirname, '../views', 'profile.html');
        res.sendFile(filePath);
    } catch (error) {
        res.status(500).send(error.message)
    }
}

exports.profileUser = (req, res) => {
    try {
        const filePath = path.join(__dirname, '../views', 'profile.html');
        res.sendFile(filePath);

    } catch (error) {
        res.status(500).send(error.message)
    }
}

exports.logoutUser = (req, res) => {
    try {
        req.logout((err) => {
            if (err) {
                return next(err)
            }
            res.redirect("/user")
        })


    } catch (error) {
        res.status(500).send(error.message)
    }
}