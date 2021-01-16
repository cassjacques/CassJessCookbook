const express = require('express');
const router = express.Router();
const db = require('../models')

router.get('/newUser', (req, res) => {
    res.render('users/newUser');
});







router.get('/login', (req, res) => {
    res.render('users/login');
});

router.post('login', (req, res) => {
    console.log('Login Route');
});