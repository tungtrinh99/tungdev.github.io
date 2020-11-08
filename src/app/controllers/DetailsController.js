const Shoe = require('../models/shoes')
const { dataToObject } = require('../../util/mongoose');
const mySqlConnect = require('../models/db');
class DetailsController {
    show (req,res,next){
        var masp = req.params.MaSP;
        mySqlConnect.query( `SELECT * FROM sanpham WHERE MaSP = ${masp}`,(err,result,fields)=>{
            if(!err)  res.render('products/show',{
                docs:dataToObject(result)
            })
            else console.log(err);
        })
    }
}
module.exports = new DetailsController;