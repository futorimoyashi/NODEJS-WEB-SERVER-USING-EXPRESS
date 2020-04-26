var express = require('express');

var controler = require('../controllers/product.controller');

var router = express.Router();

router.get('/', controler.index);
router.get('/:id', controler.find);
router.post('/', controler.create);
router.put('/:id', controler.update);
router.patch('/:id', controler.updateAll);
router.delete('/:id', controler.delete);
module.exports = router;