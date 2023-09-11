const { default: mongoose } = require("mongoose")

const googleSchema = mongoose.Schema({
    username: {
        type: String,
        require: true,
        unique: true
    },
    googleId: {
        type: String,
        require: true,
    }

},
    {
        timestamps: true
    }
)

const googleModel = mongoose.model("users", googleSchema)

module.exports = googleModel


