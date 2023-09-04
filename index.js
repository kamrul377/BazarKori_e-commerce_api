
const app = require("./app");
require('dotenv').config()
require('./config/db')

app.listen(process.env.port, () => {
    console.log(`running server at http://localhost:${process.env.port}`)
})