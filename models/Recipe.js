const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    recipeTitle: {
        type: String,
        required: true,
    },
        ingredients: {
            type: [{body: String,}],
            required: true,
        },
    instructions: {
        Type: String,
        required: true,
    },
    recipeType: {
        type: String,
    }
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;