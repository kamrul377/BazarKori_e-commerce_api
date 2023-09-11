
const cors = require('cors')
const express = require("express")
const app = express()
const session = require("express-session")
const MongoStore = require('connect-mongo');
require("dotenv").config()
require('./config/passport')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(express.static("images"))
// app.use(express.static(__dirname + "views"))


const productsRoute = require('./routes/productsRoute')
const userRouter = require('./routes/userRoute');
const passport = require('passport');


app.set('trust proxy', 1) // trust first proxy
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
        mongoUrl: process.env.db_url,
        collectionName: "sessions"
    })
}))
app.use(passport.initialize())
app.use(passport.session())



// start users route here... 
app.use(userRouter)
app.use(productsRoute)


const dns = require("node:dns")

app.get('/', (req, res) => {

    res.send("Welcome to Bazar.")
})


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});
app.use((req, res) => {
    res.status(404).json({ error: 'Not Found' });
})



module.exports = app