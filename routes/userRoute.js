
const express = require("express")
const { loginUser, registerUser, logoutUser, profileUser } = require("../controllers/userController")


const userRouter = express.Router()


userRouter.get('/user', (req, res) => res.send("home Route"))
userRouter.post('/user/register', registerUser)
userRouter.post('/user/login', loginUser)
userRouter.post('/user/logout', logoutUser)
userRouter.post('/user/profile', profileUser)


module.exports = userRouter