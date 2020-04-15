var express = require('express');

var controler = require('../controllers/auth.controller');

var router = express.Router();

router.get('/login', controler.login);

router.post('/login', controler.postLogin);

module.exports = router;
