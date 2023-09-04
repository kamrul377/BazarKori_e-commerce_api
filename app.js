
const cors = require('cors')
const express = require("express")
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(express.static("images"))

const productsRoute = require('./routes/productsRoute')

app.use(productsRoute)


module.exports = app