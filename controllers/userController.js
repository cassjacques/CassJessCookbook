const express = require('express');
const router = express.Router();
const db = require('../models')

router.get('/newUser', (req, res) => {
    res.render('users/newUser');
});

router.post('/', (req, res) => {
    console.log(req);
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
    console.log(req.body);
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
    console.log(`User id=${req.params.id}`);

    db.User.findById(req.params.id)
        .populate('recipes')
        .exec((err, foundUser) => {
            if (err) {
                console.log(err);
            };
            console.log('look here:', foundUser);

            const context = {
                user: foundUser
            };
            res.render('users/profile', context);
        });
});

router.get('/:id/recipes/new', (req, res) => {
    const context = {
        userId: req.params.id
    }

    res.render('users/newRecipe', context);
});

module.exports = router;