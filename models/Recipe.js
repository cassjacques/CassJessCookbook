const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    recipeTitle: {
        type: String,
        required: true,
    },
    ingredients: [{
        type: String,
    }],
    instructions: {
        Type: String,
    },
    recipeType: {
        type: String,
    },
}, {timestamps: true});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
