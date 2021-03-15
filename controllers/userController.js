const express = require('express');
const router = express.Router();
const db = require('../models')

router.get('/newUser', (req, res) => {
    res.render('users/newUser');
});

router.post('/', (req, res) => {
    // console.log(req);
    db.User.create(req.body, (err, newUser) => {
        if (err) {
            console.log(err);
        }
        res.redirect('/users/login');
    });
});

router.get('/login', (req, res) => {
    res.render('users/login');
});

router.post('/login', (req, res) => {
    // console.log(req.body);
    db.User.findOne({ email: req.body.email }, (err, foundUser) => {
        if (err) {
            console.log(err);
        }

        if (!foundUser) {
            return res.render('users/login');
        }

        if (foundUser.password === req.body.password) {
            return res.redirect(`/users/${foundUser._id}`);
        }

        res.render('users/login');
    });
});

router.get('/:id', (req, res) => {
  

    db.User.findById(req.params.id)
        .populate('recipes')
        .exec((err, foundUser) => {
            if (err) {
                console.log(err);
            };
           
            const context = {
                user: foundUser,
                userId: req.params.id,
            };
            res.render('users/profile', context);
        });
});

router.get('/:id/recipes/new', (req, res) => {
    const context = {
        userId: req.params.id,
    }
   
    res.render('users/newRecipe', context);
});


router.post('/:userId/recipes', (req, res) => {

    const context = {
        recipeTitle: req.body.recipeTitle,
        ingredients: req.body.ingredients,
        instructions: req.body.instructions,
        recipeType: req.body.recipeType,
        user: req.params.userId,
    }
    console.log(req.params.userId);
    db.Recipe.create(context, (err, newRecipe) => {
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


module.exports = router;
