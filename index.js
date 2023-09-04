
const app = require("./app");
require('dotenv').config()
require('./config/db')

app.listen(3006, () => {
    console.log(`running server at http://localhost:3006`)
})