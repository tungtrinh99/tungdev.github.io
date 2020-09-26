var express = require('express');
var router = express.Router();

const detailsController = require('../app/controllers/DetailsController');
router.get('/:slug',detailsController.show)
module.exports = router