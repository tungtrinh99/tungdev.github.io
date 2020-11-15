const Shoe = require('../models/shoes')
const mySqlConnect = require('../models/db');
const {
    dataToObject
} = require('../../util/mongoose');
// const totalProductt = require('../../util/action')
var totalProduct =  mySqlConnect.query('SELECT COUNT(MaSP) as tong FROM sanpham', (err, result, fields) => {
    return totalProduct = result[0].tong;
   
})
class AdminController {
    
    viewProduct(req, res, next) {
        mySqlConnect.query('SELECT * FROM sanpham', (err, result, fields) => {
 
            if (!err) res.render('admin/view_product', {
                totalProduct: totalProduct,
                docs: result,
                layout: false
            }, )
            else console.log(err);
        })
    }
    addProduct(req, res, next) {
        res.render('admin/insert_product', {
            layout: false
        })
    }
    save(req, res, next) {
        var data = req.body;
        mySqlConnect.query(`INSERT INTO sanpham SET ?  `, data, (err, result, fields) => {
            if (!err) res.redirect('/admin/view-product')
            else console.log(err);
        });
    }
    deleteProduct(req, res, next) {

        var masp = req.params.MaSP;
        mySqlConnect.query(`DELETE FROM sanpham WHERE MaSP = ${masp}`, (err, result, fields) => {
            if (!err) res.redirect('/admin/view-product')
            else console.log(err);
        })
    }
    editProduct(req, res, next) {
        var masp = req.params.MaSP;
        mySqlConnect.query(`SELECT * FROM sanpham WHERE MaSP = ${masp} `, (err, result, fields) => {
            if (!err) res.render('admin/edit_product', {
                docs: dataToObject(result),
                layout: false
            })
            else console.log(err);
        })

    }
    updateProduct(req, res, next) {

        var masp = req.params.MaSP;
        var data = req.body;
        mySqlConnect.query(`UPDATE sanpham SET ?  where MaSP = ${masp}`, data, (err, result, fields) => {
            if (!err) res.redirect('/admin/view-product')
            else console.log(err);
        });

    }
    home(req, res, next) {
        res.render('admin/index', {
            layout: false
        })
    }
}

module.exports = new AdminController;