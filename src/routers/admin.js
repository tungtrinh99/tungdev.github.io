var express = require('express');
var router = express.Router();

const adminController = require('../app/controllers/AdminController');

router.get('/create',adminController.create)

module.exports = router;