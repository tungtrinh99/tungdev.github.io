const myModel = require('../models/shoes')
const numeral = require('numeral')
const {multipleMongooseToObject} = require('../../util/mongoose')
const { json } = require('body-parser');
const mySqlConnect = require('../models/db');

class SiteController {
    index(req,res,next) {
        mySqlConnect.query('SELECT * FROM sanpham',(err,result,fields)=>{
            if(!err) res.render('home',{docs : result})
            else console.log(err);
        })
    }

}
module.exports = new SiteController