const router = require('express').Router();
const controller = require('../controllers/product.controller');

router.get('', controller.all);

module.exports = router;
