
const express = require("express")
const { loginUser, registerUser, logoutUser, profileUser, allUsers } = require("../controllers/userController")
const passport = require("passport")


const userRouter = express.Router()



const checkLoggedIn = (req, res, next) => {
    if (req.isAuthenticated()) {
        return res.redirect('user/profile')
    }
    next()
}

const isLoggedIn = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next()
    } else {
        res.redirect("/user/login")
    }
}

userRouter.get('/user', allUsers)
userRouter.post('/user/register', registerUser)

userRouter.post('/user/login',
    passport.authenticate("local", { failureRedirect: "/" }),
    loginUser)

userRouter.get("/user/login", (req, res) => {
    // console.log(passport, 'passport')
    res.send("LOGIN")
})
userRouter.get('/user/logout', logoutUser)
userRouter.get('/user/profile', isLoggedIn, profileUser)


module.exports = userRouter