const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    recipeTitle: {
        type: String,
        required: true,
    },
    recipeType: {
        type: String,
    },
        ingredients: {
            type: [{body: String,}],
            required: true,
        },
    instructions: {
        Type: String,
        required: true,
    },
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;