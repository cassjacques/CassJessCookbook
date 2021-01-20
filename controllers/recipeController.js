const express = require('express');
const router = express.Router();
const db = require('../models');

router.post('/:userId/recipes', (req, res) => {
    db.Recipe.create(req.body, (err, newRecipe) => {
        if (err) {
            console.log(err);
        }

        db.User.findById(req.params.userId, (err, foundUser) => {
            if (err) {
                console.log(err);
            }

            foundUser.recipes.push(newRecipe
            );

            foundUser.save((err, savedUser) => {
                if (err) {
                    console.log(err);
                }

                res.redirect(`/users/${savedUser._id}`);
            });
        });
    });
});

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