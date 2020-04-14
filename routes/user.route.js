var express = require('express');

var controler = require('../controllers/user.controller');

var router = express.Router();

router.get('/', controler.index);

router.get('/search', controler.search);

router.get('/create', controler.create);

router.get('/:id', controler.get);

router.post('/create', controler.postCreate);

module.exports = router;
