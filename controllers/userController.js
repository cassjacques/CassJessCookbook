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
    console.log('================');
    console.log('Login Route');
  
    console.log(req.body);
    // Find the user by email
    db.User.findOne({email: req.body.email}, (err, foundUser) => {
      if (err) {
        console.log(err);
      }
  
      if (!foundUser) {
        return res.render('users/login');
      }
  
      // Verify the submitted password matches the foundUser.password
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

            const context = {
                user: foundUser
            };
            res.render('users/profile', context);
        });
});




module.exports = router;