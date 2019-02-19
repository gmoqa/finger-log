const router = require('express').Router();
const controller = require('../controllers/customer.controller');

router.get('', controller.all);

module.exports = router;
