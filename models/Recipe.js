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
        type: String,
    },
    recipeType: {
        type: String,
    },
    user: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }],
}, {timestamps: true});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
