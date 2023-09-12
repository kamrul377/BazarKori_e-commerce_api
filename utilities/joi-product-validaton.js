const Joi = require('joi');

const joiProductSchema = Joi.object({
    name: Joi.string()
        .required()
        .min(2)
        .max(30)
        .messages({
            'string.base': 'Name must be a string',
            'string.empty': 'Name is required',
            'string.min': 'Name length must be at least 2 characters',
            'string.max': 'Name length can be 30 characters or less',
        }),

    price: Joi.number()
        .required()
        .messages({
            'number.base': 'Price must be a number',
            'number.empty': 'Price is required',
        }),

    color: Joi.string()
        .required()
        .messages({
            'string.base': 'Color must be a string',
            'string.empty': 'Color is required',
        }),

    category: Joi.string()
        .required()
        .messages({
            'string.base': 'Category must be a string',
            'string.empty': 'Category is required',
        }),

    rating: Joi.number()
        .required()
        .messages({
            'number.base': 'Rating must be a number',
            'number.empty': 'Rating is required',
        }),

    description: Joi.string()
        .required()
        .messages({
            'string.base': 'Description must be a string',
            'string.empty': 'Description is required',
        }),

    image: Joi.string()
        .required()
        .messages({
            'string.base': 'Image must be a string',
            'string.empty': 'Image is required',
        }),
});

module.exports = joiProductSchema;
