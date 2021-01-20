const express = require('express');
const router = express.Router();
const db = require('../models');




router.get('/:id', (req, res) => {
    const recipeId = req.params.id;

    db.Recipe.findById(recipeId)
    .populate('user')
    .exec((err, foundRecipe) => {
        if (err) {
            console.log(err);
            return res.send(err);
        }

        const context = {
            recipeData: foundRecipe,
        }
        res.render('recipes/showRecipe', context);
    });
});










module.exports = router;
