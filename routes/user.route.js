var express = require('express');
var multer = require('multer');

var controler = require('../controllers/user.controller');
var validate = require('../validate/user.validate');

var upload = multer({ dest : './public/uploads/'});

var router = express.Router();

router.get('/', controler.index);

router.get('/search', controler.search);

router.get('/create', controler.create);

router.get('/:id', controler.get);

router.post('/create',
 upload.single('avatar'),
 validate.postCreate, 
 controler.postCreate
 );

module.exports = router;
