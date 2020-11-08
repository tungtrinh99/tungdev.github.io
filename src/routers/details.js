var express = require('express');
var router = express.Router();

const detailsController = require('../app/controllers/DetailsController');
router.get('/:MaSP',detailsController.show)
module.exports = router