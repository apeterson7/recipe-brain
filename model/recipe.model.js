const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Ingredient = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
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
    link: String,
    ingredients: [Ingredient],
    instructions: [String],
    time:{
        active: String,
        cook: String,
        inactive: String,
        prep: String,
        ready: String,
        total: String,
    }
},{
    timestamps: true
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;