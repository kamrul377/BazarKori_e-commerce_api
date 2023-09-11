const { default: mongoose } = require("mongoose")

const productSchema = mongoose.Schema({
    name: {
        type: String,
        require: [true, "Name must be required"],
        minLength: [2, 'name length must be 2 character'],
        maxLength: [30, "name length can be 30 character or less"]
    },
    price: {
        type: Number,
        require: [true, "price must be required"],
        trim: true
    },
    color: {
        type: String,
        require: [true, "color must be required"],
    },
    category: {
        type: String,
        require: [true, "category mush ber required"]
    },
    rating: {
        type: Number,
        require: [true, "rating must be required"],
    },
    description: {
        type: String,
        require: true
    },
    image: {
        type: String,
        require: [true, "Image must be required"]
    }

},
    {
        timestamps: true
    }
)

const productModel = mongoose.model("Products", productSchema)

module.exports = productModel