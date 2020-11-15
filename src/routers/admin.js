var express = require('express');
var router = express.Router();

const adminController = require('../app/controllers/AdminController');
router.get('/view-product',adminController.viewProduct)
router.get('/add-product',adminController.addProduct)
router.post('/add-product',adminController.save)
router.get('/delete-product/:MaSP',adminController.deleteProduct)
router.get('/edit-product/:MaSP',adminController.editProduct)
router.post('/edit-product/:MaSP',adminController.updateProduct)


router.get('/',adminController.home)
module.exports = router;