const router = require('express').Router();
const controller = require('../controllers/user.controller');

router.get('', controller.all);

module.exports = router;
