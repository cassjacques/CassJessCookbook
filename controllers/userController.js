const express = require('express');
const router = express.Router();
const db = require('../models')

router.get('/users/login', (req, res) => {
    res.render('/login');
});