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

router.get('/:id/edit', (req, res) => {
    db.Recipe.findById(req.params.id, (err, foundRecipe) => {
        if (err) {
            console.log(err);
            return res.send(err);
        }
        const context = {
            recipeData: foundRecipe,
        };
        res.render('recipes/editRecipe', context)
    });
});

// PUT updated (EDIT) recipe by ID
router.put('/:id', (req, res) => {
    const recipeId = req.params.id;

    db.Recipe.findByIdAndUpdate(
        recipeId,
        req.body,
        {new: true},
        (err, updatedRecipe) => {
            if (err) {
                console.log(err);
                return res.send(err);
            }
            res.redirect(`/recipes/${recipeId}`);
        }
    )
});


module.exports = router;
