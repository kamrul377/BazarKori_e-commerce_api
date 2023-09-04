


var mongoose = require('mongoose');
//Set up default mongoose connection
var mongoDB = process.env.db_url


mongoose.connect(mongoDB).then(() => {
    console.log("connected")
}).catch((error) => {
    console.log("Failed", error.message)
})
