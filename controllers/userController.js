const express = require('express');
const router = express.Router();
const db = require('../models')

router.get('/', (req, res) => {
    const context = {
        meta: {
            title: 'Welcome to Jess and Cass Quarantine Cookbook!',
        },
    };
    res.render('index', context);
});

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
    db.User.findOne({ email: req.body.email }, (err, foundUser) => {
        if (err) {
            console.log(err);
        };

        if (!foundUser) {
            return res.render('users/login');
        };

        if (foundUser.password === req.body.password) {
            return res.redirect(`/users/${foundUser._id}`);
        };
        res.render('users/login');
    });
});




module.exports = router;