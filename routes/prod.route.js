var express = require('express');

var controler = require('../controllers/prod.controller');

var router = express.Router();

router.get('/', controler.index);

module.exports = router;