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

// GET (EDIT) an recipe by ID with form 
router.get('/:id/edit', (req, res) => {
    db.Recipe.findById(req.params.id, (err, foundRecipe) => {
        if (err) {
            console.log(err);
            return res.send(err);
        }
        const context = {
            recipeData: foundRecipe,
        };
        res.render('recipes/editRecipe')
    });
});

// PUT updated (EDIT) recipe by ID
router.put('/:id', (req, res) => {
    db.Recipe.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true},
        (err, updatedRecipe) => {
            if (err) {
                console.log(err);
                return res.send(err);
            }
            res.redirect('/recipes')
        }
    )
})
<<<<<<< HEAD



=======
>>>>>>> dce818c3fcbd0cf46412495a5635e0571552575a


module.exports = router;