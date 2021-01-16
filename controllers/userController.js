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


module.exports = router;