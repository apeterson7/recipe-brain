const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Ingredient = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    quantity: Number,
    unit: String 
});

const recipeSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    ingredients: [Ingredient],
    instructions: [String],
    time:{
        active: String,
        cook: String,
        inactive: String,
        prep: String,
        ready: String,
        total: String,
    },
    link: String,
    rating: Number,
    notes: String,
    image: String
},{
    timestamps: true
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;